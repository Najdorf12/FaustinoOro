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
      stagger: 0.2,
      ease: "back.out",
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".split",
        start: "30% 100%",
        end: "10% 20%",
        scrub: 1,
      },
    })  
    /* .from(".img-fausti", {
      yPercent: 80,
      stagger: 0.2,
      duration: 2,
      scrollTrigger: {
        trigger: "#imgs-container",
        start: "30% 100%",
        end: "10% 20%",
        scrub: 1,
        markers:true
      },
    }) */
  }, []);
 
  return (
    <>
      <section
        id="third_section"
        className="pt-5 pl-2 w-full h-screen bg-zinc-900  font-title relative flex items-start overflow-hidden "
      >
        <article className="relative pt-2 px-3  gap-3 z-50 sm:max-w-[500px] lg:max-w-[700px]   lg:ml-16 xl:ml-32 2xl:mt-24 2xl:max-w-[950px]">
          <h3 className="split mt-1 font-title text-white font-bold text-5xl md:text-6xl z-50 lg:text-7xl xl:text-[5rem] 2xl:text-[6.2rem] ">
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
        className="w-full h-screen bg-zinc-900 overflow-hidden px-1 sm:px-4 md:px-6"
      >
        
         
      </section>
    </>
  );
};
export default Gallery;
/* style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px ",
            }}  */
/*     <article className="relative pt-2 px-3 flex flex-col gap-3 z-50 sm:max-w-[500px] lg:max-w-[670px]  lg:ml-16 xl:ml-32 2xl:max-w-[900px]">
              <h3 className="absolute font-title font-bold text-5xl md:text-6xl z-50 lg:text-6xl 2xl:text-[6.2rem] text-rose-600">
                LOREM IPSUM DOLOR SIT AMET CONSECT{" "}
                <span className="text-amber-600"> DOLOR SIT AMET.</span>
              </h3>
              <h3 className="absolute mt-1 font-title font-bold text-5xl md:text-6xl z-50 lg:text-6xl 2xl:text-[6.2rem] ">
                LOREM IPSUM DOLOR SIT AMET CONSECT{" "}
                <span className="text-teal-800"> DOLOR SIT AMET.</span>
              </h3>
            </article> 
            
               <h3
            id="text-area-hover"
            className="absolute font-bold text-[13dvw] leading-[3.5rem] md:leading-[5.5rem] lg:text-[10vw] lg:leading[6.5rem]   xl:left-32 text-white w-[10%]  overflow-hidden whitespace-nowrap  bg-red-500 "
          >
            LOREM IPSUM <br className="2xl:hidden"/> DOLOR <br className="lg:hidden"/> SIT <br className="2xl:hidden" />
            AMET DOLOR <br />
            SIT
            <span className="text-amber-600">
              {" "}
              DOLOR <br className="2xl:hidden"/> SIT AMET.
            </span>
          </h3>*/
         
{/* 
   <div className="z-10 grid grid-cols-5 grid-rows-4 gap-1  h-screen  sm:max-w-[700px]  md:gap-2 lg:gap-4 lg:h-[100%] lg:max-w-[700px] xl:max-w-[750px] 2xl:h-[90%] 2xl:max-w-[55%] xl:ml-12  2xl:ml-10 ">
  <div id="imgs-container" className="relative col-span-3  row-span-3 ">
            <img
              loading="lazy"
              className="img-fausti w-full h-full rounded-lg object-cover opacity-70 "
              src={imgFausti4}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4">
            <img
              loading="lazy"
              className="img-fausti w-full h-full rounded-lg object-cover opacity-70"
              src={imgFausti2}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-3">
            <img
              loading="lazy"
              className="img-fausti w-full h-full rounded-lg object-cover opacity-70"
              src={imgFausti9}
              alt=""
            />
          </div>
          <div className="col-span-3 row-start-4  flex justify-center items-center">
            <p className="font-title3  pl-2 sm:pl-4 text-4xl font-semibold  2xl:text-6xl text-stone-700">
              LOREM IMPSUM
            </p>
          </div>
          <div className="col-span-2 row-start-5">
            <img
              loading="lazy"
              className="img-fausti w-full h-full rounded-lg object-cover opacity-70"
              src={imgFausti6}
              alt=""
            />
          </div>
          <div className="col-span-3 col-start-3 row-start-5 ">
            <img
              loading="lazy"
              className="img-fausti w-full h-full rounded-lg object-cover opacity-70 z-10"
              src={imgFausti3}
              alt=""
            />
          </div>
        </div> */}