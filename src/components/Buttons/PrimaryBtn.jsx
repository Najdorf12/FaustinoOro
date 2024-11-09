import "./primaryBtn.css";

const PrimaryBtn = ({btnname}) => {
  return (
    <>
      <button className="animated-button text-white bg-zinc-800 rounded-3xl px-10 py-1 lg:px-14 2xl:py-[6px] 2xl:px-16">
        <i className="bx bxl-whatsapp arr-2 text-3xl  text-[#25D366]"></i>
        <span className="text font-title font-medium text-base lg:text-lg 2xl:text-xl ">{btnname}</span>
        <span className="circle bg-zinc-800"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arr-1"
          viewBox="0 0 24 24"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </>
  );
};

export default PrimaryBtn;
