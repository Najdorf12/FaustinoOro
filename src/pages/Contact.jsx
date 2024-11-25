/* import icon from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png"; */
import ContactForm from "../components/ContactForm";
import Games from "./Games";
/* import Ritmos from "./Ritmos"; */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    const screen = window.screen.width;

    new ScrollTrigger({});
    tl.to("#line-games", {
        width: "90%",
        duration: 2,
        scrollTrigger: {
          trigger: "#games_section",
          start: "20% bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to("#box-black", {
        x: "-120px",
        rotate: "180deg",
        duration: 4,
        stagger: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#box-black",
          start: screen > 1500 ? "100% bottom" : "330% bottom",
          end: screen > 1500 ? "top 10%" : "330% top",
          scrub: true,
        },
      });
  }, []);

  return (
    <>
      <section id="games_section" className="">
        <Games />
      </section>
      {/* <Ritmos /> */}
      <section
        id="box-container"
        className="w-full h-auto z-50 flex pl-[120px] mt-6"
      >
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] border-[1px] border-white "
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] bg-white"></div>
          <div
            id="box-black"
            className="w-[120px] h-[120px] border-white border-[1px]"
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] bg-white"></div>
        </div>
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] border-[1px] border-white "
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] bg-white"></div>
          <div
            id="box-black"
            className="w-[120px] h-[120px] border-white border-[1px]"
          ></div>
        </div>
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] border-[1px] border-white "
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] bg-white"></div>
        </div>
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] border-[1px] border-white "
          ></div>
        </div>
      </section>

      <section id="contact_section" className="w-full h-auto  bg-zinc-800 flex flex-col  gap-3 pt-16 xl:pt-[6%]">
        <article className="z-50 flex flex-col items-center  lg:w-[50%]">
          <h3 className="self-center  font-title text-5xl text-whiteCustom font-semibold  lg:text-6xl  2xl:text-7xl px-12 xl:px-14 2xl:px-16 py-3 border-[1px]  border-zinc-500 rounded-xl z-50">
            CONTACTO
          </h3>
          <p className="text-zinc-500 text-center text-balance  max-w-[410px] font-text2 text-xl leading-5 mt-6  lg:mt-6 xl:mt-7 2xl:mt-8 xl:text-xl xl:max-w-[500px] 2xl:max-w-[550px] 2xl:text-2xl z-50">
          Ideas, estrategias y nuevos proyectos. <br />
            <span className="text-sky-600 ml-1">
               Hablemos y movamos las piezas juntos.
            </span>
          </p>
          
          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 lg:w-[50%] xl:mt-5 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center text-whiteCustom text-4xl xl:text-5xl xl:gap-12  ">
            <li className="hover:scale-110 hover:text-whiteCustom duration-500 cursor-pointer z-50">
              <i className="bx bxl-youtube"></i>
            </li>
            <li className="hover:scale-110 hover:text-whiteCustom duration-500 cursor-pointer z-50">
              <i className="bx bxl-facebook-circle"></i>
            </li>
            <li className="hover:scale-110 hover:text-whiteCustom duration-500 cursor-pointer z-50">
              <i className="bx bxl-instagram-alt"></i>
            </li>
            <li className="hover:scale-110 hover:text-whiteCustom duration-500 cursor-pointer z-50">
              {" "}
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </footer>
        
        <div className="flex justify-center items-center gap-2 mb-1 font-title text-sm 2xl:text-base text-stone-500 z-50  mt-12 lg:mt-9">
          <i className="bx bx-copyright text-lg"></i>
          <span>Faustino Oro </span>
        </div>
      </section>
    </>
  );
};

export default Contact;
