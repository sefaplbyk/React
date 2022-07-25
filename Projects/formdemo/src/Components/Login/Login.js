import React from "react";
import { useFormik } from "formik";
import Validations from "./Validations";
function Login(props) {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        props.setCounter(props.counter + 1);
        props.data.push(values);
      },
      validationSchema: Validations,
    });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          autoComplete="off"
          name="email"
          value={values.email}
          type="email"
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
