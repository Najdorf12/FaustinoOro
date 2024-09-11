import imgFausti from "../assets/img6.jpg";
import { Link } from "react-router-dom";

const CardNotice = () => {
  return (
    <div className="w-full max-w-[280px] border border-lightbrown rounded-2xl">
      <picture className="w-full">
        <img className="w-full rounded-t-2xl" src={imgFausti} alt="" />
      </picture>
      <article
        id="news-box"
        className=" pt-3  text-balance rounded-b-2xl flex flex-col"
      >
        <h6 className="text-stone-300 font-text2 text-center text-lg  leading-6 ">
          FAUSTINO CONSIGUE OTRO HITO HISTORICO
        </h6>
        <div className="w-[95%] h-[1px] self-center bg-stone-600 mt-2"></div>
        <p className="mt-2 text-lightbrown font-title font-normal text-base px-3 leading-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="mt-2 text-stone-500 font-title font-normal text-sm px-3 leading-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste
          reprehenderit commodi a nihil.
        </p>
        <Link to={"/news/id"}>
          <button className="self-end rounded-full h-[40px] w-[40px] mt-2 flex justify-center items-center border border-white bg-stone-600">
            <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
          </button>
        </Link>
      </article>
    </div>
  );
};
export default CardNotice;
