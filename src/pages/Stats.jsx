import SplitType from "split-type";
import imgNews from "../assets/imgNews.jpg";
import imgTorneo from "../assets/img-torneo.jpg";
import imgFausti from "../assets/fausti20.jpeg";
import CardTournament from "../components/CardTournament";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const [displayedTournaments, setDisplayedTournaments] = useState(5);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDisplayedTournaments(6);
    } else {
      setDisplayedTournaments(5);
    }
  }, []);

  const screenStats = window.innerWidth;
  const tl = gsap.timeline();

  const allTournaments = [
    {
      title: "Tournament test1 Lorem Impsum",
      description: "Description test1",
      content: "Content test1",
      location: "Location, test1",
      isActive: true,
      time: "12/12/2024",
      images: imgTorneo,
    },
    {
      title: "Tournament test2",
      description: "Description test2",
      content: "Content test2",
      location: "Location, test2",
      isActive: true,
      time: "12/12/2024",
      images: imgTorneo,
    },
    {
      title: "Tournament test3 Lorem Impsum dolor",
      description: "Description test3",
      content: "Content test3",
      location: "Location, test3",
      isActive: true,
      time: "12/12/2024",
      images: imgTorneo,
    },
    {
      title: "Tournament test4",
      description: "Description test4",
      content: "Content test4",
      location: "Location, test4",
      isActive: true,
      time: "12/12/2024",
      images: imgTorneo,
    },
    {
      title: "Tournament test5",
      description: "Description test5",
      content: "Content test5",
      location: "Location, test5",
      isActive: true,
      time: "12/12/2024",
      images: imgTorneo,
    },
    {
      title: "Tournament test6",
      description: "Description test6",
      content: "Content test6",
      location: "Location, test6",
      isActive: true,
      time: "12/12/2024",
      images: imgTorneo,
    },
  ];

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
    /* .to("#box-stats", {
        y:"100px",
        x: "150px",
        rotate: "180deg",
        duration: 4,
        stagger: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#box-stats",
          start: screenStats > 1500 ? "300% bottom" : "150% bottom",
          end: screenStats > 1500 ? "top 10%" : "330% top",
          scrub: true,
         
        },
      }) */
  }, []);

  return (
    <>
      <section
        id="five_section"
        className="relative w-full  h-[90dvh] md:h-screen z-50 lg:z-10 flex justify-center items-center px-2 sm:px-4 text-white"
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
        /* style={{
          background:
            "linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)",
        }} */
        id="six_section"
        className="overflow-hidden relative bg-bluefausti w-fulL h-screen z-5 pt-10 pl-2 pr-1 2xl:pt-16"
      >
        <article className="flex flex-col gap-6">
          <h6 className="text-6xl font-title font-semibold text-white lg:text-7xl xl:pl-6 2xl:pl-8 2xl:text-8xl z-50">
            TORNEOS
          </h6>
          <div
            id="line-tournament"
            className="h-[2px] w-[0%] bg-white z-50"
          ></div>
          <ul
            id="tournaments"
            className="rounded-lg pr-3 pt-2 pb-6 overflow-y-scroll grid grid-cols-1 gap-6 z-50 mt-3 lg:grid-cols-2   lg:mt-12  lg:w-full xl:gap-10  place-items-center lg:mx-auto"
          >
            {allTournaments
              ?.slice(0, displayedTournaments)
              .map((tournament, i) => (
                <CardTournament
                  screenStats={screenStats}
                  key={i}
                  tournament={tournament}
                  index={i + 1}
                />
              ))}
          </ul>
        </article>
      </section>

      <section
        id="seven_section"
        className="relative w-full h-screen overflow-hidden bg-zinc-800  flex  items-end"
      >
        <div
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-zinc-300 absolute  inset-0"
        ></div>

        <div className="absolute top-0 right-0  z-50 rounded-xl lg:left-0 md:flex md:flex-col md:justify-center md:items-center xl:items-start xl:pl-[3%]">
          <section className="mt-16 flex flex-col justify-center gap-2  pt-8 px-2 max-w-[600px] lg:mt-4 2xl:max-w-[700px] xl:gap-4">
            <article
              id="box-news"
              className="flex justify-center gap-2 xl:gap-3 "
            >
              <section
                id="news-box"
                className="relative w-[60%]  border border-stone-500 rounded-2xl"
              >
                <div
                  className="text-xl font-bold font-title text-stone-600 box-new absolute top-0 left-0
          mt-3 ml-2 xl:text-3xl xl:ml-4 
          "
                >
                  LOREM IMPSUM DOLOR SIT AMET
                  <div className="flex items-center">
                    <div className="w-[50%] h-[2.5px] bg-white -mt-[1px]"></div>
                    <i class="bx bx-right-arrow-alt text-3xl -ml-[8px] text-white"></i>
                  </div>
                </div>
              </section>
              <div className="text-white text-balance relative w-[40%]  text-2xl font-semibold font-title    xl:text-3xl 2xl:text-4xl hover:scale-105 duration-500 ">
                <figure className="">
                  <img
                    className="w-full  object-cover rounded-2xl rounded-tl-none rounded-br-3xl border  border-lightbrown h-[180px]"
                    src={imgNews}
                    alt=""
                  />
                </figure>
              </div>
            </article>
            <div className="flex justify-center items-center gap-2 w-full font-text2 xl:gap-3">
              <div className="w-1/2  h-[150px]  ">
                <figure className="w-full h-full">
                  <img
                    className="w-full h-full object-cover  rounded-tl-sm rounded-r-2xl border border-lightbrown"
                    src={imgFausti}
                    alt=""
                  />
                </figure>
              </div>
              <div className="text-stone-500 relative w-1/2  h-[150px] rounded-2xl rounded-tl-none rounded-br-3xl border border-lightbrown p-2 text-base  sm:text-lg hover:scale-105 duration-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                maxime!
                <span className=" rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                  <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
                </span>
              </div>
            </div>
          </section>
        </div>
        <p className="absolute bottom-24 right-0  w-[65%] text-lg flex justify-center items-center text-balance px-3 text-end  text-white md:max-w-[500px] lg:mr-[5%] 2xl:bottom-[20%] 2xl:text-2xl z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
          accusamus aliquam nesciunt dolores illum quos, mollitia aliquid et
          quasi.
        </p>
      </section>
    </>
  );
};
export default Stats;
