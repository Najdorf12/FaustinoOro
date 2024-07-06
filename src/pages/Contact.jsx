import icon from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import ContactForm from "../components/ContactForm";
import Boxes from "../components/Boxes";

const Contact = () => {
  const palmares = [
    {
      tournament: "Lorem Impsum dolor sit amet 2024.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2023.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2023.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2022.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2021.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2022.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2021.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2022.",
    },
    {
      tournament: "Lorem Impsum dolor sit amet 2021.",
    },
  ];
  return (
    <>
      <div className="w-full h-[10dvh] lg:h-[20dvh] bg-gray-300 lg:bg-zinc-900"></div>

      <section
        id="contact_section"
        className="w-full h-[70dvh] xl:h-screen bg-gray-300  pl-[5%] flex flex-col gap-16 2xl:gap-40 overflow-y-visible"
      >
        <h6 className="relative text-[5rem] md:text-[5.5rem] text-stone-600 font-title font-semibold 2xl:text-[9rem] ">
          LOREM
          <div className="w-[80%] md:w-[60%] h-[1.5px] absolute bottom-0 bg-white "></div>
        </h6>

        <p className=" max-w-[500px]   pr-16 lg:pr-0 text-sm  md:text-base text-gray-700 2xl:text-lg font-title xl:mt-8 2xl:mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          cumque a cupiditate earum obcaecati est, eum ducimus incidunt officia
          sequi voluptas nemo repellendus et nulla facere recusandae labore
          ipsam repellat. Atque magnam provident sequi, ad accusamus voluptate
          quibusdam quia, iste repellendus vel iure velit quo quisquam. .
        </p>
      </section>

      <section
        id="contact2_section"
        className="relative w-full h-[80dvh] bg-gray-300 pl-[5%] sm:pl-[8%]  lg:pl-[10%] xl:pl-[12%] 2xl:pl-[15%] "
      >
        <article className="z-50  flex flex-col md:flex-row justify-start gap-0  font-text2 text-[1rem] font-normal  text-stone-700 pr-[3%] md:gap-3 lg:gap-20 xl:text-[1.1rem]   ">
          <div id="glass-box" className="flex flex-col gap-2 pt-4 pb-4 pr-4 max-w-max lg:gap-3  relative z-50 mt-2 sm:pr-8 sm:pl-4 lg:pl-0 2xl:pt-5 2xl:pr-10 2xl:pb-5 lg:mt-10 xl:mt-16 2xl:mt-4 ">

            {palmares.map((tournament, i) => (
              <>
                <div
                  key={i}
                  className="flex items-center justify-start gap-2 pl-4 lg:pl-6  2xl:pl-8 "
                >
                  <figure className="max-w-6 2xl:max-w-8">
                    <img src={icon} alt="" className="w-full" />
                  </figure>
                  <p>{tournament.tournament}</p>
                </div>
              </>
            ))}
          </div>
          <div id="glass-box" className="flex flex-col gap-2 max-w-max lg:gap-3 relative z-50  mt-2 pt-4 pb-4 pr-4 sm:pr-8 sm:pl-4 lg:pl-0 lg:mt-10 xl:mt-16  2xl:mt-4  2xl:pt-5 2xl:pr-10 2xl:pb-5">

            {palmares.map((tournament, i) => (
              <>
                <div
                  key={i}
                  className="flex items-center justify-start gap-2 pl-4 lg:pl-6 2xl:pl-8 z-50"
                >
                  <figure className="max-w-6 2xl:max-w-8 ">
                    <img src={icon} alt="" className="w-full" />
                  </figure>
                  <p>{tournament.tournament}</p>
                </div>
              </>
            ))}
          </div>
          <Boxes />
        </article>
      </section>

      <section className="w-full h-auto bg-zinc-900 flex flex-col gap-3 pt-[6%] md:pt-[4%]">
        <article className="pl-[5%] md:pl-[3%] lg:pl-[6%]">
          <h3 className="font-title text-5xl text-white  font-semibold lg:text-6xl 2xl:text-8xl">
            CONTACT
          </h3>
          <div className="w-[30%] h-[2px] bg-amber-600 mt-3 lg:mt-4 2xl:mt-4"></div>
          <p className="text-stone-400 font-text2 text-lg leading-5 mt-6 lg:mt-6 pr-3 xl:text-xl 2xl:text-2xl">
            Open to new opportunities and collaborations. Let`s talk.
          </p>
          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 xl:mt-8 2xl:mt-10">
          <ul className="flex gap-8 justify-center items-center sm:pl-[20%] md:pl-[12%] lg:pl-[10%] xl:pl-[11%]  sm:justify-start text-stone-500 text-4xl 2xl:text-5xl 2xl:pl-[8%] 2xl:gap-12">
            <li>
              <i className="bx bxl-youtube"></i>
            </li>
            <li>
              <i className="bx bxl-facebook-circle"></i>
            </li>
            <li>
              <i className="bx bxl-instagram-alt"></i>
            </li>
            <li>
              {" "}
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </footer>
        <span className="flex justify-center items-center w-[50%] 2xl:w-[30%] place-self-center  h-[1.5px] mt-8 bg-stone-700 md:mt-16 z-50 "></span>
        <div className="flex justify-center items-center gap-2 mb-2 font-text2 text-sm 2xl:text-base text-amber-600 z-50 ">
          <i className="bx bx-copyright text-xl"></i>
          <span>Faustino Oro {/* official website */}</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
