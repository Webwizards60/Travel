import axios from "axios";
import { placeActions } from "./store/placeSlice";

const API = axios.create({
  // baseURL: "https://sih11.herokuapp.com/",
  baseURL: "https://tourism-platform-backend.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  // if (Cookies.get('')) {
  //   req.headers[''] = `${Cookies.get('')}`;
  // }
  req.headers["x-access-token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmpfaWQiOiI2MzI4OGFjOWUwZDBmMjIzYTQyYmRiNmEiLCJlbWFpbCI6InRhbnVAZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE2Njc3MTY5NDksImV4cCI6MTY2NzcyNDE0OX0.Jk0uIO0awGNMc6F9BjXP7myA_LlIU8slQpO9yIhhXWY";
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
