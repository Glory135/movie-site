import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import axios from "axios";

// toast messages
export const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notifyWarning = (message) => {
  toast.warning(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

// to check and validate token
export const validate = async (setLoggedIn, setUser) => {
  const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
  if (token) {
    const decoded_token = jwt_decode(token);
    const currentTime = new Date().getTime();
    if (decoded_token.exp * 1000 < currentTime) {
      setLoggedIn(false);
      setUser({});
      localStorage.removeItem("movieHunter_user_token");
    } else {
      try {
        const user = await axios.get(
          "https://moviehunterr.herokuapp.com/api/users/me",
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        setUser(user.data);
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    setLoggedIn(false);
    setUser({});
  }
};

export const logOut = (setLoggedIn, setUser) => {
  setLoggedIn(false);
  setUser({});
  localStorage.removeItem("movieHunter_user_token");
  notifySuccess("Logged Out!!");
};

export const handleDelete = async (url, id, name, setLoggedIn, setUser) => {
  const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
  validate(setLoggedIn, setUser);
  try {
    await axios.delete(`${url}/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    notifySuccess(`${name} deleted successfully`);
  } catch (error) {
    notifyError("An Error Occured Try Again!!");
  }
};

const addFav = async (id, setFaved) => {
  const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
  try {
    await axios.post(
      `https://moviehunterr.herokuapp.com/api/users/me/favourites/add/${id}`,
      {},
      { headers: { authorization: `Bearer ${token}` } }
    );
    setFaved(true);
    notifySuccess("Added To Your Favourites");
  } catch (error) {
    console.log(error);
    notifyError("Error!!!");
  }
};
const removeFav = async (id, setFaved) => {
  const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
  try {
    await axios.delete(
      `https://moviehunterr.herokuapp.com/api/users/me/favourites/remove/${id}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    setFaved(false);
    notifySuccess("Removed from Your Favourites");
  } catch (error) {
    console.log(error);
    notifyError("Error!!!");
  }
};
export const handleFav = (id, faved, setFaved) => {
  if (faved) {
    removeFav(id, setFaved);
  } else {
    addFav(id, setFaved);
  }
};
