import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeSection, setActiveSection] = useState("sobreMi");
  const tl = gsap.timeline();

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
    new ScrollTrigger({});
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
        width:  screen > 700 ? "90%" : "85%",
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
  }, []);
  const handleSectionChange = (section) => {
    // Animación para ocultar el contenido actual

    gsap.to("#content-section", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      onComplete: () => {
        setActiveSection(section); // Cambia el contenido después de la animación de salida
        // Animación para mostrar el nuevo contenido
        gsap.to("#content-section", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 1,
        });
      },
    });
  };

  const renderContent = () => {
    if (activeSection === "sobreMi") {
      return (
        <>
          <h3
            id="about-text2"
            className="text-white font-medium   text-[1.65rem] leading-[1.9rem] xl:text-3xl 2xl:pr-2  2xl:text-4xl  opacity-0 relative w-[90%] "
          >
            {"Soy Faustino Oro. Nací en Buenos Aires, Argentina, el 14 de octubre de 2013".toUpperCase()}
          </h3>
          <div
            id="line-about"
            className="w-[0%] h-[2px]  bg-bluefausti rounded-md mt-4"
          ></div>
          <p
            id="p-about"
            className="relative w-[86%] mt-[85px] opacity-0 text-base  font-text2  2xl:mt-[80px] 2xl:text-[1.3rem]  text-stone-900 lg:text-stone-500"
          >
            En plena pandemia, el 30 de mayo de 2020 aprendí a mover las piezas
            y, desde entonces, el ajedrez ha sido mucho más que un simple juego
            para mí: es un desafío constante que me motiva a seguir mejorando.
            Autodidacta y persistente, he crecido con cada partida y cada
            lección, con la firme convicción de llegar a lo más alto.
          </p>
          <div
            id="btn-about_box"
            className="flex -inset-1 -mt-[20px] ml-[60px]  items-center gap-6 font-title2 text-lg font-semibold text-stone-500 xl:text-base xl:gap-8 2xl:gap-12 2xl:text-xl opacity-0 "
          >
            <button
              onClick={() => handleSectionChange("Historia")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-3 hover:scale-110 duration-500 min-w-[170px] xl:gap-3 "
            >
              HISTORIA
              <i class="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
            <button
              onClick={() => handleSectionChange("Logros")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-3 hover:scale-110 duration-500 min-w-[170px] xl:gap-3 "
            >
              LOGROS
              <i class="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
          </div>
        </>
      );
    } else if (activeSection === "Historia") {
      return (
        <>
          <div className="">
            <h3 className="text-white font-medium text-5xl  2xl:pr-2 2xl:text-6xl  ">
              HISTORIA
            </h3>
           
            <p className="relative w-[86%] mt-6 max-h-[350px] overflow-y-scroll text-base font-text2 2xl:mt-7 2xl:text-[1.3rem] text-stone-900 lg:text-stone-500">
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
          <div
            id=""
            className="flex -inset-1 mt-[40px]  items-center gap-6 font-title2 text-lg font-semibold text-stone-500 xl:text-base xl:gap-8 2xl:gap-12 2xl:text-xl opacity-0 "
          >
            <button
              onClick={() => handleSectionChange("sobreMi")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[170px] xl:gap-3"
            >
              SOBRE MI
              <i class="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
            <button
              onClick={() => handleSectionChange("Logros")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[170px] xl:gap-3 "
            >
              LOGROS
              <i class="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
          </div>
        </>
      );
    } else if (activeSection === "Logros") {
      return (
        <>
          <div className="">
            <h3 className="text-white font-medium text-5xl 2xl:pr-2 2xl:text-6xl ">
              LOGROS
            </h3>
            <ul className="relative w-full mt-6  flex flex-col gap-2 font-text2 xl:mt-[24px]  2xl:text-[1.3rem] text-stone-900 lg:text-stone-500">
              {palmares.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                 <i class='bx bx-chevron-right self-start text-xl'></i> {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            id=""
            className="flex -inset-1 mt-[30px]  items-center gap-6 font-title2 text-lg font-semibold text-stone-500 xl:text-base xl:gap-8 2xl:gap-12 2xl:text-xl opacity-0 "
          >
            <button
              onClick={() => handleSectionChange("Historia")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[170px] xl:gap-3 "
            >
              HISTORIA
              <i class="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
            <button
              onClick={() => handleSectionChange("sobreMi")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[170px] xl:gap-3 "
            >
              SOBRE MI
              <i class="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
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
        /*  style={{backgroundImage: "linear-gradient(to left, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)" }}  */
        style={{
          backgroundImage:
            "linear-gradient(to left top, #EAEAEA, #DBDBDB, #F2F2F2, #3f4864)",
        }}
        className="w-full h-screen bg-gray-300 flex lg:justify-end font-title overflow-hidden relative"
      >
        <article className="relative  pt-24 lg:pt-0 px-3 sm:pl-[6%] lg:pl-0 flex flex-col gap-3 z-50 sm:max-w-[550px] xl:mr-[7%] lg:mt-[4%] 2xl:mt-[6%]  2xl:mr-[12%]   2xl:max-w-[650px] text-balance ">
          <h5
            id="about-text"
            className="text-xl font-title4 text-stone-600 2xl:text-3xl font-medium opacity-0 "
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
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150] bg-[#3f4864] opacity-80 md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-80 md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-80 md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-80 md:opacity-1"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-80 md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-80 md:opacity-1"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;

/* 
  const [activeSection, setActiveSection] = useState("sobreMi"); 
  

  const handleSectionChange = (section) => {
    // Animación para ocultar el contenido actual
    gsap.to("#content-section", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      onComplete: () => {
        setActiveSection(section); // Cambia el contenido después de la animación de salida
        // Animación para mostrar el nuevo contenido
        gsap.to("#content-section", { opacity: 1, y: 0, duration: 0.5 });
      },
    });
  };

  // Aquí defines el contenido dinámico basado en el estado
  const renderContent = () => {
    if (activeSection === "sobreMi") {
      return (
        <>
          <h3 className="text-white font-medium text-2xl xl:text-3xl 2xl:pr-2 2xl:text-4xl">
            {"Soy Faustino Oro. Nací en Buenos Aires, Argentina, el 14 de octubre de 2013".toUpperCase()}
          </h3>
          <p className="relative w-[90%] mt-[60px] text-base font-text2 xl:mt-[70px] 2xl:mt-[80px] 2xl:text-[1.3rem] text-stone-900 lg:text-stone-500">
            En plena pandemia, el 30 de mayo de 2020 aprendí a mover las piezas y, desde entonces, el ajedrez ha sido mucho más que un simple juego para mí...
          </p>
        </>
      );
    } else if (activeSection === "Historia") {
      return (
        <>
          <h3 className="text-white font-medium text-2xl xl:text-3xl 2xl:pr-2 2xl:text-4xl">
            HISTORIA DE FAUSTINO ORO
          </h3>
          <p className="relative w-[90%] mt-[60px] text-base font-text2 xl:mt-[70px] 2xl:mt-[80px] 2xl:text-[1.3rem] text-stone-900 lg:text-stone-500">
            Faustino comenzó a jugar ajedrez durante la pandemia y rápidamente se convirtió en un prodigio del deporte...
          </p>
        </>
      );
    } else if (activeSection === "Logros") {
      return (
        <>
          <h3 className="text-white font-medium text-2xl xl:text-3xl 2xl:pr-2 2xl:text-4xl">
            LOGROS DE FAUSTINO
          </h3>
          <p className="relative w-[90%] mt-[60px] text-base font-text2 xl:mt-[70px] 2xl:mt-[80px] 2xl:text-[1.3rem] text-stone-900 lg:text-stone-500">
            Faustino ha obtenido numerosos títulos en competiciones nacionales e internacionales, destacándose por su talento único...
          </p>
        </>
      );
    }
  };

  return (
    <>
      <section
        id="second_section"
        style={{
          backgroundImage:
            "linear-gradient(to left top, #EAEAEA, #DBDBDB, #F2F2F2, #3f4864)",
        }}
        className="w-full h-screen bg-gray-300 flex lg:justify-end font-title overflow-hidden relative"
      >
        <article className="relative pt-24 lg:pt-0 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] xl:mr-[7%] lg:mt-[4%] xl:mt-[7%] 2xl:mr-[12%] 2xl:max-w-[650px] text-balance">
          <h5
            id="about-text"
            className="text-xl font-title4 text-stone-600 2xl:text-3xl font-medium opacity-0"
          >
            Sobre Mi
          </h5>

          // Sección dinámica 
          <div id="content-section">
            {renderContent()}
          </div>

          <div
            id="btn-about_box"
            className="flex -mt-[30px] ml-[60px] items-center gap-6 font-title2 text-lg font-semibold text-stone-500 xl:text-base xl:gap-8 2xl:gap-12 2xl:text-xl opacity-0"
          >
            <button
              onClick={() => handleSectionChange("Historia")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[130px] xl:gap-3"
            >
              HISTORIA
              <i className="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
            <button
              onClick={() => handleSectionChange("Logros")}
              className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[130px] xl:gap-3"
            >
              LOGROS
              <i className="bx bx-arrow-back text-stone-400 w-8 h-8 flex justify-center items-center rotate-[145deg] text-2xl rounded-full bg-white 2xl:text-3xl"></i>
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
 */
