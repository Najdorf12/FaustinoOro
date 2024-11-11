import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBtn from "../components/Buttons/NavBtn"

const Home = () => {
  const [windowWidth, setwindowWidth] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btnsNav = ["Torneos", "Partidas", "Noticias", "Cursos", "Contacto"];

  const handleCheckboxChange = (e) => {
    setIsMenuOpen(e.target.checked);
  };
  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen bg-[#e8e8e8] flex justify-center items-center z-50 ">
        <div
          className="w-[100%] h-screen relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex  justify-center"
          id="home"
        >
          <article className="w-[95%] flex justify-center items-end pb-[20%] xl:justify-center xl:pb-[2%] xl:">
            <h1
              /*   style={
              { WebkitTextStroke: "0.5px"}
            } */
              id="title-name"
              className="font-text2 tracking-wider text-center  text-[4rem] leading-[5.4rem] font-bold text-gray-200 z-50 flex  justify-center items-center md:items-center gap-3 px-3 py-3  bg-clip-text text-transparent bg-gradient-to-tr from-bluefausti  via-zinc-200 to-zinc-400  md:text-[4.5rem] xl:min-h-[200px] xl:gap-8 2xl:gap-12 xl:text-[6rem] 2xl:text-[7.5rem]"
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
          <span className="absolute inset-0 flex justify-end pt-2">
            {windowWidth < 900 ? (
              <section className="relative gap-3  w-[60%] flex flex-col rounded-2xl  ">
                <input
                  id="checkbox2"
                  type="checkbox"
                  checked={isMenuOpen}
                  onChange={handleCheckboxChange}
                />
                <label className="toggle toggle2  absolute top-3 right-0 self-end flex justify-end items-end z-50" htmlFor="checkbox2">
                  <div id="bar4" className="bars"></div>
                  <div id="bar5" className="bars"></div>
                  <div id="bar6" className="bars"></div>
                </label>
                <ul
                id="box-glass2"
                  className={`flex flex-col items-start self-start pt-20 -mt-16 pl-4 gap-10 w-full text-xl text-white border-l rounded-l-2xl   h-full font-text2  menu ${
                    isMenuOpen ? "menu-open" : ""
                  }`}
                >
                {btnsNav?.map((btn, i)=>(
                  <li key={i}  >
                    <NavBtn btnname={btn} />
                  </li>
                ))}
                </ul>
              </section>
            ) : (
              <ul className="flex  gap-3 sm:gap-14 xl:gap-10 text-lg 2xl:text-xl 2xl:gap-12 text-white">
                <a href="six_section">
                  <li className="border-[2px] border-zinc-500 rounded-3xl  cursor-pointer flex items-center justify-between pl-4 pr-2 w-[145px]  gap-2  bg-gradient-to-tr from-bluefausti via-zinc-800 to-zinc-900 shadow-md shadow-zinc-900 py-[1px] xl:w-[160px]">
                    Torneos
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-zinc-400 text-2xl "></i>
                  </li>
                </a>
                <Link /* to="/games" */>
                  <li className="border-[2px] border-zinc-500 rounded-3xl  cursor-pointer flex items-center justify-between pl-4 pr-2 w-[145px]  gap-2  bg-gradient-to-tr from-bluefausti via-zinc-800 to-zinc-900 shadow-md shadow-zinc-900 py-[1px] xl:w-[160px]">
                    Partidas
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-zinc-400 text-2xl "></i>
                  </li>
                </Link>
                <Link to={"/news"}>
                  <li className="border-[2px] border-zinc-500 rounded-3xl  cursor-pointer flex items-center justify-between pl-4 pr-2 w-[145px]  gap-2  bg-gradient-to-tr from-bluefausti via-zinc-800 to-zinc-900 shadow-md shadow-zinc-900 py-[1px] xl:w-[160px]">
                    Noticias
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-zinc-400 text-2xl "></i>
                  </li>
                </Link>

                <Link to={"/courses"}>
                  <li className="border-[2px] border-zinc-500 rounded-3xl  cursor-pointer flex items-center justify-between pl-4 pr-2 w-[145px]  gap-2  bg-gradient-to-tr from-bluefausti via-zinc-800 to-zinc-900 shadow-md shadow-zinc-900 py-[1px] xl:w-[160px]">
                    Cursos
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-zinc-400 text-2xl "></i>
                  </li>
                </Link>

                <a href="contact_section">
                  <li className="border-[2px] border-zinc-500 rounded-3xl  cursor-pointer flex items-center justify-between pl-4 pr-2 w-[145px]  gap-2  bg-gradient-to-tr from-bluefausti via-zinc-800 to-zinc-900 shadow-md shadow-zinc-900 py-[1px] xl:w-[160px]">
                    Contacto
                    <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-zinc-400 text-2xl "></i>
                  </li>
                </a>
              </ul>
            )}
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
