import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [windowWidth, setwindowWidth] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsMenuOpen(e.target.checked);
  };
  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <section className=" w-full h-screen bg-[#e8e8e8] flex justify-center items-center z-50 ">
        <div
          className="w-[100%] h-[100%] relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex justify-end items-center "
          id="home"
        >
          <article className="flex flex-col justify-center items-center gap-3 text-center mt-[130%] sm:px-6 md:mt-[60%] md:pt-6 lg:mt-[50%] xl:mt-[27%] xl:mr-[5%] h-[160px] ">
            <h1
              id="title-name"
              className="font-text2  text-6xl leading-[5rem] font-bold text-gray-200 md:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[7.5rem] z-50 "
            >
              FAUSTINO ORO
            </h1>
            <p
              id="title-name"
              className=" font-text2 font-semibold text-2xl text-stone-600  md:text-3xl xl:text-[2rem] xl:mt-4 2xl:mt-12 2xl:text-[2.5rem]"
            >
              LOREM IMPSUM
            </p>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute mt-2 top-0 right-0 left-0 flex justify-end mr-4 items-center gap-3 font-text2 text-black py-1 lg:mt-3 lg:justify-end lg:pr-[3%] 2xl:pr-[4%] 2xl:mt-5">
            {windowWidth < 900 ? (
              <section className="flex flex-col items-end gap-3">
                <input
                  id="checkbox2"
                  type="checkbox"
                  checked={isMenuOpen}
                  onChange={handleCheckboxChange}
                />
                <label className="toggle toggle2" htmlFor="checkbox2">
                  <div id="bar4" className="bars"></div>
                  <div id="bar5" className="bars"></div>
                  <div id="bar6" className="bars"></div>
                </label>
                <ul
                  className={`flex flex-col gap-12 mt-2 text-lg text-gray-200 menu ${
                    isMenuOpen ? "menu-open" : ""
                  }`}
                >
                  <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-5 py-[2.5px] cursor-pointer flex items-center justify-center">
                    Torneos
                  </li>
                  <Link to="/games">
                    <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] flex items-center justify-center">
                      Partidas
                    </li>
                  </Link>
                  <Link to="/games">
                    <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] flex items-center justify-center">
                      Cursos
                    </li>
                  </Link>
                  <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] flex items-center justify-center">
                    Contacto
                  </li>
                </ul>
              </section>
            ) : (
              <ul className="flex   gap-3 sm:gap-14 xl:gap-6 text-lg 2xl:text-2xl 2xl:gap-16 text-gray-200">
                <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-5 py-[2.5px] xl:px-7 2xl:py-[2.7px] 2xl:px-6 cursor-pointer flex justify-center items-center">
                  Torneos
                </li>
                <Link to="/games">
                  <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center">
                    Partidas
                  </li>
                </Link>
                <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center">
                  Cursos
                </li>
                <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center">
                  Contacto
                </li>
              </ul>
            )}
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
