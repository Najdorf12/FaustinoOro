import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeSection, setActiveSection] = useState("sobreMi");
  const tl = gsap.timeline();
  const windWidth = window.innerWidth;

  const palmares = [
    "Campeón Argentino Sub-8 (Diciembre 2021)",
    "Campeón Panamericano Sub-10 (Junio 2022)",
    "Número uno del Mundo en cada una de sus categorías Sub-8, Sub-10 y actualmente Sub-12",
    "Récord del Maestro Fide más joven de la historia por superar los 2300 puntos (Abril 2023)",
    "Récord al obtener la Primera Norma de Maestro Internacional (Septiembre 2023)",
    "Récord del Maestro Internacional más joven de la historia (Junio 2024)",
  ];

  useLayoutEffect(() => {
    const screen = window.screen.width;
    const ctx = gsap.context(() => {
      tl.to("#about-text", {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: "#second_section",
          start: "40% bottom",
          end: "top top",
          scrub: true,
        },
      })
        .to("#about-text2", {
          opacity: 1,
          delay: 0.6,
          scrollTrigger: {
            trigger: "#second_section",
            start: "55% bottom",
            end: "top top",
            scrub: true,
          },
        })
        .to("#line-about", {
          opacity: 1,
          width: screen > 700 ? "85%" : "85%",
          duration: 2,
          scrollTrigger: {
            trigger: "#second_section",
            start: "50% bottom",
            end: "top top",
            scrub: true,
          },
        })
        .to("#p-about", {
          delay: 2,
          opacity: 1,
          y: "-60px",
          duration: 2,
          scrollTrigger: {
            trigger: "#p-about",
            start: "120% bottom",
            end: "-70% 40%",
            scrub: true,
          },
        })
        .to("#btn-about_box", {
          opacity: 1,
          x: "-60px",
          duration: 2,
          stagger: 0.5,
          scrollTrigger: {
            trigger: "#btn-about_box",
            start: "top bottom",
            end: "top 70%",
            scrub: true,
          },
        })
        .to("#box-about", {
          y: "-300px",
          rotate: "120deg",
          stagger: 0.06,
          scrollTrigger: {
            trigger: "#box-about",
            start: screen > 1200 ? "-120% bottom" : "-190% bottom",
            end: screen > 1200 ? "40% 50%" : "50% 60%",
            scrub: true,
          },
        });
    });

    return () => ctx.revert(); // Limpiar animaciones al desmontar el componente
  }, []);

  const handleSectionChange = (section) => {
    gsap.to("#content-section", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      onComplete: () => {
        setActiveSection(section);
        // Animación para mostrar el nuevo contenido
        gsap.to("#content-section", {
          opacity: 1,
          y: 0,
          duration: 0.7,
        });

        // Si volvemos a "sobreMi", asegurar que la opacidad sea 1
        if (section === "sobreMi") {
          gsap.to("#about-text2, #line-about, #p-about, #btn-about_box", {
            opacity: 1,
            duration: 0.7,
          });
        }
      },
    });
  };

  const renderContent = () => {
    if (activeSection === "sobreMi") {
      return (
        <>
          <h3
            id="about-text2"
            className="text-bluefausti w-[90%] font-medium   text-[1.65rem] leading-[1.9rem] xl:w-full xl:text-4xl    2xl:text-5xl 2xl:w-full 2xl:mt-2  2xl:pr-0  opacity-0 relative  "
          >
            {"Soy Faustino Oro. Nací en Buenos Aires, Argentina, el 14 de octubre de 2013".toUpperCase()}
          </h3>
          <div
            id="line-about"
            className="w-[0%] h-[2px]  bg-stone-500 rounded-md mt-4 xl:mt-5 2xl:mt-6"
          ></div>
          <p
            id="p-about"
            className="relative text-stone-400 lg:text-stone-500 w-[86%] mt-[85px] opacity-0 text-base  font-text2 xl:text-lg xl:w-[90%]  2xl:mt-[95px] 2xl:text-[1.4rem] 2xl:w-full   "
          >
            En plena pandemia, el 30 de mayo de 2020 aprendí a mover las piezas
            y, desde entonces, el ajedrez ha sido mucho más que un simple juego
            para mí: es un desafío constante que me motiva a seguir mejorando.
            Autodidacta y persistente, he crecido con cada partida y cada
            lección, con la firme convicción de llegar a lo más alto.
          </p>
          <div
            id="btn-about_box"
            className="flex -inset-1 -mt-[20px] ml-[60px]  items-center gap-6 font-title2 text-lg font-semibold  xl:text-base xl:gap-8 2xl:gap-14 2xl:-mt-[10px]  2xl:text-xl opacity-0 "
          >
            <button
              /* id="news-box" */
              onClick={() => handleSectionChange("Historia")}
              className=" border-[1px] rounded-3xl bg-bluefausti  border-stone-400  px-4 py-[px] flex justify-between text-white items-center  lg:hover:border duration-500 min-w-[170px] 2xl:px-5 2xl:w-[195px]"
            >
              HISTORIA
              <i class="bx bx-arrow-back text-stone-400 rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
            <button
              id={windWidth < 700 ? "news-box" : ""}
              onClick={() => handleSectionChange("Logros")}
              className=" border-[1px] rounded-3xl text-stone-400  border-stone-400  px-4 py-[px]  flex justify-between items-center  lg:hover:border duration-500 min-w-[170px] 2xl:px-5  2xl:w-[195px] "
            >
              LOGROS
              <i class="bx bx-arrow-back text-stone-400 rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
          </div>
        </>
      );
    } else if (activeSection === "Historia") {
      return (
        <>
          <div className="">
            <h3 className="text-bluefausti font-medium text-5xl  2xl:pr-2 2xl:text-6xl  ">
              HISTORIA
            </h3>

            <p
              id="about-history"
              className="relative  w-[96%] mt-6 max-h-[350px] pr-3 overflow-y-scroll text-base font-text2 text-stone-400 pt-1 pb-2 rounded-lg lg:text-stone-500 2xl:mt-7 2xl:text-[1.3rem]"
            >
              Mi primer torneo de ajedrez clásico fue el "8vo IRT Alejandro
              Judewicz" en Mar del Plata, Buenos Aires, Argentina, en septiembre
              de 2021. En este torneo ingresé por primera vez al ranking ELO
              FIDE con 1922 puntos, lo que me consagró como el N° 1 mundial en
              mi categoría, posición que he mantenido desde entonces. En 2021,
              me consagré Campeón Argentino Sub-8, y en 2022, Campeón
              Panamericano Sub-10 en Montevideo, Uruguay, lo que me otorgó mi
              primer título de Candidato a Maestro (CM). En abril de 2023,
              jugando un ITT de Jóvenes Talentos en el Club de Villa Martelli,
              Buenos Aires, Argentina, alcancé un ELO FIDE de 2300,
              convirtiéndome en el Maestro FIDE (FM) más joven de la historia
              por puntos. Desde entonces, me llaman el "Pibe de Oro" o el "Messi
              del Ajedrez". En septiembre de 2023, jugando un ITT en Comodoro
              Rivadavia, Chubut, Argentina, obtuve mi primera norma de Maestro
              Internacional (IM), marcando otro récord de precocidad.
              Finalmente, en 2024, obtuve las dos normas restantes para el
              título de Maestro Internacional en el "Campeonato Continental
              Absoluto de las Américas" en Medellín (mayo de 2024) y en el
              "Torneo Cerrado de IM" en el Club de Barcelona (junio de 2024).
              Esto, sumado a haber superado los 2400 de ELO FIDE, hizo que me
              convirtiera en el Maestro Internacional más joven de la historia
              hasta el momento. Mi meta es convertirme en Gran Maestro y llegar
              a ser Campeón Mundial, formando parte de la élite del ajedrez.
            </p>
          </div>
          <div className="flex -inset-1 mt-[36px]   items-center gap-6 font-title2 text-lg font-semibold  xl:text-base xl:gap-8 2xl:gap-14  2xl:text-xl ">
            <button
              onClick={() => handleSectionChange("sobreMi2")}
              className=" border-[1px] rounded-3xl text-white bg-gray-600 border-stone-400  px-4  flex justify-between items-center  lg:lg:hover:border duration-500 min-w-[170px] 2xl:px-5 2xl:w-[195px]"
            >
              SOBRE MI
              <i class="bx bx-arrow-back text-stone-400 rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
            <button
              id="news-box"
              onClick={() => handleSectionChange("Logros")}
              className=" border-[1px] rounded-3xl border-stone-400  px-4   flex justify-between items-center text-stone-400  lg:hover:border duration-500 min-w-[170px] 2xl:px-5  2xl:w-[195px] "
            >
              LOGROS
              <i class="bx bx-arrow-back  rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
          </div>
        </>
      );
    } else if (activeSection === "Logros") {
      return (
        <>
          <div className="w-full ">
            <h3 className="text-bluefausti font-medium text-5xl 2xl:pr-2 2xl:text-6xl ">
              LOGROS
            </h3>
            <ul className="relative w-full mt-6  flex flex-col-reverse gap-2 font-text2 xl:gap-4  xl:mt-[24px]  2xl:text-[1.3rem] text-stone-400 text-start   lg:text-stone-500">
              {palmares.map((item, i) => (
                <li
                  id="box-glass"
                  key={i}
                  className="border border-stone-400   flex items-center gap-2 lg:gap-3 py-1 px-[4px] sm:pr-[3px] lg:pl-2  rounded-2xl  max-w-[95%] xl:max-w-[80%]"
                >
                  <i class="bx bx-chevron-right self-start text-xl text-white xl:text-2xl"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex -inset-1 mt-[36px]   items-center gap-6 font-title2 text-lg font-semibold text-white xl:text-base xl:gap-8 2xl:gap-14  2xl:text-xl ">
            <button
              onClick={() => handleSectionChange("Historia")}
              className=" border-[1px] rounded-3xl bg-gray-600 border-stone-500  px-4  flex justify-between items-center  lg:hover:border duration-500 min-w-[170px] 2xl:px-5 2xl:w-[195px]"
            >
              HISTORIA
              <i class="bx bx-arrow-back text-stone-400 rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
            <button
              id="news-box"
              onClick={() => handleSectionChange("sobreMi2")}
              className=" border-[1px] rounded-3xl border-stone-400  px-4   flex justify-between items-center text-stone-400 lg:hover:border duration-500 min-w-[170px] 2xl:px-5  2xl:w-[195px] "
            >
              SOBRE MI
              <i class="bx bx-arrow-back  rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
          </div>
        </>
      );
    } else if (activeSection === "sobreMi2") {
      return (
        <>
          <h3
            id="sobreMi2-title"
            className="text-bluefausti w-full font-medium mt-1  text-[1.65rem] leading-[1.9rem] xl:w-full xl:text-4xl    2xl:text-5xl 2xl:w-full 2xl:mt-2  2xl:pr-0  "
          >
            {"Soy Faustino Oro. Nací en Buenos Aires, Argentina, el 14 de octubre de 2013".toUpperCase()}
          </h3>
          <div
            className="w-[90%] h-[2px]  bg-stone-500 rounded-md mt-4 xl:mt-5 2xl:mt-6"
          ></div>
          <p
            id="sobreMi2-text"
            className="relative text-stone-400 lg:text-stone-500 w-full  mt-[24px]  text-base  font-text2   xl:text-lg   2xl:text-[1.4rem] 2xl:w-full "
          >
            En plena pandemia, el 30 de mayo de 2020 aprendí a mover las piezas
            y, desde entonces, el ajedrez ha sido mucho más que un simple juego
            para mí: es un desafío constante que me motiva a seguir mejorando.
            Autodidacta y persistente, he crecido con cada partida y cada
            lección, con la firme convicción de llegar a lo más alto.
          </p>
          <div className="flex -inset-1 mt-[36px]   items-center gap-6 font-title2 text-lg font-semibold xl:text-base xl:gap-8 2xl:gap-14 2xl:mt-[40px]  2xl:text-xl ">
            <button
              onClick={() => handleSectionChange("Historia")}
              className=" border-[1px] rounded-3xl bg-gray-600 border-stone-500  px-4  flex justify-between items-center text-white lg:hover:border duration-500 min-w-[170px] 2xl:px-5 2xl:w-[195px]"
            >
              HISTORIA
              <i class="bx bx-arrow-back text-stone-400 rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
            <button
              id="news-box"
              onClick={() => handleSectionChange("Logros")}
              className=" border-[1px] rounded-3xl border-stone-400  px-4   flex justify-between items-center text-stone-400 lg:hover:border duration-500 min-w-[170px] 2xl:px-5  2xl:w-[195px] "
            >
              LOGROS
              <i class="bx bx-arrow-back  rotate-[145deg] text-2xl rounded-full  2xl:text-3xl"></i>
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-whiteCustom flex lg:justify-end  font-title overflow-hidden relative"
      >
        <article className="relative  pt-24 lg:pt-0 px-3 pl-[4%] sm:pl-[6%] lg:pl-0 flex flex-col gap-3 z-50 sm:max-w-[550px] lg:mr-[3%] lg:mt-[8%] xl:max-w-[650px]  2xl:mr-[6%]  2xl:max-w-[750px] text-balance ">
          <h5
            id="about-text"
            className="text-xl font-title4 text-stone-400 xl:text-2xl 2xl:text-3xl font-medium opacity-0 lg:text-stone-500"
          >
            Sobre Mi
          </h5>

          <div id="content-section">{renderContent()}</div>
        </article>
        <section
          id="box-container-about"
          className="w-full h-auto z-20 flex absolute left-0 bottom-[-240px] "
        >
          <div className="self-end z-20 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[2px] border-white"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150] bg-bluefausti md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[2px]"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-bluefausti md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[2px]"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[2px] border-white"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-bluefausti md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[2px]"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-bluefausti md:opacity-1"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[2px] border-white"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-bluefausti md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[2px] border-white"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[2px] border-white"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-bluefausti md:opacity-1"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[2px] border-white"
            ></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
