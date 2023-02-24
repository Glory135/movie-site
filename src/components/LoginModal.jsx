import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import close from "../images/icon-close.svg";
import { Context } from "../App";
import { notifyError, notifySuccess } from "../Utilities";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 400,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));
export const LoginModal = ({ logOpen, setLogOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setLoggedIn } = useContext(Context);
  const classes = useStyles();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://movie-site-5lzl.onrender.com/api/users/login",
        { email, password }
      );
      const token = response.data.token;
      const user = response.data.user;

      if (token) {
        localStorage.setItem("movieHunter_user_token", JSON.stringify(token));
        setLoggedIn(true);
        setUser(user);
        notifySuccess(`Welcome ${user.username}`);
        setLogOpen(false);
        setEmail("");
        setPassword("");
      } else {
        setPassword("");
        notifyError("ERROR try again");
      }
    } catch (error) {
      console.log(error);
      setPassword("");
      notifyError("Invalid Credentials try again");
    }
  };

  return (
    <Modal open={logOpen}>
      <Container className={classes.container}>
        <div className='form-container'>
          <div className='form-header'>
            <h1>Log In</h1>
            <div onClick={() => setLogOpen(false)} className='img-container'>
              <img src={close} alt='close' />
            </div>
          </div>
          <form
            onSubmit={handleLogIn}
            className={classes.form}
            autoComplete='off'
          >
            <div className={classes.item}>
              <TextField
                type='email'
                id='email'
                label='Email'
                size='small'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='password'
                id='password'
                label='Password'
                size='small'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%" }}
              />
            </div>

            <div className='btn-container'>
              <Button
                type='submit'
                variant='outlined'
                color='primary'
                style={{ width: "100%", color: "black" }}
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Modal>
  );
};
