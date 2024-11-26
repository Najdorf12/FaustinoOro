import SplitType from "split-type";
import NavBtn from "../components/Buttons/NavBtn";
import Tournaments from "./Tournaments";
import CardNoticeHome from "./News/CardNoticeHome";
import imgTorneo from "../assets/img-torneo.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState, useEffect } from "react";

import gsap from "gsap";
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
  const [displayedNotices, setDisplayedNotices] = useState(2);
  const [displayedTournaments, setDisplayedTournaments] = useState(5);

  const screenStats = window.innerWidth;
  const tl = gsap.timeline();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDisplayedTournaments(6);
      setDisplayedNotices(3);
    } else {
      setDisplayedTournaments(5);
      setDisplayedNotices(2);
    }
  }, []);

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
        className="relative w-full h-screen overflow-hidden bg-whiteCustom  "
      >
        <div className="w-full h-full absolute inset-0 z-50   flex flex-col justify-center items-center  text-white lg:justify-evenly lg:items-start">
          <article className="relative   -mt-12 pl-4 z-[200]  flex flex-col justify-center items-start gap-4 max-w-[600px] lg:gap-5 lg:mt-0 lg:max-w-[750px] xl:max-w-[800px] 2xl:max-w-[900px]  xl:self-start xl:gap-8 xl:pl-10 2xl:gap-10 2xl:pl-14">
            <h6
              id="split"
              className="font-title text-6xl z-[200]  font-semibold md:text-6xl lg:text-[16vh] xl:text-[17vh] text-bluefausti "
            >
              NOTICIAS
            </h6>
            <p
              id="text-reveal2"
              className="font-text2  z-50 text-stone-400 text-balance  text-sm md:text-lg opacity-0  xl:text-xl 2xl:text-2xl"
            >
              Descubre las últimas noticias sobre la carrera y los logros de
              Faustino Oro. Mantente informado sobre sus próximas competencias,
              análisis de partidas y eventos destacados en el mundo del ajedrez.
            </p>
            <Link
              id="box-glass"
              to={"/news"}
              className="flex justify-center items-center gap-2 mt-1"
            >
              <button className="animated-button rounded-3xl w-[180px] pl-12 py-1 shadow-lg shadow-zinc-900 border border-stone-500  bg-bluefausti lg:w-[210px] lg: lg:rounded- 2xl:pl-14 2xl:w-[230px] group">
                <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-700 2xl:text-4xl"></i>
                <span className="text font-title2 text-whiteCustom text-base 2xl:text-lg group-hover:text-zinc-600">
                  Ir a noticias
                </span>
                <span className="circle bg-white"></span>
                <i className="bx bx-right-arrow-alt arr-1 text-3xl text-whiteCustom  group-hover:text-sky-700 2xl:text-4xl"></i>
              </button>
            </Link>
          </article>

          <div className="flex flex-col justify-start items-start mt-14 max-w-[900px] lg:mt-0 lg:self-end xl:max-w-[1000px]">
            <div className="flex flex-wrap pl-4 gap-y-6 gap-x-12  z-50 md:justify-center xl:gap-x-16 2xl:gap-x-20">
              {newsData?.slice(0, displayedNotices)?.map((news) => (
                <CardNoticeHome news={news} />
              ))}
            </div>
          </div>

          <div
            id="line-stats"
            className="w-[0%] absolute h-[1px] bg-gray-300 top-0 left-0 mb-[5%]"
          ></div>
        </div>
      </section>

      <Tournaments
        screenStats={screenStats}
        allTournaments={allTournaments}
        displayedTournaments={displayedTournaments}
      />
    </>
  );
};
export default Stats;
