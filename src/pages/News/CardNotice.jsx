import { Link } from "react-router-dom";

const CardNotice = ({ news, index }) => {
  
  const truncateText = (text, wordLimit) => text.split(" ").slice(0 , wordLimit).join(" ")


  return (
    <Link to={`/news/${news?._id}`}>
      <div
        id="box-glass"
        className="card2 group w-[350px] pb-1 pr-1 border border-[#4b718a] border-r-transparent rounded-2xl rounded-br-[21px] min-h-[260px] hover:scale-105 duration-500 lg:min-h-[275px] lg:w-[430px] xl:w-[470px]  2xl:min-h-[290px] xl:pl-1 2xl:w-[560px]"
      >
        <div className="font-title3 absolute top-[6px] -right-12 text-zinc-700 text-7xl  group-hover:text-white duration-500 2xl:text-[5rem]">
          {`0${index + 1}`}
        </div>
        <article className="pt-3 text-balance  rounded-b-2xl flex flex-col">
          <h6 className="text-whiteCustom font-title w-full text-start px-3 max-w-[80%] text-lg min-h-14   leading-5 py-[3px] lg:min-h-20 lg:pr-9  lg:text-xl xl:max-w-[300px] xl:leading-6  ">
         { truncateText(news?.title, 7).toUpperCase()}
          </h6>
          <span className="w-[95%] h-[1px] self-center bg-zinc-700 mt-2 "></span>
          <p className="mt-3 text-zinc-400 text-balance font-text2 font-normal text-sm px-3 leading-5  xl:mt-3 lg:text-base   ">
          {truncateText(news?.description, 24)}
          </p>
          <p className="mt-1 text-zinc-500 text-balance  font-text2 font-normal text-sm px-3 leading-5 lg:mt-2 2xl:text-base  ">
            {truncateText(news?.content, 20) + " ..."}
          </p>
          <button className="self-end absolute bottom-1 rounded-full h-[37px] w-[37px]  flex justify-center items-center border border-white bg-white group-hover:bg-sky-700  ">
            <i className="bx bx-arrow-back rotate-[145deg]  text-sky-700  text-2xl group-hover:text-white"></i>
          </button>
        </article>
      </div>
    </Link>
  );
};
export default CardNotice;
