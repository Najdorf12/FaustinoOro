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
      stagger: 0.7,
      scrollTrigger: {
        trigger: "#second_section",
        start: "50% bottom",
        end: "top top",
        scrub: true,
      },
    })
      .to("#about-text2", {
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#second_section",
          start: "50% bottom",
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
          start: "top bottom",
          end: "-60% 30%",
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
        y:"-300px",
        rotate: "120deg",
        stagger: 0.06,
        scrollTrigger: {
          trigger: "#box-about",
          start: screen > 1400 ? "-100% bottom" : "-190% bottom",
          end: screen > 1400 ? "40% 50%":"50% 40%",
          scrub: true,
        },
      }); 
  }, []);
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-gray-300 flex lg:justify-end font-title overflow-hidden relative"
      >
        <article className="relative pt-24 lg:pt-0 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] xl:mr-[7%] lg:mt-[4%] 2xl:mr-[12%] 2xl:mt-[6%]  2xl:max-w-[650px] ">
          <h5
            id="about-text"
            className="text-xl font-title4 text-stone-500 2xl:text-3xl opacity-0 "
          >
            About me
          </h5>
          <h3
            id="about-text2"
            className="text-white  text-4xl  2xl:text-5xl opacity-0 relative"
          >
            ERASING NATIVE APIS LIKE INTERS OBSERVER, CSS STICKY Y NOERS.
          </h3>
          <div
            id="line-about"
            className="w-[0%] h-[2px]  bg-amber-700 rounded-md my-2"
          ></div>
          <p
            id="p-about"
            className="relative  mt-[60px] opacity-0 text-lg font-text2 2xl:text-[1.5rem]  text-stone-600"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut culpa
            consectetur ullam hic porro nobis exercitationem quam alias
            voluptatem quasi expedita magni. Atque obcaecati aliquid praesentium
            blanditiis, corporis necessitatibus deserunt.
          </p>

          <div className="flex gap-8">
            <div
              id="btn-about"
              className="scene opacity-0 font-title4 mt-[21px] font-medium xl:mt-6"
            >
              <div className="cube">
                <span className="side top bg-wheat text-stone-800">button</span>
                <span className="side front bg-stone-700 text-white">
                  button
                </span>
              </div>
            </div>
            <div
              id="btn-about"
              className="scene opacity-0 font-title4 mt-[21px]  font-medium xl:mt-6"
            >
              <div className="cube">
                <span className="side top bg-wheat text-white">button 2</span>
                <span className="side front bg--500 text-stone-800">
                  button 2
                </span>
              </div>
            </div>
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
            <div id="box-about" className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150] bg-white"></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
            <div id="box-about" className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-white"></div>
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
            <div id="box-about" className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-white"></div>
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-white border-[1px]"
            ></div>
            <div id="box-about" className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-white"></div>
          </div>
          <div className="self-end z-50 ">
            <div
              id="box-about"
              className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] border-[1px] border-white "
            ></div>
            <div id="box-about" className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-white"></div>
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
            <div id="box-about" className="w-[100px] h-[100px] xl:w-[120px] 2xl:w-[150px] xl:h-[120px] 2xl:h-[150px] bg-white"></div>
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
