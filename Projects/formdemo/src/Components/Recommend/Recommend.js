import React from "react";
import { useFormik } from "formik";
import Validations from "./Validations";
function Recommend(props) {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        degerlendirme: "iyi",
        tavsiye: "",
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
      <h1>Recommend</h1>
      <form onSubmit={handleSubmit}>
        <label>Bizi değerlendirmek ister misiniz?</label>
        <select
          name="degerlendirme"
          value={values.degerlendirme}
          onChange={handleChange}
        >
          <option value="iyi">İyi</option>
          <option value="orta">Orta</option>
          <option value="kötü">Kötü</option>
        </select>
        <br />
        <label>Tavsiyeleriniz</label>
        <textarea
          name="tavsiye"
          placeholder={values.tavsiye}
          onBlur={handleBlur}
          onChange={handleChange}
        ></textarea>
        {errors.tavsiye && touched.tavsiye && (
          <div className="error">{errors.tavsiye}</div>
        )}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Recommend;
