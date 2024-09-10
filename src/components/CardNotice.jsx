import imgFausti from "../assets/img6.jpg";
const CardNotice = () => {
  return (
    <div className="w-full max-w-[280px] border border-lightbrown rounded-2xl">
      <picture className="w-full">
        <img className="w-full rounded-t-2xl" src={imgFausti} alt="" />
      </picture>
      <article id="news-box" className=" pt-3  text-balance rounded-b-2xl flex flex-col">
        <h6 className="text-white font-title text-center font-medium text-xl  leading-6 ">
          FAUSTINO CONSIGUE OTRO HITO HISTORICO
        </h6>
        <div className="w-[95%] h-[1px] self-center bg-stone-600 mt-2"></div>
        <p className="mt-3 text-lightbrown font-title font-normal text-lg px-3 leading-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="mt-3 text-stone-500 font-title font-normal text-sm px-3 leading-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste
          reprehenderit commodi a nihil. 
        </p>

        <button className="self-end rounded-full h-[40px] w-[40px] mt-3 flex justify-center items-center border border-white bg-stone-600">
          <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
        </button>
      </article>
    </div>
  );
};
export default CardNotice;
