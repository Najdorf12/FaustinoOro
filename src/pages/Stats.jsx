import SplitType from "split-type";
import bullet from "../assets/bullet.png";
import flash from "../assets/flash.png";
import imgTorneo from "../assets/img-torneo.jpg";
import classicalchess from "../assets/classicalchess.png";
import CardTournament from "../components/CardTournament";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
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
        style={{
          background:
            "linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)",
        }} 
        id="six_section"
        className="overflow-hidden relative bg-gray-300 w-fulL h-screen z-5 pt-10 pl-2 pr-1 2xl:pt-16"
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
            {allTournaments?.map((tournament, i) => (
              <CardTournament key={i} tournament={tournament} index={i + 1} />
            ))}
          </ul>
        </article>
      </section>

       <div className="w-full h-[10dvh] z-10 bg-gray-300"></div> 

      <section
        id="seven_section"
        className="relative w-full h-screen overflow-hidden bg-gray-300"
     /*   style={{
          background:
            "linear-gradient(45deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)",
        }}  */
      >
       
          <div  id="" className="absolute w-1/2 h-screen bg-gray-300 "></div>
      </section>
    </>
  );
};
export default Stats;
