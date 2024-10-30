import imgFausti from "../assets/img6.jpg";
import { Link } from "react-router-dom";

const CardNoticeHome = () => {
  return (
    <Link to={"/news/id"}>
      <div className="w-[180px] border-[2px] border-zinc-500 hover:scale-105 duration-500 z-50 bg-gradient-to-tr rounded-2xl ">
        <figure>
          <img className="w-full rounded-t-2xl object-cover" src={imgFausti} alt="" />
        </figure>
        <article className="pt-3 text-balance rounded-b-2xl flex flex-col bg-gradient-to-tr from-zinc-600 via-bluefausti to-zinc-800 ">
          <h6 className="text-white font-text2 text-center text-base leading-5 ">
            FAUSTINO CONSIGUE OTRO HITO HISTORICO
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-zinc-500 mt-2"></div>
          <p className="mt-2 text-stone-400 font-title font-normal text-sm px-3 leading-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="self-end rounded-full h-[35px] w-[35px] mt-1 flex justify-center items-center border-[2px] border-zinc-500 bg-zinc-100">
            <i class="bx bx-arrow-back rotate-[145deg]  text-bluefausti  text-2xl"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNoticeHome;
