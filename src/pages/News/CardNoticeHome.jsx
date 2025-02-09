import { Link } from "react-router-dom";

const CardNoticeHome = ({ news, index }) => {

  return (
    <Link to={`/news/${news?._id}`}>
      <div
        id="box-glass"
        className="card2 z-50 group w-[340px] min-h-[185px] pb-[2px] pr-1 border border-[#4b718a] border-r-transparent rounded-2xl rounded-br-[21px] hover:scale-105 duration-500 lg:w-[405px] xl:pl-1 2xl:w-[410px]"
      >
        <div className="font-title3 absolute top-[2px] -right-9 text-zinc-600 text-6xl  group-hover:text-white duration-400 lg:top-[6px]">
          {`0${index + 1}`}
        </div>
        <article className="pt-3 text-balance rounded-b-2xl flex flex-col ">
          <h6 className="text-zinc-700 font-text2 text-start px-3 text-[1.16rem]  leading-[1.2rem] py-[3px] lg:pr-0 lg:leading-[1.3rem] max-w-[250px] 2xl:text-[1.23rem] ">
            {news?.title?.toUpperCase().split(" ").slice(0,7).join(" ")}
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-[#4b718a] mt-2"></div>
          <p className="mt-2 text-zinc-600 font-title font-normal  px-3 leading-5 text-base 2xl:mt-3 2xl:text-lg 2xl:leading-5 ">
            {news?.description?.split(" ").slice(0,14).join(" ")}
          </p>
          <p className="mt-1 text-zinc-500 font-title font-normal  px-3 leading-5 text-base lg:pr-9 2xl:mt-2">
            {news?.content?.split(" ").slice(0,12).join(" ") + " ..."}
          </p>
          
          <button className="self-end rounded-full h-[37px] w-[37px] absolute bottom-1 flex justify-center items-center border border-white bg-sky-700 group-hover:bg-white">
            <i className="bx bx-arrow-back rotate-[145deg]  text-white  text-2xl group-hover:text-sky-600 duration-400"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNoticeHome;
