import { div } from "three/examples/jsm/nodes/Nodes.js";
import icon from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";

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
        className="w-full h-screen bg-gray-300  pl-[5%] flex flex-col gap-16 2xl:gap-40 overflow-y-visible"
      >
        <h6 className="relative text-[5rem] md:text-[5.5rem] text-stone-600 font-title font-semibold 2xl:text-[9rem] ">
          LOREM
          <div className="w-[80%] md:w-[60%] h-[1.5px] absolute bottom-0 bg-white "></div>
        </h6>

        <p className=" max-w-[500px] -mt-[10%]  pr-16 lg:pr-0 text-sm  md:text-base text-gray-700 2xl:text-lg font-title xl:mt-8 2xl:mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          cumque a cupiditate earum obcaecati est, eum ducimus incidunt officia
          sequi voluptas nemo repellendus et nulla facere recusandae labore
          ipsam repellat. Atque magnam provident sequi, ad accusamus voluptate
          quibusdam quia, iste repellendus vel iure velit quo quisquam. .
        </p>
      </section>

      <section
        id="contact2_section"
        className="w-full h-screen bg-gray-300 pl-[5%]  md:pl-[3%] relative"
      >
        <article className="flex flex-col md:flex-row -mt-[80%] md:mt-0  justify-start gap-6  font-title text-[.8rem] font-medium  text-stone-700 pr-[3%] lg:gap-20 2xl:gap-40 2xl:text-[1rem]">
          <div className="flex flex-col gap-2 lg:gap-3  relative ">
            <div className="w-[2px] h-full absolute bg-white"></div>

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
          <div className="flex flex-col gap-2 lg:gap-3 relative">
            <div className="w-[2px] h-full absolute bg-white"></div>

            {palmares.map((tournament, i) => (
              <>
                <div
                  key={i}
                  className="flex items-center justify-start gap-2 pl-4 lg:pl-6 2xl:pl-8"
                >
                  <figure className="max-w-6 2xl:max-w-8">
                    <img src={icon} alt="" className="w-full" />
                  </figure>
                  <p>{tournament.tournament}</p>
                </div>
              </>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Contact;
