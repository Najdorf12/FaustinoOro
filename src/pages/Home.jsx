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
      <section className="relative w-full h-screen  flex justify-center items-center  z-50">
       
        <nav className="absolute inset-0 flex justify-end pt-2 pr-2 z-[100] lg:pt-0 ">
          <section className="relative gap-3  w-[60%] flex flex-col rounded-2xl  lg:h-auto lg:w-full  lg:flex-row  ">
            <input
              id="checkbox2"
              type="checkbox"
              checked={isMenuOpen}
              onChange={handleCheckboxChange}
            />
            <label
              className="toggle toggle2  absolute top-3 right-0 self-end flex justify-end items-end z-50 lg:self-start lg:hidden "
              htmlFor="checkbox2"
            >
              <div id="bar4" className="bars"></div>
              <div id="bar5" className="bars"></div>
              <div id="bar6" className="bars"></div>
            </label>
            <div
              id="box-glass2"
              className={`relative flex flex-col items-center self-start pt-24 pb-20 -mt-16  gap-10 w-full text-xl text-white border-l-[2px] border-stone-500 rounded-l-2xl    font-text2  menu lg:items-center lg:justify-center lg:py-0  lg:mt-0 lg:flex-row lg:border-b-[2px] lg:pb-3 lg:pt-2 lg:border-l-transparent lg:rounded-b-3xl ${
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
                      : "bg-zinc-800 text-zinc-300 "
                  }`}
                >
                  <NavBtn btnname={btn?.name} />
                </a>
              ))}
              <figure className="absolute bottom-0 right-1 xl:top-1 xl:right-2">
                <i className="bx bxs-doughnut-chart text-5xl md:text-5xl z-50 text-stone-500  2xl:text-6xl"></i>
              </figure>
            </div>
          </section>
        </nav>
      
        <div
          className="w-full h-screen  relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex  justify-center"
          id="home"
        >
          <article className="w-full  flex justify-center items-end pb-[15vh] px-3 lg:justify-end  lg:items-end lg:pb-[3%] lg:pr-[3%]">
            <h1 id="box-glass2" className="title-name text-white text-center text-6xl  leading-[5rem] py-3 rounded-xl  lg:text-8xl xl:text-8xl  2xl:text-[8rem]">
              FAUSTINO ORO
            </h1>
           {/*  <p id="box-glass2" className="absolute left-0 top-0 w-[100%] text-balance text-center font-title4 font-medium text-white border-b border-stone-500 rounded-xl pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, sed.</p> */}
          </article>

          {/* BORDER BUTTONS */}
        </div>
     
      </section>
    </>
  );
};

export default Home;
