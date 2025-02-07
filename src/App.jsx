import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaustinoApp from "./FaustinoApp";
import Login from "./pages/Admin/login/Login";
/* import Register from "./pages/Admin/login/Register";  */
import AdminPage from "./pages/Admin/AdminPage";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsDetail";
import Tournaments from "./pages/Tournaments/Tournaments";
import Courses from "./pages/Courses";
import ErrorPage from "./pages/ErrorPage";
import { AdminDataProvider } from "./pages/Admin/AdminDataContext";

function App() {
  return (
    <>
      <AdminDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FaustinoApp />} />
            <Route path="/login" element={<Login />} />
          {/*    <Route path="/register" element={<Register />} />  */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </AdminDataProvider>
    </>
  );
}
export default App;
