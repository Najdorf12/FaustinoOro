import { useState, useEffect } from "react";
import NavBtn from "../components/Buttons/NavBtn";
import iconNav from "/iconNav.png";

const btnsNav = [
  { name: "Torneos", path: "/tournaments" },
  { name: "Partidas", path: "#games" },
  { name: "Noticias", path: "/news" },
  { name: "Cursos", path: "/courses" },
  { name: "Contacto", path: "#contact_section" },
];
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 1024);

  const handleCheckboxChange = (e) => {
    setIsMenuOpen(e.target.checked);
  };

  return (
    <>
      <section className="relative w-full h-screen  flex justify-center items-center  z-50">
        <nav className="absolute inset-0 flex justify-end pt-2 pr-2 z-[100] lg:pt-0 ">
          <section className="relative gap-3  w-[70%] flex flex-col rounded-2xl  lg:h-auto lg:w-full  lg:flex-row  ">
            <input
              id="checkbox2"
              type="checkbox"
              checked={isMenuOpen}
              onChange={handleCheckboxChange}
            />
            <label
              className="toggle toggle2  absolute top-3 right-0 self-end flex justify-end items-end 
              z-[150] lg:self-start lg:hidden "
              htmlFor="checkbox2"
            >
              <div id="bar4" className="bars"></div>
              <div id="bar5" className="bars"></div>
              <div id="bar6" className="bars"></div>
            </label>
            <div
              id="box-glass2"
              className={`relative flex flex-col items-center self-start pt-28 pb-12 -mt-16  gap-10 w-full text-xl text-whiteCustom border-l-[2px] border-zinc-700 rounded-l-2xl    font-text2  menu lg:items-center lg:justify-end lg:pr-6  lg:mt-0 lg:flex-row lg:border-b-[2px] lg:py-3 z-50 lg:gap-6 lg:border-l-transparent lg:rounded-b-3xl 2xl:gap-8 ${
                isMenuOpen ? "menu-open " : ""
              }`}
            >
              {btnsNav.map((btn, index) => (
                <a
                  key={index}
                  href={btn?.path} // Enlace hacia la sección con el ID correspondiente
                  className={`rounded-3xl  ${
                    btn.name === "Contacto"
                      ? "bg-whiteCustom text-zinc-800"
                      : "bg-transparent text-zinc-300 lg:bg- "
                  }`}
                >
                  <NavBtn btnname={btn?.name} />
                </a>
              ))}
              <figure className="absolute top-4 left-3 xl:top-1 xl:left-4">
                <img
                  className="object-cover object-center w-[3rem] "
                  src={iconNav}
                  alt=""
                />
              </figure>
            </div>
          </section>
        </nav>

        <div
          className="w-full h-screen  relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex  justify-center"
          id="home"
        >
          <article className="w-full relative  flex justify-center items-end pb-[6vh] px-3 lg:justify-end  lg:items-end lg:pb-[5%] lg:pr-[3%]">
            <h1 className="title-name text-whiteCustom text-center text-[4rem] z-50 leading-[5.3rem] py-3 rounded-xl  md:text-[5.5rem] xl:text-[6.5rem]  2xl:text-[8rem]">
              FAUSTINO ORO
            </h1>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
