import React from "react";
import {
  Button,
  Container,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import close from "../images/icon-close.svg";

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
  const classes = useStyles();
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
          <form className={classes.form} autoComplete='off'>
            <div className={classes.item}>
              <TextField
                id='Username'
                label='Username'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='password'
                id='password'
                label='Password'
                size='small'
                style={{ width: "100%" }}
              />
            </div>

            <div className='btn-container'>
              <Button
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
