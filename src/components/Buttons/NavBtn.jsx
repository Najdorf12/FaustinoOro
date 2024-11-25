import "./primaryBtn.css";

const NavBtn = ({ btnname }) => {
  return (
    <>
      <button className="animated-button rounded-3xl w-[180px] pl-12 py-1 shadow-lg shadow-zinc-900 border border-stone-600  lg:w-[190px] lg: lg:rounded- 2xl:pl-14 2xl:w-[220px] ">
        <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-700 2xl:text-4xl"></i>
        <span className="text font-title2 text-base  2xl:text-lg">
          {btnname}
        </span>
        <span className="circle bg-zinc-800"></span>
        <i className="bx bx-right-arrow-alt arr-1 text-3xl  text-sky-700 2xl:text-4xl"></i>
      </button>
    </>
  );
};

export default NavBtn;
