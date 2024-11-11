import "./primaryBtn.css";

const NavBtn = ({btnname}) => {
  return (
    <>
      <button className="animated-button rounded-3xl px-12 py-1 lg:px-14 xl:px-16 2xl:py-[6px] 2xl:px-16 shadow-lg shadow-zinc-900 border border-stone-2
      00">
        <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-rose-600 2xl:text-4xl"></i>
        <span className="text font-title font-medium text-base lg:text-lg xl:text-xl ">{btnname}</span>
        <span className="circle bg-zinc-800"></span>
        <i className="bx bx-right-arrow-alt arr-1 text-3xl  text-rose-600 2xl:text-4xl"></i>
      </button>
    </>
  );
};

export default NavBtn;
