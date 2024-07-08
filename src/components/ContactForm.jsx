const ContactForm = () => {
  return (
    <>
      <div className="form-container  w-[95%] max-w-[400px] mt-8 2xl:max-w-[450px] 2xl:mt-12  z-50">
        <form className="form text-[#8f8c8c] z-50">
          <div className="form-group">
            <label for="Nombre">Nombre</label>
            <input required="" name="Nombre" id="Nombre" type="text" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input required="" name="email" id="email" type="text" />
          </div>
          <div className="form-group">
            <label for="textarea">Lorem impsum </label>
            <textarea id="textarea" name="textarea">
              {" "}
            </textarea>
          </div>
          <button
            type="submit"
            className="form-submit-btn font-title  text-gray-300 bg-zinc-800 duration-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
