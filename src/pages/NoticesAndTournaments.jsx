import SplitType from "split-type";
import TournamentsSection from "./Tournaments/TournamentsSection";
import CardNoticeHome from "./News/CardNoticeHome";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { useAdminData } from "./Admin/AdminDataContext";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const NoticesAndTournaments = () => {
  const { news, tournaments } = useAdminData();
  const [displayedNotices, setDisplayedNotices] = useState(2);
  const [displayedTournaments, setDisplayedTournaments] = useState(5);
  const textRef = useRef(null);

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

  /*   const text = new SplitType("#split", { type: "chars" });
    const chars = text?.chars; */

    tl. /* from(chars, {
      yPercent: 60,
        stagger: 0.2,
        ease: "back.out",
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "50% 100%",
          end: "-30% 20%",
          scrub: 1,
      },
    })
      . */to("#line-notices", {
      width: screenStats > 700 ? "90%" : "90%",
      duration: 2,
      scrollTrigger: {
        trigger: "#five_section",
        start: screenStats > 700 ? "50% bottom" : "30% bottom",
        end: "top top",
        scrub: true,
      },
    })
      .to("#text-reveal2", {
        y : 0,
        opacity: 1,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: "#text-reveal2",
          start: "140% bottom",
          end: "10% 50%",
          scrub: 1,
        },
      })
      .to("#line-tournament", {
        width: screenStats > 700 ? "45%" : "90%",
        duration: 2,
        scrollTrigger: {
          trigger: "#six_section",
          start: screenStats > 700 ? "50% bottom" : "30% bottom",
          end: "top top",
          scrub: true,
        },
      });
  }, [textRef]);

  return (
    <>
      <section
        id="five_section"
        className="relative w-full h-screen overflow-hidden  bg-whiteCustom"
      >
        <div className="w-full h-full absolute inset-0 z-50 flex flex-col justify-center items-center  text-white md:justify-evenly gap-4 md:gap-0 lg:items-start">
          <article className=" relative -mt-14 z-[200] flex flex-col justify-center items-start gap-4 max-w-[600px] md:self-start lg:gap-5 lg:mt-0 lg:max-w-[750px] xl:max-w-[800px] 2xl:max-w-[900px] xl:gap-6 2xl:gap-8">
            <h6
              ref={textRef}
              /* id="split" */
              className="font-title ml-4 text-6xl z-[200] font-semibold md:text-6xl lg:text-[16vh] lg:ml-9 xl:text-[17vh] text-bluefausti "
            >
              NOTICIAS
            </h6>
            <div
              id="line-notices"
              className="h-[2px] w-[0%] bg-white z-50"
            ></div>
            <p
              id="text-reveal2"
              className="font-text2 z-50 text-zinc-500 text-balance text-sm ml-4 md:text-lg opacity-0 lg:ml-9 xl:text-xl 2xl:text-2xl"
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
              <button className="animated-button rounded-3xl w-[180px] ml-4 pl-10 py-1 shadow-lg shadow-zinc-600 border border-stone-500  bg-zinc-700 lg:w-[210px] lg:ml-9 2xl:pl-14 2xl:w-[230px] group">
                <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-700 2xl:text-4xl"></i>
                <span className="text font-title2 text-whiteCustom text-base 2xl:text-lg group-hover:text-zinc-600">
                  Ir a noticias
                </span>
                <span className="circle bg-white"></span>
                <i className="bx bx-right-arrow-alt arr-1 text-3xl text-whiteCustom  group-hover:text-sky-700 2xl:text-4xl"></i>
              </button>
            </Link>
          </article>

          <div translate="no" className="flex flex-col justify-start items-start mt-14 max-w-[900px] lg:mt-0 lg:self-end xl:max-w-[1000px] 2xl:mr-2">
            <div translate="no" className="flex flex-wrap pl-4 gap-y-6 gap-x-12 z-50 md:justify-center xl:gap-x-16 2xl:ga">
              {[...news]
                ?.reverse()
                ?.slice(0, displayedNotices)
                ?.map((newsItem, i) => (
                  <CardNoticeHome key={i} news={newsItem} index={i} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <TournamentsSection
        screenStats={screenStats}
        tournaments={tournaments}
        displayedTournaments={displayedTournaments}
      />
    </>
  );
};
export default NoticesAndTournaments;
