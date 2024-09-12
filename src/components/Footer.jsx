const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0  flex flex-col items-center justify-center mt-6 z-50 font-title ">
      <span className="w-[80%] h-[2px] bg-stone-700 max-w-[600px] xl:max-w-[300px]"></span>
      <div className="text-stone-600 flex justify-center items-center gap-2">
        <i className="bx bx-copyright text-xl"></i>
        <span className="text-sm">Faustino Oro</span>
      </div>
    </footer>
  );
};

export default Footer;
