import { object, string } from "yup";
// Bu fonksiyonu import ettiğimiz sayfada çağırıp validation işlemini yapabiliriz yup sayesinde
const Validations = object({
  email: string().email("Geçerli bir email girin.").required("Zorunlu alan"),
  password: string()
    .min(4, "Parolanız en az 4 karakterdir.")
    .required("Zorunlu alan"),
});
export default Validations;
