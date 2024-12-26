import "./primaryBtn.css";

const PrimaryBtn = ({btnname}) => {
  return (
    <>
      <button className="animated-button rounded-3xl w-[180px] pl-12 py-1 2xl:py-[6px] 2xl:px-16 shadow-lg shadow-zinc-900 border border-stone-500 xl:w-[190px] 2xl:pl-14 2xl:w-[200px]">
        <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-rose-600 2xl:text-4xl"></i>
        <span className="text font-text2 text-base lg:text-lg xl:text-xl ">{btnname}</span>
        <span className="circle bg-zinc-800"></span>
        <i className="bx bx-right-arrow-alt arr-1 text-3xl  text-rose-600 2xl:text-4xl"></i>
      </button>
    </>
  );
};

export default PrimaryBtn;
