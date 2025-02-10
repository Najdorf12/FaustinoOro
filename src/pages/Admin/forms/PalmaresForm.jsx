import { useAdminData } from "../AdminDataContext";
import axios from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardAdminLogro from "./CardAdminLogro";

const PalmaresForm = () => {
  const { palmares, setPalmares } = useAdminData();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [logroSelected, setLogroSelected] = useState(null);

  useEffect(() => {
    if (logroSelected) {
      reset({
        _id: logroSelected._id,
        title: logroSelected.title,
        description: logroSelected.description,
      });
    } else {
      reset({
        _id: "",
        title: "",
        description: "",
      });
    }
  }, [logroSelected]);

  const submit = (data) => {
    if (logroSelected) {
      editLogro(data);
    } else {
      const newLogro = {
        title: data.title,
        description: data.description,
      };

      axios
        .post("/palmares", newLogro)
        .then((res) => {
          setPalmares((prevLogro) => [...prevLogro, res.data]); // Actualiza el contexto
        })
        .catch((error) => console.error(error));
    }
    setLogroSelected(null);
    reset();
    alert("PARTIDA CREADA EXITOSAMENTE");
  };

  const editLogro = (logro) => {
    axios
      .put(`/palmares/${logro._id}`, logro)
      .then((res) => {
        setPalmares((prevLogro) =>
          prevLogro.map((item) => (item._id === res.data._id ? res.data : item))
        );
        setLogroSelected(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteLogro = (id) => {
    axios
      .delete(`/palmares/${id}`)
      .then(() => {
        setPalmares((prevLogros) =>
          prevLogros.filter((item) => item._id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full rounded-xl border-zinc-700 border overflow-hidden py-6 px-4 space-y-6 md:space-y-7 md:w-[650px] xl:w-[750px]">
        <h2 className="text-center font-title text-5xl font-extrabold text-whiteCustom md:text-6xl xl:text-7xl 2xl:text-8xl">
          Palmares
        </h2>
        <p className="text-center text-zinc-500  font-text text-base xl:text-xl 2xl:text-xl">
          Crea un nuevo logro
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
            <div className="relative font-text w-full ">
              <input
                autoComplete="off"
                placeholder="Joe Doe"
                className="peer w-full h-10 border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                name="players"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Logro is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                Logro
              </label>
            </div>
            {/*  <div className="relative font-text xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                name="location"
                {...register("description", {
                  required: {
                    value: true,
                    message: "location is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                Description
              </label>
            </div> */}
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="w-full font-text mt-2 py-2 px-4 border-[1px] border-zinc-600 bg-sky-600 hover:bg-whiteCustom rounded-md shadow-lg text-whiteCustom font-semibold transition duration-500 hover:text-gray-500 xl:w-[80%] xl:self-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col justify-center items-center w-full gap-y-8 mt-12 md:gap-y-10 lg:px-6 xl:mt-24 xl:gap-y-12">
        {palmares?.map((logro) => (
          <CardAdminLogro
            key={logro._id}
            logro={logro}
            onEdit={() => setLogroSelected(logro)}
            onDelete={() => deleteLogro(logro._id)}
          />
        ))}
      </section>
    </div>
  );
};

export default PalmaresForm;
