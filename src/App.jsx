import FaustinoApp from "./FaustinoApp";
import Games from "./pages/Games";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FaustinoApp />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
