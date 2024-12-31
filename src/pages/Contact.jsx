import ContactForm from "../components/ContactForm";
import Games from "./Games";
import {Link} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
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
    }).to("#box-black", {
      x: screen > 1000 ? "-130px" : "-120px",
      rotate: "180deg",
      duration: 4,
      stagger: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: "#box-black",
        start: screen > 1000 ? "200px bottom" : "430px bottom",
        end: screen > 1000 ? "200px -100px" : "430px -200px",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section id="games_section" className="">
        <Games />
      </section>
      <section
        id="box-container"
        className="w-full h-auto z-50 flex pl-[120px] mt-6"
      >
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] border-[1px] border-white "
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] bg-white"></div>
          <div
            id="box-black"
            className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] border-white border-[1px]"
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] bg-white"></div>
        </div>
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] border-[1px] border-white "
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] bg-white"></div>
          <div
            id="box-black"
            className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] border-white border-[1px]"
          ></div>
        </div>
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] border-[1px] border-white "
          ></div>
          <div id="box-black" className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] bg-white"></div>
        </div>
        <div className="self-end z-50 ">
          <div
            id="box-black"
            className="w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] border-[1px] border-white "
          ></div>
        </div>
      </section>

      <section
        id="contact_section"
        className="w-full h-auto  bg-zinc-800 flex flex-col  gap-3 pt-16 2xl:pt-20"
      >
        <article className="z-50 flex flex-col items-center  lg:w-[50%]">
          <h3 className="self-center  font-title text-5xl text-whiteCustom font-semibold  lg:text-6xl xl:text-7xl 2xl:text-8xl px-12 xl:px-14 py-3 border-[1px]  border-zinc-500 rounded-xl z-50">
            CONTACTO
          </h3>
          <p className="text-[#4b718a] text-center text-pretty px-2  max-w-[410px] font-text2 text-xl leading-5 mt-5  2xl:mt-6 xl:text-xl xl:max-w-[500px] 2xl:max-w-[550px] 2xl:text-2xl z-50">
          Faustino Oro quiere escucharte.
            <span className="text-zinc-600 mx-1">
            Ponte en contacto para invitarlo a eventos, colaboraciones o simplemente para alentarlo en su carrera.
            </span>
           
          </p>

          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 lg:w-[50%] xl:mt-5 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center text-whiteCustom text-4xl xl:text-5xl xl:gap-12  ">
            <Link to="https://www.youtube.com/@faustichess" target="_blank" >
              <li className="hover:scale-110 duration-500 cursor-pointer z-50 hover:text-[#4b718a]">
                <i className="bx bxl-youtube"></i>
              </li>
            </Link>
            <Link to="https://www.twitch.tv/faustichess" target="_blank" >
              <li className="hover:scale-110 duration-500 cursor-pointer z-50 hover:text-[#4b718a]">
                <i className="bx bxl-twitch"></i>
              </li>
            </Link>
            <Link to="https://www.instagram.com/faustioro/" target="_blank" >
              <li className="hover:scale-110 duration-500 cursor-pointer z-50 hover:text-[#4b718a]">
                <i className="bx bxl-instagram-alt"></i>
              </li>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100089778504647" target="_blank">
              <li className="hover:scale-110 duration-500 cursor-pointer z-50 hover:text-[#4b718a]">
              <i className='bx bxl-facebook-circle'></i>
              </li>
            </Link>{" "}
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
