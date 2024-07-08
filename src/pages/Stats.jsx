import SplitType from "split-type";
import bullet from "../assets/bullet.png";
import flash from "../assets/flash.png";
import classicalchess from "../assets/classicalchess.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    new ScrollTrigger({});
    const text = new SplitType("#split", { type: "chars" });
    const chars = text?.chars;
    tl.from(chars, {
      yPercent: 60,
      stagger: 0.2,
      ease: "back.out",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#split",
        start: "50% 100%",
        end: "-30% 20%",
        scrub: 1,
      },
    })
      .to("#text-reveal2", {
        opacity: 1,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: "#text-reveal2",
          start: "160% bottom",
          end: "10% 50%",
          scrub: 1,
        },
      })
      .to("#line-stats", {
        width: "50%",
        duration: 2,
        scrollTrigger: {
          trigger: "#five_section",
          start: "50% bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to("#line-stats2", {
        opacity: 1,
        delay: 0.7,
        width: "45%",
        duration: 2,
        scrollTrigger: {
          trigger: "#five_section",
          start: "50% bottom",
          end: "60% 20%",
          scrub: true,
        },
      })
      .to("#title-stats", {
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#six-section",
          start: "50% bottom",
          end: "60% 20%",
          scrub: true,
        },
      })
      
  }, []);
  return (
    <>
      <section
        id="five_section"
        className="relative w-full h-screen bg-zinc-900 flex justify-center items-center px-2 sm:px-4 text-white "
      >
        <article className="relative z-50 flex flex-col justify-center items-center gap-8 lg:gap-5 text-center sm:max-w-[600px] lg:max-w-[800px] xl:-mt-[10%] xl:gap-8 2xl:gap-10">
          <h6
            id="split"
            className="font-text2 text-5xl  text-white font-bold md:text-6xl lg:text-[10dvh]"
          >
            LOREM IMPSUM
          </h6>
          <p
            id="text-reveal2"
            className="font-text2 text-gray-200 text-base md:text-lg xl:px-6 opacity-0  "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            impedit sit aliquam laborum incidunt consectetur dicta temporibus
            libero, illum provident nobis, veniam sed! Voluptatem nulla rerum
            earum dolores alias quibusdam. Voluptatem nulla rerum earum dolores
            alias quibusdam.
          </p>
        </article>
        <div
          id="line-stats"
          className="w-[0%] absolute h-[1px] bg-white top-0 left-0 mb-[5%]"
        ></div>
        <div
          id="line-stats2"
          className="w-[0%] absolute h-[1px] bg-amber-600 bottom-0 right-0 mb-[5%]"
        ></div>
      </section>

      <section
        id="six_section"
        className="overflow-hidden relative w-full font-title3 h-screen font-semibold flex flex-col justify-between items-center text-white py-10   text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl 2xl:leading-[4rem] z-50"
      >
       
        <article className="absolute top-0 left-0 max-w-[100%] md:max-w-[50%] mt-6 ml-3 z-50 lg:mt-4 xl:ml-[3%] 2xl:mt-16 overflow-visible ">
          <h6 id="title-stats" className="text-amber-600">
            LOREM IMPSUM{" "}
          </h6>
          <h6 id="title-stats" className="text-stone-600">
            LOREM IMPSUM{" "}
          </h6>
        </article>
        <article className="absolute bottom-0 right-0  flex flex-col items-end justify-end   z-50 mb-6 sm:mr-[30px] md:mr-0 md:max-w-[350px] xl:max-w-[50%]  lg:mb-4 2xl:mb-16 xl:mr-[3%]">
          <h6 className="text-amber-600  w-[55%] md:w-full">LOREM IMPSUM</h6>
          <h6 className="w-[55%] md:w-full text-stone-600">LOREM IMPSUM </h6>
        </article>
      </section>
      <div className="w-full h-[10dvh]"></div>
      <section
        id="seven_section"
        className="bg-zinc-600  w-full h-screen overflow-hidden lg:flex lg:flex-row z-[150]"
      >
        <div className="bg-gray-300 h-screen w-full  lg:w-1/2  z-[150] xl:z-20">
          <div className="w-full h-[58%] bg-gray-300 flex justify-center items-center gap-x-4 flex-wrap font-text2 px-1 lg:gap-x-1 xl:gap-x-3 xl:h-[40%] 2xl:h-[35%] 2xl:gap-x-10">
            <div className="card w-[150px] min-h-[200px] flex items-center gap-2 pt-4 px-2 z-50">
              <img className="w-[50px]" src={bullet} alt="" />
              <h6 className="text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-black text-base rounded-md bg-amber-600">
                Button
              </button>
            </div>
            <div className="card w-[150px] min-h-[200px] flex items-center gap-2 pt-4 px-2 z-50">
              <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="M0 0h48v48h-48z" fill="none" />
                <path d="M30 2h-12v4h12v-4zm-8 26h4v-12h-4v12zm16.05-13.23l2.85-2.85c-.86-1.03-1.8-1.97-2.83-2.83l-2.85 2.85c-3.07-2.46-6.98-3.94-11.23-3.94-9.95 0-17.99 8.06-17.99 18s8.04 18 17.99 18 18.01-8.06 18.01-18c0-4.25-1.48-8.15-3.95-11.23zm-14.05 25.23c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z" />
              </svg>
              <h6 className="text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-black text-base rounded-md bg-amber-600">
                Button
              </button>
            </div>
            <div className="card w-[150px] min-h-[200px] flex items-center gap-2 pt-[10px] z-50 px-2">
              <img className="w-[55px]" src={flash} alt="" />
              <h6 className="text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-black text-base rounded-md bg-amber-600">
                Button
              </button>
            </div>
            <div className="card w-[150px] min-h-[200px] flex items-center gap-2 pt-4 px-2 z-[150] ">
              <img className="w-[46px]" src={classicalchess} alt="" />
              <h6 className="mt-[4px] text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-black text-base rounded-md bg-amber-600">
                Button
              </button>
            </div>
          </div>
          <div
            id="stats-container"
            className="relative w-full h-[42%] bg-zinc-900 xl:h-[60%] xl:pl-[7%] 2xl:h-[65%] overflow-y-scroll pt-[5%] lg:overflow-y-hidden lg:pt-[3%]"
          >
            <p className="text-3xl font-semibold text-title pl-4 text-white flex items-center   w-full">
              <img className="max-w-10 2xl:max-w-12" src={flash} alt="" />
              Blitz
            </p>
            <ul className="mt-[4%] text-gray-300 z-50  text-md font-text2 flex flex-col justify-center items-center lg:mt-[4%] gap-1 px-4 xl:max-w-[55%] 2xl:text-lg ">
              <li className="flex  items-center gap-2 bg-zinc-800 w-full py-[1px] z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>

              <li className="flex  items-center gap-2  w-full z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2 bg-zinc-800 w-full py-[1px] z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>

              <li className="flex  items-center gap-2  w-full z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2 bg-zinc-800 w-full py-[1px] z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2  w-full z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2 bg-zinc-800 w-full py-[1px] z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2  w-full z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2 bg-zinc-800 w-full py-[1px] z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
              <li className="flex  items-center gap-2  w-full z-50">
                <i class="bx bx-chevron-right text-3xl text-amber-600"></i>
                Lorem impsum dolor sit.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden bg-zinc-900 lg:flex lg:flex-col lg:w-1/2 lg:h-screen relative z-[150] xl:z-20">
          <div className="w-full bg-zinc-900 lg:h-[40%] 2xl:h-[35%] z-[150] xl:z-20"></div>
          <div className="w-full bg-gray-300 lg:h-[60%] 2xl:h-[65%] flex flex-col items-center justify-center gap-6 2xl:gap-8">
            <p className="text-2xl 2xl:text-4xl font-title text-white  font-bold w-[80%]">
              EL AJEDREZ ES ALGO MÁS QUE UN JUEGO. ES UNA DIVERSIÓN INTELECTUAL
              QUE TIENE ALGO DE ARTE Y MUCHO DE CIENCIA.
              <span className="text-stone-600 ml-2">
                ES ADEMAS, UN MEDIO DE ACERCAMIENTO SOCIAL E INTELECTUAL.
              </span>
            </p>

            <legend className="w-[80%] xl:text-xl 2xl:text-3xl font-title2 text-stone-500 flex flex-col items-end xl:gap-3 2xl:gap-6">
              <div className="w-full bg-white h-[1px] "></div>
              José Raúl Capablanca
            </legend>
          </div>
        </div>
      </section>
    </>
  );
};
export default Stats;
