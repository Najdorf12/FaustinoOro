import SplitType from "split-type";
import bullet from "../assets/bullet.png";
import flash from "../assets/flash.png";
import imgTorneo from "../assets/img-torneo.jpg";
import classicalchess from "../assets/classicalchess.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    const screenStats = window.screen.width;

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
          start: screenStats > 700 ? "50% bottom" : "30% bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to("#line-stats2", {
        opacity: 1,
        delay: 0.7,
        width: screenStats > 700 ? "45%" : "55%",
        duration: 2,
        scrollTrigger: {
          trigger: "#five_section",
          start: screenStats > 700 ? "60% bottom" : "70% bottom",
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
      .to("#line-tournament", {
        width: screenStats > 700 ? "40%" : "90%",
        duration: 2,
        scrollTrigger: {
          trigger: "#six_section",
          start: screenStats > 700 ? "50% bottom" : "30% bottom",
          end: "top top",
          scrub: true,
        },
      });
  }, []);
  return (
    <>
      <section
        id="five_section"
        className="relative w-full  h-[90dvh] md:h-screen z-10 lg:z-10 flex justify-center items-center px-2 sm:px-4 text-white"
        /* style={{background: "linear-gradient(to right, #000000, #434343)" }} */
      >
        <article className="relative z-[200] flex flex-col justify-center items-center gap-8 lg:gap-5 text-center sm:max-w-[600px] lg:max-w-[800px] xl:-mt-[10%] xl:gap-8 2xl:gap-10">
          <h6
            id="split"
            className="font-text2 text-5xl z-[200]  font-bold md:text-6xl lg:text-[10dvh]"
          >
            EL PIBE DE ORO
          </h6>
          <p
            id="text-reveal2"
            className="font-text2 px-3 z-50 text-stone-600 text-base md:text-lg xl:px-8 opacity-0  "
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
          className="w-[0%] absolute h-[1px] bg-gray-300 top-0 left-0 mb-[5%]"
        ></div>
        {/*   <div
          id="line-stats2"
          className="w-[0%] absolute z-0 h-[1px] bg-lightbrown bottom-0 right-0 mb-[5%]"
        ></div> */}
      </section>

      <section
        id="six_section"
        className="overflow-hidden relative bg-gray-300 w-fulL h-screen z-5 pt-10 pl-2 pr-1 2xl:pt-16"
      >
        <article className="flex flex-col gap-6">
          <h6 className="text-6xl font-title font-semibold text-bluefausti lg:text-7xl xl:pl-6 2xl:pl-8 2xl:text-8xl ">
            TORNEOS
          </h6>
          <div id="line-tournament" className="h-[2px] w-[0%]  bg-white"></div>
          <ul
            id="tournaments"
            className="h-[600px]  rounded-lg pr-3 pt-2 pb-6 overflow-y-scroll flex flex-col gap-6 z-50 mt-7  lg:flex-row lg:justify-between  lg:px-[5%] lg:mt-12 2xl:px-[6%]"
          >
            <div className="flex flex-col gap-6 lg:gap-5 2xl:gap-7">
              <li
                id="tournament"
                className="flex rounded-xl  pr-2 max-w-[470px] min-h-[90px] max-h-[110px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:max-h-[150px] 2xl:max-w-[550px]"
              >
                <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
                  01
                </div>
                <picture className="w-[30%]  max-w-[200px]">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={imgTorneo}
                    alt=""
                  />
                </picture>
                <div className="pt-1  pb-1 pl-3 font-text2 flex flex-col  ">
                  <h6 className="text-xl text-balance text-white font-medium leading-5  min-h-[40px] max-w-[80%] 2xl:text-2xl 2xl:leading-6">
                    LOREM IMPSUM DOLOR SIT AMET
                  </h6>
                  <p className="text-lg font-medium text-stone-500 2xl:text-xl 2xl:mt-2">
                    BARCELONA 
                  </p>
                  <p className="font-title3  text-bluefausti 2xl:text-lg 2xl:mt-2">11/12/2024</p>
                </div>
              </li>
              <li
                id="tournament"
                className="flex rounded-xl  pr-2 max-w-[470px] min-h-[90px] max-h-[110px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:max-h-[150px] 2xl:max-w-[550px]"
              >
                <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
                  02
                </div>
                <picture className="w-[30%]  max-w-[200px]">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={imgTorneo}
                    alt=""
                  />
                </picture>
                <div className="pt-1  pb-1 pl-3 font-text2 flex flex-col  ">
                  <h6 className="text-xl text-balance text-white font-medium leading-5  min-h-[40px] max-w-[80%] 2xl:text-2xl 2xl:leading-6">
                    LOREM IMPSUM DOLOR SIT AMET
                  </h6>
                  <p className="text-lg font-medium text-stone-500 2xl:text-xl 2xl:mt-2">
                    BARCELONA 
                  </p>
                  <p className="font-title3  text-bluefausti 2xl:text-lg 2xl:mt-2">11/12/2024</p>
                </div>
              </li>
              <li
                id="tournament"
                className="flex rounded-xl  pr-2 max-w-[470px] min-h-[90px] max-h-[110px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:max-h-[150px] 2xl:max-w-[550px]"
              >
                <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
                  03
                </div>
                <picture className="w-[30%]  max-w-[200px]">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={imgTorneo}
                    alt=""
                  />
                </picture>
                <div className="pt-1  pb-1 pl-3 font-text2 flex flex-col  ">
                  <h6 className="text-xl text-balance text-white font-medium leading-5  min-h-[40px] max-w-[80%] 2xl:text-2xl 2xl:leading-6">
                    LOREM IMPSUM DOLOR SIT AMET
                  </h6>
                  <p className="text-lg font-medium text-stone-500 2xl:text-xl 2xl:mt-2">
                    BARCELONA 
                  </p>
                  <p className="font-title3  text-bluefausti 2xl:text-lg 2xl:mt-2">11/12/2024</p>
                </div>
              </li>
            </div>

            <div className=" flex flex-col gap-6 lg:gap-5 2xl:gap-7 ">
            <li
                id="tournament"
                className="flex rounded-xl  pr-2 max-w-[470px] min-h-[90px] max-h-[110px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:max-h-[150px] 2xl:max-w-[550px]"
              >
                <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
                  04
                </div>
                <picture className="w-[30%]  max-w-[200px]">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={imgTorneo}
                    alt=""
                  />
                </picture>
                <div className="pt-1  pb-1 pl-3 font-text2 flex flex-col  ">
                  <h6 className="text-xl text-balance text-white font-medium leading-5  min-h-[40px] max-w-[80%] 2xl:text-2xl 2xl:leading-6">
                    LOREM IMPSUM DOLOR SIT AMET
                  </h6>
                  <p className="text-lg font-medium text-stone-500 2xl:text-xl 2xl:mt-2">
                    BARCELONA 
                  </p>
                  <p className="font-title3  text-bluefausti 2xl:text-lg 2xl:mt-2">11/12/2024</p>
                </div>
              </li>
              <li
                id="tournament"
                className="flex rounded-xl  pr-2 max-w-[470px] min-h-[90px] max-h-[110px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:max-h-[150px] 2xl:max-w-[550px]"
              >
                <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
                  05
                </div>
                <picture className="w-[30%]  max-w-[200px]">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={imgTorneo}
                    alt=""
                  />
                </picture>
                <div className="pt-1  pb-1 pl-3 font-text2 flex flex-col  ">
                  <h6 className="text-xl text-balance text-white font-medium leading-5  min-h-[40px] max-w-[80%] 2xl:text-2xl 2xl:leading-6">
                    LOREM IMPSUM DOLOR SIT AMET
                  </h6>
                  <p className="text-lg font-medium text-stone-500 2xl:text-xl 2xl:mt-2">
                    BARCELONA 
                  </p>
                  <p className="font-title3  text-bluefausti 2xl:text-lg 2xl:mt-2">11/12/2024</p>
                </div>
              </li>
              <li
                id="tournament"
                className="flex rounded-xl  pr-2 max-w-[470px] min-h-[90px] max-h-[110px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:max-h-[150px] 2xl:max-w-[550px]"
              >
                <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
                  06
                </div>
                <picture className="w-[30%]  max-w-[200px]">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={imgTorneo}
                    alt=""
                  />
                </picture>
                <div className="pt-1  pb-1 pl-3 font-text2 flex flex-col  ">
                  <h6 className="text-xl text-balance text-white font-medium leading-5  min-h-[40px] max-w-[80%] 2xl:text-2xl 2xl:leading-6">
                    LOREM IMPSUM DOLOR SIT AMET
                  </h6>
                  <p className="text-lg font-medium text-stone-500 2xl:text-xl 2xl:mt-2">
                    BARCELONA 
                  </p>
                  <p className="font-title3  text-bluefausti 2xl:text-lg 2xl:mt-2">11/12/2024</p>
                </div>
              </li>
            </div>
          </ul>
        </article>
      </section>

      <div className="w-full h-[10dvh] z-50 bg-zinc-900"></div>

      <section
        id="seven_section"
        className=" w-full h-screen overflow-hidden lg:flex lg:flex-row z-50"
      >
        <div className=" h-screen w-full  lg:w-1/2">
          <div className="absolute h-full w-full z-50"></div>

          <div className="w-full h-[53.5%]  py-3 flex justify-center items-center gap-x-7 flex-wrap font-text2 px-1 lg:gap-x-1 xl:gap-x-3 xl:h-[40%] 2xl:h-[35%] 2xl:gap-x-10">
            <div className="card bg-bluefausti w-[150px] min-h-[200px] flex items-center gap-2 pt-4 px-2 z-50">
              <img className="w-[50px]" src={bullet} alt="" />
              <h6 className="text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-bluefausti text-base rounded-md bg-gray-300">
                Button
              </button>
            </div>
            <div className="card bg-bluefausti w-[150px] min-h-[200px] flex items-center gap-2 pt-4 px-2 z-50">
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
              <button className="text-center  py-[1.5px] px-4 mt-2 text-bluefausti text-base rounded-md bg-gray-300">
                Button
              </button>
            </div>
            <div className="card bg-bluefausti w-[150px] min-h-[200px] flex items-center gap-2 pt-[10px] z-50 px-2">
              <img className="w-[55px]" src={flash} alt="" />
              <h6 className="text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-bluefausti text-base rounded-md bg-gray-300">
                Button
              </button>
            </div>
            <div className="card bg-bluefausti w-[150px] min-h-[200px] flex items-center gap-2 pt-4 px-2 z-50 ">
              <img className="w-[46px]" src={classicalchess} alt="" />
              <h6 className="mt-[4px] text-2xl text-white">Lorem</h6>
              <p className="text-center text-base px-2 leading-4 text-gray-400">
                Some random text lorem.
              </p>
              <button className="text-center  py-[1.5px] px-4 mt-2 text-bluefausti text-base rounded-md bg-gray-300">
                Button
              </button>
            </div>
          </div>
          <div
            id="stats-container"
            /*   style={{
              backgroundImage:
                "linear-gradient(to left bottom, #EAEAEA, #DBDBDB, #F2F2F2, #3f4864)",
            }}  */
            className="relative w-full h-[46.5%] bg-gray-300 xl:h-[60%] xl:pl-[7%] 2xl:h-[65%] overflow-y-scroll pt-[4%] lg:overflow-y-hidden lg:pt-[3%] z-50 lg:z-10"
          ></div>
        </div>

        <div className="hidden bg-zinc-900 lg:flex lg:flex-col lg:w-1/2 lg:h-screen relative  xl:z-20">
          <div className="w-full bg-gray-300 lg:h-[40%] 2xl:h-[35%] z-[150] xl:z-20"></div>
          <div className="w-full  lg:h-[60%] 2xl:h-[65%] flex flex-col items-center justify-center gap-6 2xl:gap-8">
            <p className="text-2xl 2xl:text-4xl font-title text-white  font-bold w-[80%]">
              EL AJEDREZ ES ALGO MÁS QUE UN JUEGO. ES UNA DIVERSIÓN INTELECTUAL
              QUE TIENE ALGO DE ARTE Y MUCHO DE CIENCIA.
              <span className="text-bluefausti ml-2">
                ES ADEMAS, UN MEDIO DE ACERCAMIENTO SOCIAL E INTELECTUAL.
              </span>
            </p>

            <legend className="w-[80%] xl:text-xl 2xl:text-3xl font-title2 text-white0 flex flex-col items-end xl:gap-3 2xl:gap-6">
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
