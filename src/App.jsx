import FaustinoApp from "./FaustinoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/login/Login";
import Register from "./pages/Admin/login/Register";
import AdminPage from "./pages/Admin/AdminPage";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsDetail";
import Courses from "./pages/Courses";
const newsData = [
  {
    title: "FAUSTINO CONSIGUE OTRO HITO HISTORICO",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste reprehenderit commodi a nihil.",
    date: "1",
  },
  {
    title: "FAUSTINO LOREM IMPSUM DOLOR SIT",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste reprehenderit commodi a nihil.",
    date: "2",
  },
  {
    title: "FAUSTINO LOREM IMPSUM DOLOR SIT",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste reprehenderit commodi a nihil.",
    date: "3",
  },
  {
    title: "FAUSTINO LOREM IMPSUM DOLOR SIT",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste reprehenderit commodi a nihil.",
    date: "4",
  },
  {
    title: "FAUSTINO LOREM IMPSUM DOLOR SIT",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste reprehenderit commodi a nihil.",
    date: "5",
  },
  {
    title: "FAUSTINO LOREM IMPSUM DOLOR SIT",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste reprehenderit commodi a nihil.",
    date: "6",
  },
];
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FaustinoApp newsData={newsData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News newsData={newsData} />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
