import { object, ref, string } from "yup";

const validations = object({
  // initialvaluesteki keylerle direkt aynı isimleri verip eşleştirebiliyoruz
  // email tipinde string olup olmadığını kontrol ediyoruz,ve istediğimiz hata mesajını türkçe olarak ilgili özelliğe girebiliyoruz,ve istersek zorunluluk hata mesajını da düzeltebiliyoruz
  email: string().email("Geçerli bir email girin.").required("Zorunlu alan"),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalıdır.")
    .required("Zorunlu alan"),
  //   oneOf ile kontrol yapiyoruz
  passwordConfirm: string()
    .oneOf([ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan"),
});

export default validations;
