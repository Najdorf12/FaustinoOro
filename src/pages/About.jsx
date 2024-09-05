import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const tl = gsap.timeline();

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
        width: "100%",
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
      .to("#btn-about", {
        opacity: 1,
        y: "-60px",
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#btn-about",
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
        <article className="relative pt-24 lg:pt-0 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] xl:mr-[7%] lg:mt-[4%] 2xl:mr-[12%] 2xl:mt-[6%]  2xl:max-w-[650px] text-balance">
          <h5
            id="about-text"
            className="text-xl font-title4 text-stone-700 2xl:text-3xl opacity-0 "
          >
            Sobre Mi
          </h5>
          <h3
            id="about-text2"
            className="text-stone-700  text-4xl 2xl:pr-2  2xl:text-4xl  opacity-0 relative"
          >
            {"Soy Faustino Oro. Nací en Buenos Aires, Argentina, el 14 de octubre de 2013".toUpperCase()}
          </h3>
          <div
            id="line-about"
            className="w-[0%] h-[2px]  bg-lightbrown rounded-md my-2"
          ></div>
          <p
            id="p-about"
            className="relative  mt-[60px] opacity-0 text-lg font-text2 xl:mt-[70px] 2xl:mt-[80px] 2xl:text-[1.5rem]  text-stone-900 lg:text-stone-500"
          >
             El 30 de mayo de 2020 aprendí a mover las piezas por primera vez, y desde entonces, el ajedrez ha sido mucho más que un simple juego para mí: es un desafío constante que me motiva a seguir mejorando. Autodidacta y persistente, he crecido con cada partida y cada lección, con la firme convicción de llegar a lo más alto.
          </p>

          <div className="flex  items-center gap-6 font-title2 text-lg font-semibold text-stone-500 2xl:gap-12 2xl:text-xl">
            <button className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-6 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[130px]">
              HISTORIA
              <i class='bx bx-arrow-back text-white rotate-[145deg] text-2xl 2xl:text-3xl'></i>
            </button>
            <button className="btn-about border-[2px] rounded-3xl border-white px-4 py-[2.5px] 2xl:py-[2.5px] 2xl:px-7 flex justify-center items-center gap-2 hover:scale-110 duration-500 min-w-[130px]">
              LOGROS
              <i class='bx bx-arrow-back rotate-[145deg] text-2xl 2xl:text-3xl text-white'></i>
            </button>
          </div>
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
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150] bg-[#3f4864] opacity-90 md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-90 md:opacity-1"
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
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-90 md:opacity-1"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-90 md:opacity-1"
            ></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-90 md:opacity-1"
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
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-[#3f4864] opacity-90 md:opacity-1"
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
