import SplitType from "split-type";
import imgTorneo from "../assets/img-torneo.jpg";
import CardTournament from "../components/CardTournament";
import NavBtn from "../components/Buttons/NavBtn";
import gsap from "gsap";
import CardNoticeHome from "./News/CardNoticeHome";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

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

const Stats = ({ newsData }) => {
  const [displayedTournaments, setDisplayedTournaments] = useState(5);
  const [displayedNotices, setDisplayedNotices] = useState(2);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDisplayedTournaments(6);
      setDisplayedNotices(3);
    } else {
      setDisplayedTournaments(5);
      setDisplayedNotices(2);
    }
  }, []);

  const screenStats = window.innerWidth;
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
          start: screenStats > 700 ? "50% bottom" : "30% bottom",
          end: "top top",
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
        className="relative w-full  h-screen md:h-screen z-50 lg:z-10 flex flex-col justify-center items-center overflow-hidden text-white xl:flex-row xl:justify-evenly"
      >
        <article className="relative -mt-6 pl-4 z-[200]  flex flex-col justify-center items-start gap-6 lg:gap-5  sm:max-w-[600px] lg:max-w-[750px] xl:max-w-[800px] 2xl:max-w-[900px]  xl:self-start xl:mt-[3%]  xl:gap-8 2xl:gap-10 ">
          <h6
            id="split"
            className="font-title text-5xl z-[200]  font-semibold md:text-6xl lg:text-[16vh] xl:text-[17vh] text-white  "
          >
            NOTICIAS
          </h6>
          <p
            id="text-reveal2"
            className="font-text2  z-50 text-stone-300 text-balance  text-sm md:text-lg opacity-0  xl:text-xl 2xl:text-2xl"
          >
            Descubre las últimas noticias sobre la carrera y los logros de
            Faustino Oro. Mantente informado sobre sus próximas competencias,
            análisis de partidas y eventos destacados en el mundo del ajedrez.
            Aquí encontrarás actualizaciones en tiempo real y la cobertura de
            los momentos más importantes de su trayectoria profesional.
          </p>
          <Link
            id="box-glass"
            to={"/news"}
            className="flex justify-center items-center gap-2 z-[200]"
          >
            <NavBtn btnname="Ir a noticias" />
          </Link>
        </article>

        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-wrap pl-4 gap-x-1 gap-y-3 mt-6 xl:gap-6 z-50 lg:justify-center">
            {newsData?.slice(0, displayedNotices)?.map((news) => (
              <CardNoticeHome news={news} />
            ))}
          </div>
        </div>

        <div
          id="line-stats"
          className="w-[0%] absolute h-[1px] bg-gray-300 top-0 left-0 mb-[5%]"
        ></div>
      </section>

      <section
        id="six_section"
        className="overflow-hidden relative  w-fulL h-screen z-5 pt-10 pl-2 pr-1 2xl:pt-16"
      >
        <div
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-zinc-300 absolute  inset-0"
        ></div>
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
    </>
  );
};
export default Stats;
