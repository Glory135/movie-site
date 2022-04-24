import React, { useState } from "react";
import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import close from "../images/icon-close.svg";
import axios from "axios";
import { notifyError } from "../Utilities";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 700,
    height: 600,
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
      height: "100vh",
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    marginBottom: theme.spacing(3),
    width: 270,
  },
}));
export const SignUpModal = ({ signOpen, setSignOpen, setLogOpen }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rePassword === password) {
      try {
        await axios.post(
          "https://moviehunterr.herokuapp.com/api/users/register",
          {
            firstname,
            lastname,
            username,
            email,
            phone,
            gender,
            password,
            image: previewSource,
          }
        );

        setSignOpen(false);
        setLogOpen(true);
      } catch (error) {
        notifyError("ERROR try again");
      }
    } else {
      setPassword("");
      setRePassword("");
      notifyError("Passwords Do Not Match!!");
    }
  };

  const previewPic = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <Modal open={signOpen}>
      <Container className={classes.container}>
        <div className='form-container'>
          <div className='form-header'>
            <h1>Sign Up</h1>
            <div onClick={() => setSignOpen(false)} className='img-container'>
              <img src={close} alt='close' />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={classes.form}
            autoComplete='off'
          >
            <div className={classes.item}>
              <TextField
                id='firstname'
                label='Firstname'
                size='small'
                style={{ width: "100%" }}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id='lastname'
                label='Lastname'
                size='small'
                style={{ width: "100%" }}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id='username'
                label='Username'
                size='small'
                style={{ width: "100%" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='email'
                id='email'
                label='Email'
                size='small'
                style={{ width: "100%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='number'
                id='phone'
                label='Phone No'
                size='small'
                style={{ width: "100%" }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <FormLabel component='legend'>Gender</FormLabel>
              <RadioGroup
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                aria-label='gender'
                name='gender'
              >
                <FormControlLabel
                  value='Male'
                  control={<Radio size='small' />}
                  label='Male'
                />
                <FormControlLabel
                  value='Female'
                  control={<Radio size='small' />}
                  label='Female'
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <TextField
                type='password'
                id='password'
                label='Password'
                size='small'
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='password'
                id='rePassword'
                label='Retype password'
                size='small'
                style={{ width: "100%" }}
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='file'
                id='profilePic'
                label='Profile Picture'
                onChange={(e) => {
                  const file = e.target.files[0];
                  previewPic(file);
                }}
                size='small'
                style={{ width: "100%" }}
              />
            </div>

            <div className={classes.item}>
              <Button
                type='submit'
                variant='outlined'
                color='primary'
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
            </div>

            {previewSource && (
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src={previewSource}
                alt='chosen'
              />
            )}
          </form>
        </div>
      </Container>
    </Modal>
  );
};
