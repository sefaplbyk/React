import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* hi path'ında(adresinde) element içindeki şeyi gösterir router amacı yönlendirmektir */}
        {/* <Route path="hi" element={<h1>Hi</h1>} />
        <Route path="bye" element={<h1>Bye</h1>} /> */}
        {/* içerideki 3 routeyi dıştaki layout routesinin içini aldık çünkü layout hep gözüksün istiyoruz */}
        <Route path="/*" element={<Layout></Layout>}>
          <Route path="" element={<Home></Home>} />
          <Route path="about" element={<About></About>} />
          <Route path="blog" element={<Blog></Blog>} />
          {/* :postId parametre alacağımız alanı belirliyoruz : dan sonra gelen şey parametremiz sonra o routenin componentinde o parametre neyse useParams ile karşılayıp kullanabiliyoruz */}
          <Route path="blog/:postId" element={<Post></Post>} />
          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
