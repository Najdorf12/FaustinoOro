import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBtn from "../components/Buttons/NavBtn";

const Home = () => {
  const [windowWidth, setwindowWidth] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btnsNav = [
    { name: "Torneos", path: "/tournaments" },
    { name: "Partidas", path: "#games" },
    { name: "Noticias", path: "/news" },
    { name: "Cursos", path: "/courses" },
    { name: "Contacto", path: "#contact" },
  ];

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
              id="title-name"
              className="font-text2 tracking-wider text-center  text-[4rem] leading-[5.4rem] font-bold text-gray-200 z-50 flex  justify-center items-center md:items-center gap-3 px-3 py-3  bg-clip-text text-transparent bg-gradient-to-tr from-bluefausti  via-zinc-200 to-zinc-400  md:text-[4.5rem] xl:min-h-[200px] xl:gap-8 2xl:gap-12 xl:text-[6rem] 2xl:text-[7.5rem]"
            >
              {" "}
              <span className="hidden md:flex justify-center items-center text-[3.9rem] h-[75px] px-2 bg-[#7c2c2c] text-white font-title2 font-semibold rounded-lg tracking-wide md:text-[4.5rem] xl:text-[8rem] xl:px-2  xl:h-[120px] xl:-mt-3 2xl:text-[9rem] 2xl:h-[150px]">
                IM
              </span>
              FAUSTINO ORO
            </h1>
          </article>

          {/* BORDER BUTTONS */}
          <nav className="absolute inset-0 flex justify-end pt-2 pr-2 ">
            <section className="relative gap-3  w-[60%] flex flex-col rounded-2xl  lg:w-[20%]">
              <input
                id="checkbox2"
                type="checkbox"
                checked={isMenuOpen}
                onChange={handleCheckboxChange}
              />
              <label
                className="toggle toggle2  absolute top-3 right-0 self-end flex justify-end items-end z-50 "
                htmlFor="checkbox2"
              >
                <div id="bar4" className="bars"></div>
                <div id="bar5" className="bars"></div>
                <div id="bar6" className="bars"></div>
              </label>
              <div
                id="box-glass2"
                className={`relative flex flex-col items-start justify-center self-start pt-24 pb-20 -mt-16  gap-10 w-full text-xl text-white border-l-[2px] border-stone-500 rounded-l-2xl    font-text2  menu lg:items-center lg:justify-center lg:pt-28 lg:pb-32 ${
                  isMenuOpen ? "menu-open" : ""
                }`}
              >
                {btnsNav.map((btn, index) => (
                  <a
                    key={index}
                    href={btn?.path} // Enlace hacia la sección con el ID correspondiente
                    className={`rounded-3xl  ${
                      btn.name === "Contacto"
                        ? "bg-zinc-800 text-white"
                        : "bg-white text-zinc-800 "
                    }`}
                  >
                    <NavBtn btnname={btn?.name} />
                  </a>
                ))}
                <figure className="absolute bottom-1 left-1">
                  <i className="bx bxs-doughnut-chart text-5xl md:text-5xl z-50 text-stone-500  2xl:text-6xl"></i>
                </figure>
              </div>
            </section>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Home;
