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
        <article className="z-50 flex flex-col md:flex-row justify-start gap-8  font-text2 text-[1rem] font-normal  text-stone-700 pr-[3%] lg:gap-20 xl:text-[1.2rem]  2xl:text-[1.2rem] ">
          <div className="flex flex-col gap-2 lg:gap-3  relative z-50 mt-5 lg:mt-10 xl:mt-16 2xl:mt-4">
            {/*    <div className="w-[2px] h-full absolute bg-white "></div> */}

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
          <div className="flex flex-col gap-2 lg:gap-3 relative  mt-5 lg:mt-10 xl:mt-16 z-50 2xl:mt-4">
            {/* <div className="w-[2px] h-full absolute bg-white"></div> */}

            {palmares.map((tournament, i) => (
              <>
                <div
                  key={i}
                  className="flex items-center justify-start gap-2 pl-4 lg:pl-6 2xl:pl-8 z-50"
                >
                  <figure className="max-w-6 2xl:max-w-8">
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

      <section className="w-full h-auto bg-gray-700 flex flex-col gap-3 pt-[6%]">
        <article className="pl-[5%] md:pl-[3%] lg:pl-[6%]">
          <h3 className="font-title text-4xl text-stone-700  font-semibold 2xl:text-6xl">
            Lorem Impsum
          </h3>
          <p className="text-gray-500 font-text2 text-lg leading-5 mt-6 lg:mt-3 2xl:mt-8 pr-3 xl:text-xl 2xl:text-2xl">
            Open to new opportunities and collaborations. Let`s talk.
          </p>
          <ContactForm />
        </article>

        <footer className="w-full mt-6 lg:mt-1 2xl:mt-10">
          <ul className="flex gap-8 justify-center items-center sm:pl-[20%] lg:pl-[10%]  sm:justify-start text-stone-600 text-4xl 2xl:text-5xl 2xl:pl-[7.3%] 2xl:gap-12">
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
        <span className="flex justify-center items-center w-[50%] 2xl:w-[30%] place-self-center  h-[1.5px] bg-white absolute bottom-14 lg:bottom-[18px] 2xl:bottom-[32px] left-0 right-0"></span>
        <div className="flex justify-center items-center gap-2 font-text2 text-sm 2xl:text-base text-gray-500 absolute bottom-0 xl:-bottom-1 2xl:bottom-0 left-0 right-0">
          <i className="bx bx-copyright text-xl"></i>
          <span>Faustino Oro {/* official website */}</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
