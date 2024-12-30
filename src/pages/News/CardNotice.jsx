import { Link } from "react-router-dom";

const CardNotice = ({ news, index }) => {
  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <Link to={"/news/id"}>
      <div
        id="box-glass"
        className="card2 group w-[350px] pb-1 pr-1 border border-[#4b718a] border-r-transparent rounded-2xl rounded-br-[21px] hover:scale-105 duration-500 lg:min-h-[240px] lg:w-[420px] xl:w-[460px]  2xl:min-h-[300px] xl:pl-1 2xl:w-[500px]"
      >
        <div className="font-title3 absolute top-[6px] -right-12 text-zinc-700 text-7xl  group-hover:text-white duration-500">
          {`0${index + 1}`}
        </div>
        <article className="pt-3 text-balance  rounded-b-2xl flex flex-col  ">
          <h6 className="text-whiteCustom font-title text-start px-3 text-lg min-h-14   leading-5 py-[3px] lg:pr-9  lg:text-xl xl:max-w-[300px] xl:leading-6 2xl:text-2xl ">
            {news?.title?.toUpperCase()}
          </h6>
          <span className="w-[95%] h-[1px] self-center bg-zinc-700 mt-2 "></span>
          <p className="mt-3 text-zinc-400 text-balance font-text2 font-normal text-sm px-3 leading-5  xl:mt-3 lg:text-base 2xl:text-lg 2xl:pr-6 ">
            {news?.description}
          </p>
          <p className="mt-1 text-zinc-500 text-balance  font-text2 font-normal text-sm px-3 leading-5 lg:mt-2 2xl:text-base  ">
            {truncateText(news?.content, 24)}
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
