import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import mainImage from "../assets/img/image1.jpg";
import cgLogo from "../assets/img/logo.png";
import "../styles/login.scss";
import { useDispatch } from "react-redux";
import { loginRequest } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };
  const validateSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  const handleSubmit = (values, resetForm) => {
    dispatch(loginRequest(values,navigate))
  };
  return (
    <div className="login">
      <img src={mainImage} className="mainImage" />
      <div className="imageOverlay"></div>
      <div className="loginInfo">
        <div className="title">
          <img src={cgLogo} className="logo" />
          <div className="title">Welcome to Chattisgarh Tourism</div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, resetForm);
          }}
        >
          {({ values, errors, touched,handleChange, handleBlur }) => (
            <Form className="inputInfo">
              <div >
                <div className="Info">Email-id</div>
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="input"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && errors.email}
                <div className="Info">Password</div>
                <input
                  type="password"
                  placeholder="ENTER YOUR PASSWORD"
                  className="input"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button className="login_btn" type="submit">
                <span>Login</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
