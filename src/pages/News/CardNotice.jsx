import { Link } from "react-router-dom";

const CardNotice = ({ news, index }) => {
  const truncateText = (text, wordLimit) => text.split(" ").slice(0 , wordLimit).join(" ")

  return (
    <Link to={`/news/${news?._id}`}>
      <div
        id="box-glass"
        className="card2 group w-[370px] pb-1 pr-1 border border-[#4b718a] border-r-transparent rounded-2xl rounded-br-[21px] min-h-[240px] hover:scale-105 duration-500 lg:min-h-[240px] lg:w-[430px] xl:w-[480px]  2xl:min-h-[250px] xl:pl-1 2xl:w-[525px]"
      >
        <div className="font-title3 absolute top-[6px] -right-6 text-zinc-700 text-7xl lg:-right-10  group-hover:text-white duration-500 2xl:text-[4.7rem]">
          {`0${index + 1}`}
        </div>
        <article className="pt-3 text-balance  rounded-b-2xl flex flex-col ">
          <h6 className="text-whiteCustom font-title w-full text-start px-3 max-w-[80%] text-lg min-h-14   leading-5 py-[3px] lg:min-h-16 lg:pr-9  lg:text-xl xl:max-w-[300px] xl:leading-6 2xl:text-[1.3rem] 2xl:pr-2  ">
         { truncateText(news?.title, 7).toUpperCase()}
          </h6>
          <span className="w-[95%] h-[1px] self-center bg-zinc-700 mt-2 "></span>
          <p className="mt-3 text-zinc-400 text-balance font-text2 font-normal text-base px-3 leading-5 lg:text-lg lg:leading-5 lg:pr-5 xl:mt-3 2xl:text-[1.2rem] ">
          {truncateText(news?.description, 24)}
          </p>
          <p className="mt-3 text-zinc-500 text-balance  font-text2 font-normal text-base pl-3 pr-9 leading-5 lg:mt-3 2xl:text-[1.1rem]  ">
            {truncateText(news?.content, 21) + " ..."}
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
