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
  
  useLayoutEffect(()=>{

  },[])
  
  return (
    <>
      <div className="w-full h-[10dvh] lg:h-[20dvh] bg-gray-300 lg:bg-zinc-900"></div>

      <section
        id="contact_section"
        className="w-full h-[70dvh] xl:h-screen bg-gray-300  pl-[5%] flex flex-col gap-16 2xl:gap-40 overflow-y-visible"
      >
        <h6 className="relative text-[5rem] md:text-[5.5rem] text-stone-600 font-title font-semibold 2xl:text-[9rem] ">
          LOREM
          <div className="w-[80%] md:w-[60%] h-[1.5px] absolute bottom-0 bg-white "></div>
        </h6>

        <p className=" max-w-[500px]   pr-16 lg:pr-0 text-sm  md:text-base text-gray-700 2xl:text-lg font-title xl:mt-8 2xl:mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          cumque a cupiditate earum obcaecati est, eum ducimus incidunt officia
          sequi voluptas nemo repellendus et nulla facere recusandae labore
          ipsam repellat. Atque magnam provident sequi, ad accusamus voluptate
          quibusdam quia, iste repellendus vel iure velit quo quisquam. .
        </p>
      </section>

      <section
        id="contact2_section"
        className=""
      >
        <Games />
      </section>

      <section className="w-full h-auto bg-zinc-900 flex flex-col  gap-3 pt-[6%] md:pt-[4%]">
        <article className="z-50 flex flex-col items-center">
          <h3 className="self-start ml-4 lg:ml-6  font-title text-5xl text-white  font-semibold lg:text-6xl 2xl:text-7xl">
            CONTACT
          </h3>
          <div className="self-start w-[80%] xl:w-[50%] h-[2px] bg-amber-600 mt-4 lg:mt-5 2xl:mt-6"></div>
          <p className="text-stone-400 font-text2 text-xl leading-5 mt-6 md:self-start lg:mt-6 2xl:mt-8 pr-3 xl:text-xl 2xl:text-2xl pl-[5%] lg:ml-[1%]">
            Open to new opportunities and collaborations. Let`s talk.
          </p>
          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 xl:mt-4 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center sm:justify-start text-stone-500 text-4xl 2xl:text-5xl pl-[5%] lg:ml-[3.8%] 2xl:gap-12 ">
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
        <span className="flex justify-center items-center w-[50%] 2xl:w-[30%] place-self-center  h-[1.5px] mt-8 bg-stone-700 md:mt-12 z-50 "></span>
        <div className="flex justify-center items-center gap-2 mb-2 font-title text-sm 2xl:text-base text-amber-600 z-50 2xl:-mt-3">
          <i className="bx bx-copyright text-xl"></i>
          <span>Faustino Oro {/* official website */}</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
