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
          className="w-[100%] h-screen relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex  justify-center"
          id="home"
        >
          <article className="w-[95%] flex justify-center items-end pb-[20%] xl:justify-center xl:pb-[5%] xl:">
            <h1
              id="title-name"
              className="font-text2 tracking-wider text-center  text-[3rem] leading-[4.2rem] font-bold text-gray-200 z-50 flex  justify-center items-start md:items-center gap-3 px-3 py-3  bg-clip-text text-transparent bg-gradient-to-br from-[#ADA996] via-[#F2F2F2] to-stone-700  md:text-[4.5rem] xl:min-h-[200px] xl:gap-8 2xl:gap-12 xl:text-[6rem] 2xl:text-[7.5rem]"
            >
              <span className="flex justify-center items-center text-[3.9rem] h-[65px] px-1 bg-[#7c2c2c] text-white font-title2 font-semibold rounded-lg tracking-wide md:text-[4.5rem] xl:text-[8rem] xl:px-2  xl:h-[120px] xl:-mt-3 2xl:text-[9rem] 2xl:h-[150px]">
                IM
              </span>{" "}
              FAUSTINO ORO
            </h1>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute mt-2 top-0 right-0 left-0 flex justify-end mr-4 items-center gap-3 font-text2 text-black py-1 lg:mt-3 lg:justify-end lg:pr-[2%]  2xl:mt-5">
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
                  <Link /* to="/games" */>
                    <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] flex items-center justify-center">
                      Partidas
                    </li>
                  </Link>
                  <Link to={"/news"}>
                    <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2.5px] flex items-center justify-center cursor-pointer">
                      Noticias
                    </li>
                  </Link>
                  <Link /* to="/games" */>
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
              <ul className="flex  gap-3 sm:gap-14 xl:gap-9 text-lg 2xl:text-2xl 2xl:gap-10 text-gray-200">
                <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-5 py-[1px] xl:px-7 2xl:py-[2.7px] 2xl:px-6 cursor-pointer flex justify-center items-center hover:scale-110 hover:border-red-600 duration-500">
                  Torneos
                </li>
                <Link /* to="/games" */>
                  <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[1px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center hover:scale-110 hover:border-red-600 duration-500">
                    Partidas
                  </li>
                </Link>
                <Link to={"/news"}>
                  <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[1px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center hover:scale-110 hover:border-red-600 duration-500">
                    Noticias
                  </li>
                </Link>
                <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[1px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center hover:scale-110 hover:border-red-600 duration-500">
                  Cursos
                </li>

                <li className="border-l-[2px] border-r-[2px] rounded-lg border-gray-400 px-6 py-[2px] 2xl:py-[2.7px] 2xl:px-6 flex justify-center items-center hover:scale-110 hover:border-red-600 duration-500">
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
