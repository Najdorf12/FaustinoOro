const CardAdminLogro = ({logro, onEdit, onDelete }) => {
    const { title } = logro; 
  
    return (
    <section className="relative border border-zinc-700 w-[95%] max-w-[680px] rounded-lg flex hover:scale-105 duration-500 pb-1 lg:pb-2">
      <article className="h-full  flex flex-col gap-1 w-full text-balance">
        <p className="text-lg font-medium  px-3 flex items-center justify-center gap-3 font-text text-center  text-whiteCustom leading-5 border-b border-zinc-700 py-3 bg-sky-800 rounded-t-lg ">
          {title}
        </p>

        <div className="w-full mt-4 mb-1">
          <div className="flex justify-evenly items-center text-whiteCustom mr-2">
            <div
              onClick={onEdit}
              className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-sky-800 duration-500"
            >
              <i className="bx bxs-edit-alt text-3xl"></i>
              Editar
            </div>
            <div
              onClick={onDelete}
              className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-sky-800 duration-500"
            >
              <i className="bx bxs-trash-alt text-3xl"></i>
              Eliminar
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CardAdminLogro;
