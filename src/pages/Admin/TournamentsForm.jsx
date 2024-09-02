import axios from "../../api/axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getTournaments } from "../../api/handlers";
import CardTournament from "./CardTournament";

const TournamentsForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [allTournaments, setAllTournaments] = useState([]);
  const [tournamentSelected, setTournamentSelected] = useState(null);

  const [images, setImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tournamentsData = await getTournaments();
        console.log("Tournaments Data:", tournamentsData);
        setAllTournaments(tournamentsData);
      } catch (error) {
        console.error("Failed to fetch tournaments:", error);
      }
    };

    fetchTournaments();
  }, []);

  useEffect(() => {
    if (tournamentSelected !== null) {
      reset({
        _id: tournamentSelected._id,
        description: tournamentSelected.description,
        title: tournamentSelected.title,
        content: tournamentSelected.content,
        location: tournamentSelected.location,
        time: tournamentSelected.time,
        isActive: false,
      });
    } else {
      reset({
        _id: "",
        description: "",
        title: "",
        content: "",
        location: "",
        time: "",
        isActive: false,
      });
    }
  }, [tournamentSelected]);

  const selectTournament = (tournament, _id) => {
    setTournamentSelected(tournament);
  };

  const deleteTournament = (id) => {
    axios
      .delete(`/tournaments/${id}`)
      .then(() => {
        // Filtrar la EVA eliminada del estado actual
        setAllTournaments((prevTour) =>
          prevTour.filter((tour) => tour._id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  const editTournament = (tournament, id) => {
    axios
      .put(`/tournaments/${tournament._id}`, tournament)
      .then((res) => {
        const updatedTournament = res.data;
        const updatedTournaments = allTournaments.map((item) =>
          item._id === updatedTournament._id ? updatedTournament : item
        );
        setAllTournaments(updatedTournaments);
        setTournamentSelected(null);
      })
      .catch((error) => console.error(error));
  };

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
      console.log(error);
    } finally {
      setLoadingImage(false);
    }
  }
  function handleDelete(event) {
    setImages(images.filter((e) => e !== event));
  }

  const submit = (data) => {
    if (tournamentSelected !== null) {
      editTournament(data);
    } else {
      const newTournament = {
        title: data.title,
        description: data.description,
        content: data.content,
        location: data.location,
        time: data.time,
        isActive: data.isActive,
        images: images,
      };
      axios
        .post("/tournaments", newTournament)
        .then((res) => {
          // Utiliza la respuesta del backend para obtener la nueva EVA con el _id asignado
          const createdTournament = res.data;
          setAllTournaments([...allTournaments, createdTournament]); // Agrega la EVA con su _id al estado
        })
        .catch((error) => console.error(error));
    }
    alert("TORNEO CREADO EXITOSAMENTE");
  };

  return (
    <div className="w-screen min-h-screen  flex flex-col justify-center items-center xl:flex-row xl:justify-evenly xl:items-start">
      <section className="mt-12 w-full px-3 sm:px-4 flex flex-col items-center  xl:w-auto">
        <section
          style={{
            backgroundImage:
              "linear-gradient(to right top, #242427, #2b2a30, #33303a, #3c3542, #463b4b, #554255, #65495e, #765066, #905a6f, #aa6575, #c37278, #da8078)",
          }}
          className="w-full rounded-xl shadow-2xl shadow-black overflow-hidden py-8 px-4 space-y-8 md:w-[550px] xl:w-[600px]"
        >
          <h2 className="text-center font-title text-6xl font-extrabold text-white  xl:text-7xl 2xl:text-8xl">
            TORNEOS
          </h2>
          <p className="text-center text-gray-200 font-text text-base xl:text-lg 2xl:text-xl">
            Create your tournament
          </p>
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="Joe Doe"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="title"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Title
                </label>
              </div>
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="description"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="description"
                  {...register("description", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Description
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-6 xl:flex xl:flex-row  ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white "
                  name="location"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "location is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Location
                </label>
              </div>
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="date"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="date"
                  {...register("time", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Date
                </label>
              </div>
            </div>
            <div className="relative font-text flex gap-6 items-center">
              <p className="text-gray-400">Is Active?</p>
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
            <div className="relative font-text text-gray-400  flex gap-2 flex-col justify-center items-center">
              <p className="self-start text-base">Content</p>{" "}
              <textarea
                placeholder=""
                className=" text-white bg-transparent border-[2px]  w-full xl:text-base rounded-lg p-2"
                name="content"
                id="content"
                {...register("content")}
                rows="5"
                cols="30"
              />
            </div>

            <div className="flex flex-col items-center gap-5 ">
              <label className="font-light text-gray-400 text-xl">
                Imágenes
              </label>
              <input
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
                className=" rounded-lg flex-1  appearance-none w-[90%] max-w-[400px] py-2 px-4 border border-gray-400 text-white placeholder-white text-sm focus:outline-none focus:border-transparent"
              />
              {loadingImage ? (
                <h3>Cargando imagen...</h3>
              ) : (
                <div className="lg:flex gap-5 xl:gap-10">
                  {images?.map((img) => (
                    <div key={img?.public_id} className="relative">
                      <button
                        type="button"
                        onClick={() => handleDelete(img)}
                        className="absolute right-0 px-2 border-2 border-gray-400  flex items-center rounded-sm font-bold text-white bg-red-700"
                      >
                        X
                      </button>
                      <img
                        className="w-32 h-32 object-cover 2xl:w-36 2xl:h-36"
                        src={img?.secure_url}
                        alt=""
                        width="300px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center ">
              <button
                className="w-full font-text  py-2 px-2 border-[1px] border-slate-100 hover:bg-gray-300 rounded-md shadow-lg text-white font-semibold transition duration-200 hover:text-gray-500 xl:w-[85%] xl:self-center "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className=" mt-8 flex flex-col justify-center items-center">
        {allTournaments?.map((tournament) => (
          <CardTournament
            key={tournament._id}
            tournament={tournament}
            selectTournament={selectTournament}
            deleteTournament={deleteTournament}
          />
        ))}
      </section>
    </div>
  );
};

export default TournamentsForm;
