import axios from "../api/axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("/send-email", data);
      console.log("Correo enviado:", response.data);
    } catch (err) {
      console.error(
        "Error al enviar el correo:",
        err.response?.data || err.message
      );
    }
  };
  return (
    <>
      <div className="form-container border border-zinc-600 w-[95%] max-w-[400px] mt-8 2xl:max-w-[450px] 2xl:mt-12  z-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form text-whiteCustom z-50 "
        >
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
            className="form-submit-btn font-text2 text-base border border-sky-400 bg-sky-700  text-whiteCustom rounded-lg duration-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
