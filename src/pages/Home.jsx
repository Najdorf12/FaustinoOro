import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import gsap from "gsap";
import { useLayoutEffect,useRef } from "react";

const Home = () => {
  const iconsList= useRef();
  
  useLayoutEffect(() => {
   
  
  }, []);

  return (
    <>
      <section className=" w-full h-screen bg-[#e8e8e8] flex justify-center items-center z-50 ">
        <div
          className="w-[100%] rounded-b-[20px] h-[100%] relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex justify-end items-center "
          id="home"
        >
          <article className="flex flex-col justify-center items-center gap-3 text-center mt-[100%] sm:px-6 md:mt-[70%] lg:mt-[50%] xl:mt-[27%] xl:mr-[2%]">
            <h1 className="font-text2 text-6xl leading-[3.5rem] font-bold text-gray-200 md:text-7xl xl:text-[7rem] 2xl:text-[9rem] bg-clip-text text-transparent bg-gradient-to-b from-stone-500 to-white">
              FAUSTINO ORO
            </h1>
            <p className=" font-text2 font-semibold text-2xl text-stone-600  md:text-3xl xl:text-4xl xl:-mt-3">
              LOREM IMPSUM
            </p>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute mt-1  top-0 right-0 left-0 flex justify-center items-center gap-3  font-text2 text-black py-1  lg:mt-3 lg:justify-end lg:pr-[3%] 2xl:pr-[4%]  2xl:gap-10 2xl:mt-5">
            <ul className="flex gap-10 sm:gap-14 md:text-lg 2xl:text-lg 2xl:gap-10 text-gray-400">
              <li className="border border-gray-500 px-3 rounded-xl py-[2.5px]  xl:px-7 ">
                Torneos
              </li>
              <li className="border border-gray-500 px-3 rounded-xl py-[2.5px] xl:px-7 ">
                Partidas
              </li>
              <li className="border border-gray-500 px-3 rounded-xl py-[2.5px] xl:px-7 ">
                Contacto
              </li>
            </ul>
          </span>

          <div ref={iconsList} className="bg-gray-300 absolute -bottom-1 -left-1  pt-[1px] w-[200px] h-[65px]  border-[3px] border-[#e8e8e8]  rounded-tr-[20px] rounded-bl-[20px] md:w-[250px]   flex justify-center items-center 2xl:justify-start">
           
            <figure className="icon ">
              <img className="w-[50px]" src={icon1} alt="" />
            </figure>
            <p className=" text-lg font-medium font-text2 text-gray-600 2xl:text-xl">LOREM IMPSUM</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
