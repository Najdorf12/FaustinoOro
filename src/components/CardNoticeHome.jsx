import imgFausti from "../assets/img6.jpg";
import { Link } from "react-router-dom";

const CardNoticeHome = () => {
  return (
    <Link to={"/news/id"}>
      <div className="w-[180px] border border-white hover:scale-105 duration-500 z-50 bg-gradient-to-tr rounded-2xl">
        <article className="pt-3 text-balance rounded-2xl flex flex-col bg-gradient-to-tr from-zinc-600 via-bluefausti to-zinc-800">
          <h6 className="text-white font-text2 text-center text-base leading-5 ">
            FAUSTINO CONSIGUE OTRO HITO HISTORICO
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-white mt-2"></div>
          <p className="mt-2 text-stone-400 font-title font-normal text-sm px-3 leading-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-2 text-stone-500 font-title font-normal text-sm px-3 leading-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste
            reprehenderit commodi a nihil.
          </p>

          <button className="self-end rounded-full h-[30px] w-[30px] mt-1 flex justify-center items-center border border-white bg-white">
            <i class="bx bx-arrow-back rotate-[145deg]  text-bluefausti  text-2xl"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNoticeHome;
