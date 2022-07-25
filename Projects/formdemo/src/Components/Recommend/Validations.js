import { object, string } from "yup";
// Bu fonksiyonu import ettiğimiz sayfada çağırıp validation işlemini yapabiliriz yup sayesinde
const Validations = object({
  degerlendirme: string(),
  tavsiye: string()
    .min(10, "Çok kısa")
    .required("Tavsiyeleriniz bizim için çok önemli"),
});
export default Validations;
