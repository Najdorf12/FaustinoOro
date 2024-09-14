import icon from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import ContactForm from "../components/ContactForm";
import Games from "./Games";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    const screen = window.screen.width;

    new ScrollTrigger({});
    tl.to("#line-contact", {
      width: screen > 1200 ? "60%" : "90%",
      duration: 2,
      scrollTrigger: {
        trigger: "#contact_section",
        start: "20% bottom",
        end: "top top",
        scrub: true,
      },
    })
      .to("#line-games", {
        width: "90%",
        duration: 2,
        scrollTrigger: {
          trigger: "#contact2_section",
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
      <div className="w-full z-50 lg:z-20 h-[10dvh] lg:h-[20dvh] bg-gray-300 lg:bg-zinc-900  relative">
        <div className="absolute h-full w-full  z-50"></div>
      </div>
     

      <section className="">
        <Games />
      </section>

      <section
        id="box-container"
        className="w-full h-auto z-50 flex pl-[120px]"
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

      <section id="contact_section2" className="w-full h-auto  bg-zinc-800 flex flex-col  gap-3 pt-12 xl:pt-[6%]">
        <article className="z-50 flex flex-col items-center  xl:w-[50%]">
          <h3 className="self-center  font-title text-5xl text-lightbrown font-semibold  lg:text-6xl  2xl:text-7xl px-12 xl:px-14 2xl:px-16 py-3 border-[1px]  border-lightbrown rounded-xl z-50">
            CONTACT
          </h3>
          {/* <div className="self-center w-[60%] md:w-[45%] xl:w-[60%] 2xl:w-[45%]  h-[2px] bg-amber-600 mt-4 lg:mt-5 2xl:mt-6"></div> */}
          <p className="text-stone-400 text-center  max-w-[400px] font-text2 text-xl leading-5 mt-6  lg:mt-6 xl:mt-7 2xl:mt-8 xl:text-xl xl:max-w-[430px] 2xl:max-w-[500px] 2xl:text-2xl z-50">
            Open to new opportunities and collaborations. Let`s talk.
          </p>
          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 xl:w-[50%] xl:mt-5 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center text-stone-400 text-4xl xl:text-5xl xl:gap-12  ">
            <li className="hover:scale-110 hover:text-amber-600 duration-500 cursor-pointer z-50">
              <i className="bx bxl-youtube"></i>
            </li>
            <li className="hover:scale-110 hover:text-amber-600 duration-500 cursor-pointer z-50">
              <i className="bx bxl-facebook-circle"></i>
            </li>
            <li className="hover:scale-110 hover:text-amber-600 duration-500 cursor-pointer z-50">
              <i className="bx bxl-instagram-alt"></i>
            </li>
            <li className="hover:scale-110 hover:text-amber-600 duration-500 cursor-pointer z-50">
              {" "}
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </footer>
        <span className="flex justify-center items-center bg-lightbrown w-[50%] xl:w-[25%] place-self-center  h-[1.5px] mt-8  md:mt-12 z-50 2xl:mt-14"></span>
        <div className="flex justify-center items-center gap-2 mb-1 font-title text-sm 2xl:text-base text-stone-500 z-50  -mt-2 xl:-mt-2">
          <i className="bx bx-copyright text-xl"></i>
          <span>Faustino Oro {/* official website */}</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
