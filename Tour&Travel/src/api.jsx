import axios from "axios";
import { placeActions } from "./store/placeSlice";
import Cookies from 'js-cookie'
import { userActions } from "./store/userSlice";

axios.defaults.withCredentials = true
const API = axios.create({
  baseURL : "http://localhost:8000/",
  // baseURL: "https://tourism-platform.vercel.app/",
});

API.interceptors.request.use((req) => {
  if (Cookies.get('x-access-token')) {
    req.headers['x-access-token'] = `${Cookies.get('x-access-token')}`;
  }
  return req;
});

export const fetchPlaceList = () => {
  return async (dispatch) => {
    try {
      const place = await API.get("user/places-list?page=1&limit=2");
      dispatch(placeActions.setData(place.data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginRequest = (data,navigate) =>{
  return async (dispatch) => {
    try {
      const res = await API.post("/superadmin/login",data);
      dispatch(userActions.setAuth(true))
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
}