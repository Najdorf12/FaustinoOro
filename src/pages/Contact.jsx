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
      <section
        id="contact_section"
        className="w-full relative h-[70dvh] xl:h-screen bg-gray-300 pl-[5%] flex flex-col gap-16 2xl:gap-40 overflow-y-visible"
      >
        <div className="w-full absolute z-50 h-full"></div>

        <h6 className="relative  text-[5rem] md:text-[5.5rem] text-stone-600 font-title font-semibold 2xl:text-[9rem] z-50">
          LOREM
          <div
            id="line-contact"
            className="w-[0%] h-[1.5px] absolute bottom-0 bg-white z-50"
          ></div>
        </h6>

        <p className=" max-w-[500px]   pr-16 lg:pr-0 text-sm  md:text-base text-gray-700 2xl:text-lg font-title xl:mt-8 2xl:mt-2 z-50 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          cumque a cupiditate earum obcaecati est, eum ducimus incidunt officia
          sequi voluptas nemo repellendus et nulla facere recusandae labore
          ipsam repellat. Atque magnam provident sequi, ad accusamus voluptate
          quibusdam quia, iste repellendus vel iure velit quo quisquam. .
        </p>
      </section>

      <section id="contact2_section" className="">
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

      <section className="w-full h-auto  bg-zinc-900 flex flex-col  gap-3 pt-12 xl:pt-[3%]">
        <article className="z-50 flex flex-col items-center  xl:w-[50%]">
          <h3 className="self-center  font-title text-5xl text-white  font-semibold  lg:text-6xl  2xl:text-7xl px-12 py-3 border-[1px]  border-amber-600 rounded-xl z-50">
            CONTACT
          </h3>
          {/* <div className="self-center w-[60%] md:w-[45%] xl:w-[60%] 2xl:w-[45%]  h-[2px] bg-amber-600 mt-4 lg:mt-5 2xl:mt-6"></div> */}
          <p className="text-stone-400 text-center  max-w-[400px] font-text2 text-xl leading-5 mt-6  lg:mt-6 xl:mt-5 2xl:mt-8 xl:text-xl 2xl:max-w-[500px] 2xl:text-2xl z-50">
            Open to new opportunities and collaborations. Let`s talk.
          </p>
          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 xl:w-[50%] xl:mt-4 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center text-stone-500 text-4xl 2xl:text-5xl   2xl:gap-12 ">
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
        <span className="flex justify-center items-center w-[50%] xl:w-[25%] place-self-center  h-[1.5px] mt-8 bg-stone-700 md:mt-12 z-50 "></span>
        <div className="flex justify-center items-center gap-2 mb-1 font-title text-sm 2xl:text-base text-amber-600 z-50 xl:mb-1 -mt-2 xl:-mt-3">
          <i className="bx bx-copyright text-xl"></i>
          <span>Faustino Oro {/* official website */}</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
