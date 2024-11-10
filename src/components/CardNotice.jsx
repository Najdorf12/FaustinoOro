import imgFausti from "../assets/img6.jpg";
import { Link } from "react-router-dom";

const CardNotice = ({ news }) => {
  return (
    <Link to={"/news/id"}>
      <div id="box-glass" className="w-[300px]  border border-lightbrown border-r-transparent rounded-2xl rounded-br-[21px] hover:scale-105 duration-500">
    <div className="font-title3 absolute top-1 -right-12 text-zinc-700 text-7xl">
      0{news?.date}
    </div>
        <article  
          className=" pt-3 text-balance rounded-b-2xl flex flex-col "
        >
          <h6 className="text-white font-text2 text-start px-3 text-lg  leading-6 py-[3px] ">
            {news?.title}
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-lightbrown mt-2"></div>
          <p className="mt-2 text-stone-400 font-title font-normal text-base px-3 leading-5 ">
            {news?.subtitletitle}
          </p>
          <p className="mt-2 text-stone-500 font-title font-normal text-sm px-3 leading-5 ">
          {news?.content}
          </p>

          <button className="self-end rounded-full h-[35px] w-[35px] mt-2 flex justify-center items-center border border-white bg-white">
            <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNotice;
