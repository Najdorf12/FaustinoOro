import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import imgFausti from "../../assets/img12.jpg";
import imgBg from "/bg/bg3.jpg";
import { useAdminData } from "../Admin/AdminDataContext";

const NewsDetail = () => {
  const [notice, setNotice] = useState(null); 
  const { id } = useParams();
  const { news } = useAdminData();

  useEffect(() => {
    if (news && id) {
      const foundNotice = news.find((n) => n._id === id);
      setNotice(foundNotice || null); 
    }
  }, [news, id]);

  return (
    <>
      <section className="relative w-full min-h-screen bg-zinc-800 flex flex-col overflow-hidden">
        <nav className="w-full absolute top-0 z-[100] flex justify-start items-center  ">
          <Link to={"/news"} className="font-title ">
            <button className="text-whiteCustom  text-base font-normal  bg-[#4b718a] rounded-br-xl px-12 py-2 z-50 lg:text-xl lg:px-14 2xl:px-16 2xl:text-2xl">
              Volver
            </button>
          </Link>
        </nav>

        <div className="w-[95%] h-[30vh] mt-20 self-center md:h-[450px] md:max-w-[900px] md:self-end md:mr-[3%] 2xl:max-w-[1100px] 2xl:h-[530px]">
          <figure className="w-full h-full">
            <img
              src={imgFausti}
              alt="img-new_fausti"
              className="w-full h-full object-cover object-center rounded-xl border border-zinc-600"
            />
          </figure>
        </div>

        <article
          id=""
          className="text-balance    font-normal self-center relative flex flex-col justify-center items-start gap-3 w-[90%]  max-w-[650px] mt-6 text-start md:self-start md:gap-5 md:pl-[5%] lg:max-w-[1000px] lg:mt-16 2xl:mt-16 2xl:max-w-[1200px]"
        >
          <h6 className="text-whiteCustom  relative font-text2 font-normal z-50 text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl self-start">
            {notice?.title}
            <div className="w-[90%] h-[1.5px] absolute left-0 -bottom-3 bg-[#4b718a] z-50 lg:-bottom-6"></div>
          </h6>
          <p className="font-text2  text-lg  leading-5 mt-4 text-zinc-400 md:text-xl lg:text-2xl lg:mt-6 2xl:text-3xl 2xl:mt-6">
            {notice?.description}
          </p>

          <p className="font-title mt-2 text-sm md:text-base text-zinc-500 z-50 lg:w-[80%] lg:text-lg 2xl:text-xl">
            {notice?.content}
          </p>
        </article>
        <div className="w-full h-[30vh] mt-14 md:h-[60vh] xl:mt-16">
          <figure className="w-full h-full">
            <img
              src={imgBg}
              alt="img-new_fausti"
              className="w-full h-full object-cover object-center rounded-xl border border-stone-500"
            />
          </figure>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
};

export default NewsDetail;
