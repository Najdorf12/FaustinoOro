import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.to("#about-text", {
      opacity: 1,
      y: "20px",
      duration: 2,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#second_section",
        start: "25% bottom",
        end: "top top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-[#e8e8e8] flex lg:justify-end font-title overflow-hidden"
      >
        <article className="relative pt-24 lg:pt-0 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] xl:mr-[7%] lg:mt-[4%] 2xl:mr-[12%] 2xl:mt-[6%]  2xl:max-w-[650px] ">
          <h5
            id="about-text"
            className="text-xl font-title4 text-stone-500 2xl:text-3xl opacity-0"
          >
            About me
          </h5>
          <h3
            id="about-text"
            className="text-black text-3xl 2xl:text-5xl opacity-0"
          >
            ERASING NATIVE APIS LIKE INTERSECTION OBSERVER, CSS STICKY Y NOERS.
          </h3>
          <div
            id="about-text"
            className="w-[200px] h-[2px] bg-stone-500 rounded-md my-2"
          ></div>
          <p
            id="about-text"
            className="relative mt-2 text-lg font-text2 2xl:text-[1.5rem]  text-gray-600"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut culpa
            consectetur ullam hic porro nobis exercitationem quam alias
            voluptatem quasi expedita magni. Atque obcaecati aliquid praesentium
            blanditiis, corporis necessitatibus deserunt.
          </p>
          <div
            id="about-text"
            className="mt-3 w-36 h-10 flex justify-center items-center px-5 bg-zinc-700 font-title4 font-medium text-white border-2 border-white md:hidden"
          >
            Button
          </div>
          <div className="flex gap-8">
            <div
              id="about-text"
              class="invisible md:visible scene font-title4 font-medium xl:mt-6"
            >
              <div class="cube">
                <span class="side top bg-wheat text-stone-800">button</span>
                <span class="side front bg-stone-600 text-white">button</span>
              </div>
            </div>
            <div
              id="about-text"
              class="invisible md:visible scene font-title4 font-medium xl:mt-6"
            >
              <div class="cube">
                <span class="side top bg-wheat text-white">button 2</span>
                <span class="side front bg--500 text-stone-800">button 2</span>
              </div>
            </div>
          </div>
        </article>
        {/* <div className="w-[200px] h-[200px] bg-rose-800 rounded-md my-2"></div> */}
      </section>
    </>
  );
};

export default About;
