import { Link } from "react-router-dom";

const CardNotice = ({ news }) => {
  return (
    <Link to={"/news/id"}>
      <div
        id="box-glass"
        className="card2 group w-[350px] pb-1 pr-1 border border-lightbrown border-r-transparent rounded-2xl rounded-br-[21px] hover:scale-105 duration-500 xl:w-[400px] xl:pl-1"
      >
        <div className="font-title3 absolute top-1 -right-12 text-zinc-700 text-7xl  group-hover:text-white duration-500">
          0{news?.date}
        </div>
        <article className="pt-3 text-balance rounded-b-2xl flex flex-col  ">
          <h6 className="text-white font-text2 text-start px-3 text-lg  pr-12 leading-6 py-[3px]  xl:text-xl xl:max-w-[300px] ">
            {news?.title}
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-lightbrown mt-2 "></div>
          <p className="mt-3 text-stone-400 font-title font-normal text-sm px-3 leading-5  xl:mt-3 xl:text-base ">
            {news?.content}
          </p>

          <button className="self-end rounded-full h-[37px] w-[37px]  flex justify-center items-center border border-white bg-white group-hover:bg-lightbrown  xl:-mt-2">
            <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-2xl group-hover:text-white"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNotice;
