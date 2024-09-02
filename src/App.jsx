import FaustinoApp from "./FaustinoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/login/Login";
import Register from "./pages/Admin/login/Register";
import AdminPage from "./pages/Admin/AdminPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FaustinoApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
