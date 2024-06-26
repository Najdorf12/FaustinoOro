import imgFausti2 from "../assets/fausti2.jpg";
import imgFausti3 from "../assets/fausti3.jpg";
import imgFausti4 from "../assets/fausti4.jpg";
import imgFausti6 from "../assets/img6.jpg";
import imgFausti7 from "../assets/img16.jpg";
import imgFausti8 from "../assets/img18.jpg";
import imgFausti9 from "../assets/img17.jpg";

import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    new ScrollTrigger({});
    const text = new SplitType(".split", { type: "chars" });
    const chars = text?.chars;

    tl.from(chars, {
      yPercent: 60,
      stagger: 0.4,
      ease: "back.out",
      duration: 5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".split",
        start: "30% 100%",
        end: "10% 20%",
        scrub: 1,
      },
    })
      .to("#img-fausti", {
        y: "-100px",
        stagger: 0.6,
        duration: 2,
        opacity: 0.9,
        rotateZ: -10,
        rotateY: 2,
        scrollTrigger: {
          trigger: "#four_section",
          start: "30% bottom",
          end: "50% 60%",
          scrub: 1,
        },
      })
      .to("#img-fausti2", {
        y: "-100px",
        stagger: 0.6,
        duration: 2,
        opacity: 0.9,
        rotateZ: -10,
        rotateY: 2,
        scrollTrigger: {
          trigger: "#second_gallery",
          start: "30% bottom",
          end: "50% 60%",
          scrub: 1,
        },
      });
  }, []);

  return (
    <>
      <section
        id="third_section"
        className="pt-5 pl-2 w-full h-screen bg-zinc-900  font-title relative flex items-start overflow-hidden "
      >
        <article className="relative pt-2 px-3  gap-3 z-40 sm:max-w-[500px] lg:max-w-[700px]   lg:ml-16 xl:ml-32 2xl:mt-24 2xl:max-w-[950px]">
          <h3 className="split mt-1 font-title text-white font-bold text-7xl md:text-6xl z-50 lg:text-7xl xl:text-[4.7rem]  2xl:text-[6.2rem] ">
            SOME RANDOM TEXT LOREM IMPSUM
            <div
              style={{
                WebkitTextStroke: "2px #d97706",
              }}
              className="text-amber-700"
            >
              DOLOR SIT AMET.
            </div>
          </h3>
        </article>
      </section>

      <section
        id="four_section"
        className="w-full h-screen bg-zinc-900  overflow-y-visible relative px-2 md:pl-6 xl:pl-[4%]"
      >
        <div className="flex justify-center overflow-y-visible items-center gap-2 lg:gap-4 w-full h-[75%] max-h-screen md:w-[80%] lg:w-[70%] xl:w-[55%]">
          <div
            id="imgs-container"
            className="flex flex-col gap-2 lg:gap-4 w-[40%] h-full "
          >
            <figure className="w-full h-[60%]">
              <img
                id="img-fausti"
                src={imgFausti2}
                className="w-full h-full object-cover opacity-0 rounded-md"
                alt=""
              />
            </figure>
            <figure className="w-full h-[40%] ">
              <img
                id="img-fausti"
                className="w-full bg-gray-200 h-full object-cover opacity-0 rounded-md"
                alt=""
              />
            </figure>
          </div>

          <div
            id="imgs-container"
            className="flex flex-col gap-2 lg:gap-4 h-full w-[50%] "
          >
            <figure className="w-full h-[49%]">
              <img
                id="img-fausti"
                className="w-full border border-stone-500  h-full object-cover opacity-0 rounded-md"
                alt=""
              />
            </figure>
            <figure className=" w-full h-[49%]">
              <img
                id="img-fausti"
                src={imgFausti4}
                className="w-full h-full object-cover opacity-0 rounded-md"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
     
    </>
  );
};
export default Gallery;
/* style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px ",
            }}  */
