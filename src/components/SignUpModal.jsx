import React from "react";
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
export const SignUpModal = ({ signOpen, setSignOpen }) => {
  const classes = useStyles();
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

          <form className={classes.form} autoComplete='off'>
            <div className={classes.item}>
              <TextField
                id='firstname'
                label='Firstname'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id='lastname'
                label='Lastname'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id='username'
                label='Username'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='email'
                id='email'
                label='Email'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='number'
                id='phone'
                label='Phone No'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <FormLabel component='legend'>Gender</FormLabel>
              <RadioGroup aria-label='gender' name='gender1'>
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
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='password'
                id='rePassword'
                label='Retype password'
                size='small'
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                type='file'
                id='profilePic'
                label='Profile Picture'
                size='small'
                style={{ width: "100%" }}
              />
            </div>

            <div className={classes.item}>
              <Button
                variant='outlined'
                color='primary'
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Modal>
  );
};
