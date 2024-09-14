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
              /*   style={
              { WebkitTextStroke: "0.5px"}
            } */
              id="title-name"
              className="font-text2 tracking-wider text-center  text-[4rem] leading-[5.4rem] font-bold text-gray-200 z-50 flex  justify-center items-center md:items-center gap-3 px-3 py-3  bg-clip-text text-transparent bg-gradient-to-br from-stone-300  via-stone-400 to-bluefausti md:text-[4.5rem] xl:min-h-[200px] xl:gap-8 2xl:gap-12 xl:text-[6rem] 2xl:text-[7.5rem]"
            >
              {" "}
              <span
                /* style={
              { WebkitTextStroke: "0px"}
            } */ className="hidden md:flex justify-center items-center text-[3.9rem] h-[75px] px-2 bg-[#7c2c2c] text-white font-title2 font-semibold rounded-lg tracking-wide md:text-[4.5rem] xl:text-[8rem] xl:px-2  xl:h-[120px] xl:-mt-3 2xl:text-[9rem] 2xl:h-[150px]"
              >
                IM
              </span>
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
                  className={`flex flex-col items-end gap-12 mt-2 text-lg text-stone-300 font-text2  menu ${
                    isMenuOpen ? "menu-open" : ""
                  }`}
                >
                  <li
                    id="news-box"
                    className="border bg-zinc-800 rounded-full border-stone-400  cursor-pointer flex items-center  justify-evenly w-[135px]"
                  >
                    Torneos
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-stone-400 text-xl "></i>
                  </li>
                  <Link /* to="/games" */>
                    <li
                      id="news-box"
                      className="border bg-zinc-800 rounded-full border-stone-400  cursor-pointer flex items-center  justify-evenly w-[135px]"
                    >
                      Partidas
                      <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-stone-400 text-xl "></i>
                    </li>
                  </Link>
                  <Link to={"/news"}>
                    <li
                      id="news-box"
                      className="border bg-zinc-800 rounded-full border-stone-400  cursor-pointer flex items-center  justify-evenly w-[135px] "
                    >
                      Noticias
                      <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-stone-400 text-xl "></i>
                    </li>
                  </Link>
                  <Link to={"/courses"}>
                    <li
                      id="news-box"
                      className="border bg-zinc-800 rounded-full border-stone-400  cursor-pointer flex items-center  justify-evenly w-[135px]"
                    >
                      Cursos
                      <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-stone-400 text-xl "></i>
                    </li>
                  </Link>
                  <li
                    id="news-box"
                    className="border bg-zinc-800 rounded-full border-stone-400  cursor-pointer flex items-center  justify-evenly w-[135px]"
                  >
                    Contacto
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-stone-400 text-xl "></i>
                  </li>
                </ul>
              </section>
            ) : (
              <ul className="flex  gap-3 sm:gap-14 xl:gap-9 text-lg 2xl:text-xl 2xl:gap-10 text-stone-400">
                <li
                  id="news-box"
                  className="rounded-full border border-stone-500 w-[140px] 2xl:w-[160px] py-[1px]  cursor-pointer flex justify-evenly items-center gap-3 hover:scale-110 hover:border-lightbrown hover:text-white duration-500 "
                >
                  Torneos
                  <i className="bx bx-arrow-back rotate-[145deg] rounded-full -ml-[1px] text-stone-500 hover:text-lightbrown  text-xl 2xl:text-2xl   "></i>
                </li>
                <Link /* to="/games" */>
                  <li
                    id="news-box"
                    className="rounded-full border border-stone-500 w-[140px] 2xl:w-[160px] py-[1px]  cursor-pointer flex justify-evenly items-center gap-3 hover:scale-110 hover:border-lightbrown hover:text-white duration-500 "
                  >
                    Partidas
                    <i className="bx bx-arrow-back rotate-[145deg] rounded-full -ml-[1px] text-stone-500 hover:text-lightbrown  text-xl 2xl:text-2xl   "></i>
                  </li>
                </Link>
                <Link to={"/news"}>
                  <li
                    id="news-box"
                    className="rounded-full border border-stone-500 w-[140px] 2xl:w-[160px] py-[1px]  cursor-pointer flex justify-evenly items-center gap-3 hover:scale-110 hover:border-lightbrown hover:text-white duration-500 "
                  >
                    Noticias
                    <i className="bx bx-arrow-back rotate-[145deg] rounded-full -ml-[1px] text-stone-500 hover:text-lightbrown  text-xl 2xl:text-2xl   "></i>
                  </li>
                </Link>

                <Link to={"/courses"}>
                  <li
                    id="news-box"
                    className="rounded-full border border-stone-500 w-[140px] 2xl:w-[160px] py-[1px]  cursor-pointer flex justify-evenly items-center gap-3 hover:scale-110 hover:border-lightbrown hover:text-white duration-500 "
                  >
                    Cursos
                    <i className="bx bx-arrow-back rotate-[145deg] rounded-full -ml-[1px] text-stone-500 hover:text-lightbrown  text-xl 2xl:text-2xl   "></i>
                  </li>
                </Link>

                <li
                  id="news-box"
                  className="rounded-full border border-stone-500 w-[140px] 2xl:w-[160px] py-[1px]  cursor-pointer flex justify-evenly items-center gap-3 hover:scale-110 hover:border-lightbrown hover:text-white duration-500 "
                >
                  Contacto
                  <i className="bx bx-arrow-back rotate-[145deg] rounded-full -ml-[1px] text-stone-500 hover:text-lightbrown  text-xl 2xl:text-2xl  "></i>
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
