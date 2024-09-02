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

    tl.to("#img-fausti", {
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
    }).to("#img-fausti2", {
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
       /*  style={{backgroundImage: "linear-gradient(to right bottom, #050505, #121212, #1b1a1b, #242223, #2e2a2b, #392c2e, #442e30, #4f3030, #5c2b2c, #692527, #751d21, #80101a)" }}  */
        className="pt-5 bg-gray-300  w-full h-[80dvh] md:h-screen  font-title relative flex items-start overflow-hidden  2xl:pt-0 2xl:justify-start"
      >
        <article className="h-full relative pt-2 pl-3 sm:px-2  gap-3 z-40 sm:max-w-[600px] md:max-w-[85%]  md:ml-[3%] lg:ml-[7%] xl:pt-6 xl:max-w-[60%] 2xl:pt-0 2xl:ml-[9%] 2xl:max-w-[1100px] 2xl:mt-12  ">
          <h3 className="split mt-1 font-title text-white font-bold text-[3.50rem] leading-[1] sm:text-[3.6rem]  md:text-[5rem]  xl:text-[13dvh] z-50 ">
            EL ÉXITO OCURRE CUANDO <br className="lg:hidden" /> TUS SUEÑOS
            <div
              style={{
                WebkitTextStroke: "2px #80101a",
              }}
              className="text-[#80101a] "
            >
              SON MAS GRANDES QUE TUS EXCUSAS
            </div>
          </h3>
        </article>
      </section>

      <section
        id="four_section"
       /*  style={{backgroundImage: "linear-gradient(to right top, #050505, #121212, #1b1a1b, #242223, #2e2a2b, #392c2e, #442e30, #4f3030, #5c2b2c, #692527, #751d21, #80101a)"}} */
        className="w-full bg-gray-300 h-[90dvh] lg:h-screen z-50 2xl:z-10 overflow-y-visible relative px-2 md:pl-6 xl:pl-[4%]"
      >
        <div className="flex justify-center overflow-y-visible items-center gap-2 lg:gap-4 w-full h-[75%] max-h-screen md:w-[80%] lg:w-[70%] xl:w-[55%] ">
          <div
            id="imgs-container"
            className="flex flex-col gap-2 lg:gap-4 w-[50%] h-full z-50 "
          >
            <figure className="w-full h-[60%]">
              <img
                id="img-fausti"
                src={imgFausti2}
                className="w-full h-full object-cover opacity-0 rounded-md"
                alt=""
              />
            </figure>
            <figure className="w-full h-[50%]">
              <img
                id="img-fausti"
                className="w-full bg-gray-200 h-full object-cover opacity-0 rounded-md"
                alt=""
              />
            </figure>
          </div>

          <div
            id="imgs-container"
            className="flex flex-col gap-2 lg:gap-4 h-full w-[50%] z-50"
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
