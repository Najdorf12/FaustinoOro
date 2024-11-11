import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import imgFausti from "../../assets/img12.jpg";
import imgBg from "/bg/bg3.jpg";

const NewsDetail = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-zinc-800 flex flex-col overflow-hidden">
        <nav className="w-full absolute top-0 z-[100] flex justify-start items-center  ">
          <Link to={"/news"} className="font-title ">
            <button className="text-white border-b text-base font-normal border-lightbrown bg-zinc-800 rounded-br-xl px-12 py-2 z-50 xl:text-xl xl:px-14 2xl:px-16 2xl:text-2xl">
              Volver
            </button>
          </Link>
        </nav>

        <div className="w-[95%] h-[30vh] mt-20 self-center md:h-[450px] md:max-w-[900px] md:self-end md:mr-[3%] 2xl:max-w-[1100px] 2xl:h-[530px]">
          <figure className="w-full h-full">
            <img
              src={imgFausti}
              alt="img-new_fausti"
              className="w-full h-full object-cover object-center rounded-xl border border-stone-500"
            />
          </figure>
          {/* <div className="pattern2"></div> */}
        </div>

        <article
          id=""
          className="text-balance  font-normal self-center relative flex flex-col justify-center items-center gap-3 w-[90%]  max-w-[650px] mt-6 text-start md:self-start md:gap-5 md:pl-[5%] xl:max-w-[750px] xl:mt-9 2xl:mt-16 2xl:max-w-[900px]"
        >
          <h6 className="text-white  relative font-title4 font-medium z-50 text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl self-start">
            Faustino consigue otro hito histórico
            <div className="w-[90%] h-[1.5px] absolute left-0 -bottom-3 bg-white z-50 xl:-bottom-6"></div>
          </h6>
          <p className="font-text2 text-lg  leading-5 mt-4 text-stone-300 md:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
            consequatur nobis fuga aut reprehenderit ratione.
          </p>

          <p className="font-title mt-2 text-sm md:text-base text-stone-400  z-50 2xl:text-lg ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            asperiores ut magni, porro possimus temporibus debitis tempore ex
            expedita provident corrupti rerum minus minima quaerat ducimus. Eos
            itaque exercitationem dolorum. Soluta voluptas alias eos vel, et
            sapiente beatae quidem, perspiciatis porro, quam id sequi. Illum
            corrupti omnis tempore quas repellat corporis, inventore magni ipsam
            deserunt eligendi aperiam numquam neque temporibus! Officiis atque
            quo reprehenderit enim doloribus. Fuga amet incidunt blanditiis
            cupiditate, possimus minima optio molestias at maxime error
            doloremque officia ipsa obcaecati expedita perferendis tempore. Esse
            fugiat error laudantium natus!
          </p>
        </article>
        <div className="w-full h-[20vh] mt-14 md:h-[50vh] xl:mt-16">
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
