import SplitType from "split-type";
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
    console.log(chars);
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
    }).to("#text-reveal2", {
      opacity: 1,
      duration: 2,
      delay: 2,
      scrollTrigger: {
        trigger: "#text-reveal2",
        start: "160% bottom",
        end: "10% 50%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section
        id="five_section"
        className="relative w-full h-screen bg-zinc-900 flex justify-center items-center px-2 sm:px-4 text-white"
      >
        <article className="relative z-50 flex flex-col justify-center items-center gap-3 lg:gap-5 text-center sm:max-w-[600px] lg:max-w-[800px] xl:-mt-[10%] 2xl:gap-10">
          <h6
            id="split"
            className="font-text2 text-5xl  text-white font-bold md:text-6xl lg:text-[10dvh]"
          >
            LOREM IMPSUM
          </h6>
          <p
            id="text-reveal2"
            className="font-text2 text-gray-200 text-base md:text-lg lg:text-xl opacity-0  "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            impedit sit aliquam laborum incidunt consectetur dicta temporibus
            libero, illum provident nobis, veniam sed! Voluptatem nulla rerum
            earum dolores alias quibusdam. Voluptatem nulla rerum earum dolores
            alias quibusdam.
          </p>
        </article>
        <div className="w-[30%] absolute h-[50px] bg-stone-600 top-0 left-0 mb-[5%]"></div>
        <div className="w-[30%] absolute h-[1px] bg-amber-600 bottom-0 right-0 mb-[5%]"></div>
        <div className="w-[30%] absolute h-[1px] bg-amber-600 bottom-0 left-0 mb-[5%]"></div>
      </section>

      <section
        id="six_section"
        className="overflow-hidden relative w-full font-title3 h-screen font-semibold flex flex-col justify-between items-center text-white py-10  bg-zinc-900 text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl 2xl:leading-[4rem] z-10"
      >
        <article className="absolute top-0 left-0 max-w-[30%] md:max-w-[50%] mt-6 ml-3 z-0 lg:mt-10 xl:ml-[3%] 2xl:mt-16 ">
          <h6>LOREM IMPSUM </h6>
          <h6 className="text-rose-800 ">LOREM IMPSUM </h6>
        </article>
        <article className="absolute bottom-0 right-0 sm:right-14 flex flex-col items-end justify-end   z-10 mb-6 md:right-3 lg:mb-10 2xl:mb-16 xl:mr-[3%]">
          <h6 className="text-rose-800  w-[55%] md:w-full">LOREM IMPSUM</h6>
          <h6 className="w-[55%] md:w-full">LOREM IMPSUM </h6>
        </article>
      </section>

      <section
        id="seven_section"
        className="bg-zinc-800 w-full h-screen relative flex-col md:flex-row overflow-hidden"
      >
        <article className="w-full h-1/2 md:w-1/2 md:h-full bg-white text-white text-2xl font-text2 rounded-sm  flex flex-wrap justify-center items-center gap-2">
          {" "}
          <div className="card w-[150px] h-[200px] bg-red-700 flex justify-center items-center gap-3">
            <h6>Lorem</h6>
            <p className="text-center text-base px-2 text-gray-300">Some random text.</p>
            <button className="text-center mt-4 text-black text-base px-6 py-1 rounded-md bg-amber-600">Button</button>
          </div>
          <div className="card w-[150px] h-[200px] bg-red-700">
            
          </div>
          <div className="card w-[150px] h-[200px] bg-red-700">
            
          </div>
          <div className="card w-[150px] h-[200px] bg-red-700">
            
            </div>
        </article>
        <article className="w-full h-1/2 md:w-1/2 md:h-full bg-zinc-900 "></article>
        <div className="w-[30%] absolute h-[1px] bg-amber-600 top-0 left-0 mb-[5%]"></div>
      </section>
    </>
  );
};
export default Stats;
{
  /* 
     <section
      id="five_section"
      className="w-full h-screen bg-zinc-700 z-10 text-4xl sm:text-5xl  xl:text-6xl 2xl:text-8xl 2xl:leading-[5rem] font-semibold flex flex-col justify-between items-center text-white py-4 sm:py-6 xl:py-8 2xl:py-20"
    >
     <article className="z-50 md:self-start md:pl-[5%]">
        <h6>LOREM IMPSUM </h6>
        <h6 className="text-stone-700">LOREM IMPSUM </h6>
      </article>
      <article className="md:self-end md:pr-[4.5%]">
        <h6 className="text-stone-700">LOREM IMPSUM</h6>
        <h6>LOREM IMPSUM </h6>
      </article> 
    </section>
      */
}
