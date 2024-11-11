import FaustinoApp from "./FaustinoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/login/Login";
import Register from "./pages/Admin/login/Register";
import AdminPage from "./pages/Admin/AdminPage";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsDetail";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FaustinoApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
