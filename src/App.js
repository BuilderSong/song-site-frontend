import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginGeneral from "./pages/LoginGeneral";
import Blogs from "./pages/Blogs";
import BlogSinglePage from "./pages/BlogSinglePage";
import New from "./pages/New";
import BlogEditPage from "./pages/BlogEditPage";
import Auth from "./components/Auth";
import Subscribe from "./pages/Subscribe";
import UnSubscribe from "./pages/UnSubscribe";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route exact path="/blog/:id" element={<BlogSinglePage />} />
        <Route path="/login" element={<LoginGeneral />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/unsubscribe" element={<UnSubscribe />} />
        <Route path="/new"
          element={
            <Auth>
              <New />
            </Auth>
          }
        />
        <Route exact path="/edit/:id"
          element={
            <Auth>
              <BlogEditPage />
            </Auth>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
