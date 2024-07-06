const ContactForm = () => {
  return (
    <>
      <div className="form-container w-[95%] max-w-[400px] mt-12 lg:mt-10 2xl:max-w-[450px] 2xl:mt-16 z-50">
        <form className="form text-gray-700 z-50">
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
            <textarea
              id="textarea"
              name="textarea"
            >
              {" "}
            </textarea>
          </div>
          <button type="submit" className="form-submit-btn font-text2 text-gray-400 bg-zinc-800 duration-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
