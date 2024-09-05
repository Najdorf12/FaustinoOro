import imgFausti2 from "../assets/fausti2.jpg";
import imgFausti3 from "../assets/fausti3.jpg";
import imgFausti4 from "../assets/fausti4.jpg";
import imgFausti6 from "../assets/img6.jpg";
import imgFausti7 from "../assets/img16.jpg";
import imgFausti8 from "../assets/img18.jpg";
import imgFausti9 from "../assets/img17.jpg";
import imgFausti20 from "../assets/fausti20.jpeg"

import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  /*  const tl = gsap.timeline();

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
  }, []); */

  return (
    <>
      <section
        id="third_section"
        /*  style={{backgroundImage: "linear-gradient(to left, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)" }} */

        className="pt-16 w-full h-[85vh] md:h-screen  font-title relative flex items-start overflow-hidden xl:pt-6  2xl:pt-0 2xl:justify-start"
      >
        <article className="h-full relative pt-2 pl-3 sm:px-2  gap-3 z-40 sm:max-w-[600px] md:max-w-[85%] sm:pl-6  md:ml-[3%] lg:ml-[7%] xl:max-w-[60%] 2xl:pt-0 2xl:ml-[9%] 2xl:max-w-[1100px] 2xl:mt-20  text-balance">
          <h3 className="mt-1 font-title text-balance  max-w-[380px] text-white font-bold text-[7vh] leading-[1] z-50 lg:text-[12vh] lg:max-w-[780px]  2xl:max-w-[950px]">
            EL ÉXITO OCURRE CUANDO {/* <br className="hidden lg:flex" /> */}
            <span className="text-darkred">
              TUS SUEÑOS SON MAS GRANDES{" "}
            </span>{" "}
            QUE TUS EXCUSAS.
          </h3>
        </article>
      </section>

      <section
        id="four_section" 
        /* style={{backgroundImage: "linear-gradient(to left, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)" }}  */  
       /*  style={{
          backgroundImage:
            "linear-gradient(to left, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",
        }} */
        className="w-full flex justify-center items-center   h-[90dvh] lg:justify-start lg:pl-[5%] lg:h-screen z-50 md:z-10 overflow-y-visible relative px-1"
      >
        <div className="grid grid-cols-6 grid-rows-8 gap-1 w-full h-[90%] lg:gap-2 lg:max-w-[70%]">
          <div className="col-span-2 row-span-3 ">
            <picture className=" ">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-lightbrown"
                src={imgFausti3}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-2 row-span-3 col-start-3 ">
            <picture className="">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-lightbrown"
                src={imgFausti9}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-2 row-span-6 col-start-5 ">
            <picture className="">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-lightbrown "
                src={imgFausti4}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-4 row-span-3 row-start-4  ">
            <picture className="">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-lightbrown"
                src={imgFausti2}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-6 row-span-2 row-start-7">
            <picture className=" ">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-lightbrown"
                src={imgFausti6}
                alt=""
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
