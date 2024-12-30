import axios from "../api/axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
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
      <div className="form-container border border-zinc-600 w-[95%] max-w-[400px] mt-7 2xl:max-w-[460px]  z-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form text-whiteCustom z-50 "
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              required=""
              name="email"
              id="email"
              type="text"
              {...register("email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="wttp">Whatsapp</label>
            <input
              required=""
              name="wttp"
              id="wttp"
              type="text"
              {...register("wttp")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Mensaje</label>
            <textarea
              id="textarea"
              name="textarea"
              {...register("message")}
              defaultValue=""
            />
          </div>
          <button
            type="submit"
            className="form-submit-btn font-text2 text-base border border-zinc-400 bg-[#4b718a]  text-whiteCustom rounded-lg duration-400 hover:scale-105 hover:border-sky-100"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
