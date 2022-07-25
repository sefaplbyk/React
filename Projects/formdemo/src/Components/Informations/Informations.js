import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";
function Informations(props) {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surName: "",
        gender: "",
        hobies: "",
      },
      onSubmit: (values) => {
        // console.log(values);
        props.setCounter(props.counter + 1);
        props.data.push(values);
      },
      // validation yaptığımız fonksiyonu direkt burda çağırıp kontrol işlemlerini yapabiliriz
      validationSchema,
    });

  return (
    <div>
      <h1>Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={values.email}
          autoComplete="off"
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {errors.name && touched.name && (
          <div className="error">{errors.name}</div>
        )}
        <br />
        <label>Surname:</label>
        <input
          name="surName"
          value={values.surName}
          autoComplete="off"
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {errors.surName && touched.surName && (
          <div className="error">{errors.surName}</div>
        )}
        <br />
        <label>Cinsiyet</label>
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={values.gender === "male"}
          onChange={handleChange}
        ></input>
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        ></input>
        {errors.gender && touched.gender && (
          <div className="error">{errors.gender}</div>
        )}
        <br />
        <h4>Hobiler</h4>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          ></input>
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          ></input>
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          ></input>
          Photography
        </div>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Informations;
