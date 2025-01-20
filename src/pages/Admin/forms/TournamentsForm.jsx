import axios from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardTournament from "./CardTournament";
import { useAdminData } from "../AdminDataContext";

const TournamentsForm = () => {
  const { tournaments, setTournaments } = useAdminData();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [tournamentSelected, setTournamentSelected] = useState(null);

  useEffect(() => {
    if (tournamentSelected) {
      reset({
        _id: tournamentSelected._id,
        title: tournamentSelected.title,
        description: tournamentSelected.description,
        content: tournamentSelected.content,
        location: tournamentSelected.location,
        time: tournamentSelected.time,
        images: tournamentSelected.images,
      });
      setImages(tournamentSelected.images || []); // Sincronizar imágenes
    } else {
      reset({
        _id: "",
        title: "",
        description: "",
        content: "",
        location: "",
        time: "",
        images: "",
      });
      setImages([]); // Limpiar imágenes cuando no hay torneo seleccionado
    }
  }, [tournamentSelected]);

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "FaustinoOro");
    data.append("folder", "FaustinoOro");

    setLoadingImage(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/najdorf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setImages([
        ...images,
        {
          public_id: file.public_id,
          secure_url: file.secure_url,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingImage(false);
    }
  }

  const handleDeleteImage = (event) => {
    setImages(images.filter((e) => e !== event));
  };

  const submit = (data) => {
    const tournamentData = {
      ...data,
      images, // Adjuntar imágenes actuales
    };

    if (tournamentSelected) {
      editTournament(tournamentData);
    } else {
      axios
        .post("/tournaments", tournamentData)
        .then((res) => {
          setTournaments((prevTournaments) => [...prevTournaments, res.data]);
        })
        .catch((error) => console.error(error));
    }

    setTournamentSelected(null);
    reset();
    setImages([]); // Limpiar imágenes después de enviar
    alert("TORNEO CREADO EXITOSAMENTE");
  };

  const editTournament = (tournament) => {
    axios
      .put(`/tournaments/${tournament?._id}`, tournament)
      .then((res) => {
        setTournaments((prevTournaments) =>
          prevTournaments.map((item) =>
            item._id === res.data._id ? res.data : item
          )
        );
        setTournamentSelected(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteTournament = (id) => {
    axios
      .delete(`/tournaments/${id}`)
      .then(() => {
        setTournaments((prevTournaments) =>
          prevTournaments.filter((item) => item._id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="w-full rounded-xl border-zinc-700 border overflow-hidden py-6 px-4 space-y-6 md:space-y-7 md:w-[550px] xl:w-[700px]">
          <h2 className="text-center font-title text-5xl font-extrabold text-whiteCustom md:text-6xl xl:text-7xl 2xl:text-8xl">
            TORNEOS
          </h2>
          <p className="text-center text-zinc-500  font-text text-base xl:text-xl 2xl:text-xl">
            Crea un nuevo torneo
          </p>
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="Joe Doe"
                  className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                  name="title"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                  Title
                </label>
              </div>
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="description"
                  className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                  name="description"
                  {...register("description", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                  Description
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-6 xl:flex xl:flex-row  ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600 "
                  name="location"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "location is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                  Location
                </label>
              </div>
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="date"
                  className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                  name="date"
                  {...register("time", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                  Date
                </label>
              </div>
            </div>
            <div className="relative font-text flex gap-6 items-center">
              <p className="text-zinc-400">Is Active?</p>
              <label className="container-checkbox">
                <input
                  autoComplete="off"
                  type="checkbox"
                  {...register("isActive")}
                />
                <svg viewBox="0 0 64 64" height="2em" width="2em">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="relative font-text text-zinc-400  flex gap-2 flex-col justify-center items-center">
              <p className="self-start text-base">Content</p>{" "}
              <textarea
                placeholder=""
                className=" text-whiteCustom bg-transparent border-[2px]  w-full xl:text-base rounded-lg p-2  focus:outline-none  focus:border-sky-600 border-zinc-500"
                name="content"
                id="content"
                {...register("content")}
                rows="5"
                cols="30"
              />
            </div>

            <div className="flex flex-col items-center gap-5 ">
              <label className="font-light text-zinc-500 text-xl font-text">
                Imágenes
              </label>
              <input
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
                className=" rounded-lg flex-1  appearance-none w-full  max-w-[400px] py-2 px-4 border border-zinc-600 text-white placeholder-white text-sm focus:outline-none focus:border-transparent"
              />
              {loadingImage ? (
                <h3>Cargando imagen...</h3>
              ) : (
                <div className="lg:flex gap-5 xl:gap-10">
                  {images?.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img.secure_url}
                        alt={`Tournament image ${index + 1}`}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(img)}
                        className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-2 py-1"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center ">
              <button
                className="w-full font-text  py-2 px-4 border-[1px] border-zinc-600 bg-sky-600 hover:bg-whiteCustom rounded-md shadow-lg text-whiteCustom font-semibold transition duration-500 hover:text-gray-500 xl:w-[80%] xl:self-center"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="flex flex-wrap  gap-y-5 gap-x-4 mt-10 justify-center items-start md:gap-y-10 lg:px-6  xl:mt-24 xl:gap-x-9 xl:gap-y-9">
          {tournaments?.map((tournament) => (
            <CardTournament
              key={tournament._id}
              tournament={tournament}
              onEdit={() => {
                console.log(tournamentSelected);
                setTournamentSelected(tournament);
              }}
              onDelete={() => deleteTournament(tournament._id)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default TournamentsForm;
