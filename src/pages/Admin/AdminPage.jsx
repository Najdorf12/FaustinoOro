import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "/iconNav.png";
import TournamentsForm from "./forms/TournamentsForm";
import GamesForm from "./forms/GamesForm";
import NewsForm from "./forms/NewsForm";
import PalmaresForm from "./forms/PalmaresForm";
import { useRef, useState, useEffect } from "react";

const AdminPage = () => {
  const navigate = useNavigate();
  const [selectedFormSection, setSelectedFormSection] = useState("news_form");
  const formContainerRef = useRef(null);

  useEffect(() => {
    verifyAuth();
  }, []);

  const verifyAuth = async () => {
    try {
      const res = await axios.get("/auth/verify").catch((error) => {
        if (error) {
          navigate("/login");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="relative w-full bg-zinc-800 min-h-[140vh] flex flex-col items-center  pb-10 overflow-hidden">
      <nav className="font-text2 text-xl  relative flex justify-between items-center w-full  mt-2 px-5 xl:mt-3 xl:px-16 xl:text-2xl  2xl:px-20 ">
        <picture className="w-12 h-12 flex items-center justify-center rounded-full xl:h-16 xl:w-16 2xl:w-20 2xl:h-20 ">
          <img className="rounded-full w-full" src={logo} alt="logo" />
        </picture>
        <ul className="flex gap-6  xl:gap-10 2xl:gap-12">
          <li className="text-whiteCustom border-l-2 border-zinc-600 pl-2 xl:pl-3 py-1 hover:scale-105 hover:text-white duration-500 ">
            <Link to={"/"}>Home </Link>
          </li>
          <li
            onClick={() => logout()}
            className="text-zinc-600 border-l-2 pl-2 xl:pl-3 py-1 border-zinc-600 cursor-pointer  hover:scale-105 hover:text-white duration-500"
          >
            Logout
          </li>
        </ul>
      </nav>

      <div className="w-full flex justify-center items-center gap-3 text-base font-medium font-title4 text-zinc-500 mt-6 md:text-lg xl:mt-8 xl:text-xl xl:gap-12 2xl:text-2xl ">
        <button
          onClick={() => setSelectedFormSection("news_form")}
          className={`${
            selectedFormSection === "news_form"
              ? "text-whiteCustom border-b border-sky-600 pb-[2px]"
              : ""
          }`}
        >
          Noticias
        </button>
        <button
          onClick={() => setSelectedFormSection("tournaments_form")}
          className={`${
            selectedFormSection === "tournaments_form"
              ? "text-whiteCustom border-b border-sky-600 pb-[2px]"
              : ""
          }`}
        >
          Torneos
        </button>
        <button
          onClick={() => setSelectedFormSection("games_form")}
          className={`${
            selectedFormSection === "games_form"
              ? "text-whiteCustom border-b border-sky-600 pb-[2px] "
              : ""
          }`}
        >
          Partidas
        </button>
        <button
          onClick={() => setSelectedFormSection("palmares_form")}
          className={`${
            selectedFormSection === "palmares_form"
              ? "text-whiteCustom border-b border-sky-600 pb-[2px]"
              : ""
          }`}
        >
          Logros
        </button>
      </div>

      <div
        ref={formContainerRef}
        className="mt-9 w-full flex flex-col items-center px-4 xl:mt-14 "
      >
        {selectedFormSection === "news_form" && <NewsForm />}
        {selectedFormSection === "tournaments_form" && <TournamentsForm />}
        {selectedFormSection === "games_form" && <GamesForm />}
        {selectedFormSection === "palmares_form" && <PalmaresForm />}
      </div>
    </section>
  );
};
export default AdminPage;
