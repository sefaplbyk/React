import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("blog");
      navigate("blog", { replace: true }); //geri tuşunda geçmişi göstermemek için kullanılır login sayfalarına yönlendirmede vs.
      //   navigate(-1); 1 önceki sayfaya gider
      //   navigate(-2); 2 önceki sayfaya gider
      //   navigate(1); 1 sonraki sayfaya gider
    }, 3000);
  }, [navigate]);
  return (
    <div>
      <h1>Home</h1>
      You will be redireced to the blog in 3 seconds..
    </div>
  );
};
export default Home;
