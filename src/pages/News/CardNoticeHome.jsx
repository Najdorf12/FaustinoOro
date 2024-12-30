import { Link } from "react-router-dom";

const CardNoticeHome = ({ news, index }) => {
  return (
    <Link to={"/news/id"}>
      <div
        id="box-glass"
        className="card2 z-50 group w-[330px] pb-1 pr-1 border border-[#4b718a] border-r-transparent rounded-2xl rounded-br-[21px] hover:scale-105 duration-500 xl:w-[380px] xl:pl-1"
      >
        <div className="font-title3 absolute top-0 -right-9 text-zinc-600 text-6xl  group-hover:text-white duration-400 xl:top-1">
          {`0${index + 1}`}
        </div>
        <article className="pt-3 text-balance rounded-b-2xl flex flex-col ">
          <h6 className="text-zinc-600 font-text2 text-start px-3 text-base  leading-[1rem] py-[3px]  xl:text-lg xl:leading-[1.3rem] max-w-[250px] ">
            {news?.title}
          </h6>
          <div className="w-[95%] h-[1px] self-center bg-[#4b718a] mt-2"></div>
          <p className="mt-2 text-zinc-500 font-title font-normal text-sm px-3 leading-5 xl:text-base ">
            {news?.description
              ? news?.description
              : "No hay descripción para esta noticia"}
          </p>

          <button className="self-end rounded-full h-[37px] w-[37px] mt-1 flex justify-center items-center border border-white bg-sky-700 group-hover:bg-white ">
            <i className="bx bx-arrow-back rotate-[145deg]  text-white  text-2xl group-hover:text-sky-600 duration-400"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNoticeHome;
