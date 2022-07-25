import { object, string } from "yup";
// Bu fonksiyonu import ettiğimiz sayfada çağırıp validation işlemini yapabiliriz yup sayesinde
const Validations = object({
  name: string().required("Zorunlu alan"),
  surName: string().required("Zorunlu alan"),
  gender: string().required("Zorunlu alan"),
});
export default Validations;
