import { Link } from "react-router-dom";

const CardNotice = ({ news }) => {
  return (
    <Link to={"/news/id"}>
      <div
        id="box-glass"
        className="card2 group w-[350px] pb-1 pr-1 border border-sky-400 border-r-transparent rounded-2xl rounded-br-[21px] hover:scale-105 duration-500 xl:w-[400px] xl:pl-1 2xl:w-[450px]"
      >
        <div className="font-title3 absolute top-1 -right-12 text-zinc-700 text-7xl  group-hover:text-white duration-500">
          0{news?.date}
        </div>
        <article className="pt-3 text-balance rounded-b-2xl flex flex-col  ">
          <h6 className="text-white font-text2 text-start px-3 text-lg  pr-12 leading-6 py-[3px]  xl:text-xl xl:max-w-[300px] 2xl:text-2xl ">
            {news?.title}
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-sky-400 mt-2 "></div>
          <p className="mt-3 text-zinc-500 font-title font-normal text-sm px-3 leading-5  xl:mt-3 xl:text-base 2xl:text-lg 2xl:pr-6 ">
            {news?.content}
          </p>

          <button className="self-end rounded-full h-[37px] w-[37px]  flex justify-center items-center border border-white bg-white group-hover:bg-sky-700  xl:-mt-2">
            <i class="bx bx-arrow-back rotate-[145deg]  text-sky-700  text-2xl group-hover:text-white"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNotice;
