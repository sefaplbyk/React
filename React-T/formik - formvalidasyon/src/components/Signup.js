import React from "react";

import validationSchema from "./Validations";

import { useFormik } from "formik";
function Signup() {
  {
    /* handleSubmit ile yukarıdaki onSubmit fonksiyonunu yakalayıp çalıştırıyoruz, handleChange ile ise direkt değerleri alabiliyoruz,handleBlur ile inputa veri girererken inputtan ayrılmadan hata göstermemesini sağliyoruz ama inputtan ayrıldığımız an hatayı gösteriyoruz,values ile tüm formun verilerini alabiliyoruz,errors ile hataları otomatik yakalıyoruz,touched ile o inputa dokunuldumu diye kontrol ediyoruz */
  }
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      // validationSchema bir tanımdır ve kontrol işlemini yapar öbür componentide de o isimle import edersek doğrudan kullanabiliyoruz veya validationSchema: componentismi şeklinde de kullanabiliriz
      validationSchema,
    });
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>

        {/* errors altında email varsa ve daha önce focus olunmuşsa bu uyarıyı göster demiş oluyoruz */}
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label>Confirm Password </label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {/* değerleri stringe çevirip bu şekilde görebiliriz */}
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;
