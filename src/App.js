import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Pages/Movies/Movies';
import About from './Pages/About us/About';
import Contact from './Pages/Contact/Contact';
import Fav from './Pages/Fav/Fav';
import Search from './Pages/Search/Search';
import Details from './Pages/details/Details';

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - الصفحة غير موجودة</h1>
      <p>الرجاء العودة للصفحة الرئيسية</p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="fav" element={<Fav />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NotFound />} /> {/* مسار لأي صفحة غير موجودة */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
