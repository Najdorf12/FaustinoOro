import axios from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardAdminGame from "./CardAdminGame";
import { useAdminData } from "../AdminDataContext";

const GamesForm = () => {
  const { games, setGames } = useAdminData(); // Acceso al contexto
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [gameSelected, setGameSelected] = useState(null);

  useEffect(() => {
    if (gameSelected) {
      reset({
        _id: gameSelected._id,
        players: gameSelected.players,
        white: gameSelected.white,
        black: gameSelected.black,
        location: gameSelected.location,
        content: gameSelected.content,
        pgn: gameSelected.pgn,
      });
    } else {
      reset({
        _id: "",
        players: "",
        white: "",
        black: "",
        location: "",
        content: "",
        pgn: ""
      });
    }
  }, [gameSelected]);


  const submit = (data) => {
    if (gameSelected) {
      editGame(data);
    } else {
      const newGame = {
        players: data.players,
        white: data.white,
        black: data.black,
        location: data.location,
        content: data.content,
        pgn: data.pgn,
      };
      axios
        .post("/games", newGame)
        .then((res) => {
          setGames((prevGame) => [...prevGame, res.data]); // Actualiza el contexto
        })
        .catch((error) => console.error(error));
    }
    setGameSelected(null);
    reset();
    alert("TORNEO CREADO EXITOSAMENTE");
  };

  const editGame = (game) => {
    axios
      .put(`/games/${tournament._id}`, tournament)
      .then((res) => {
        setGames((prevGames) =>
          prevGames.map((item) =>
            item._id === res.data._id ? res.data : item
          )
        );
        setGameSelected(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteGame = (id) => {
    axios
      .delete(`/games/${id}`)
      .then(() => {
        setGames((prevGames) =>
          prevGames.filter((item) => item._id !== id)
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-screen min-h-screen  flex flex-col justify-center items-center xl:flex-row xl:justify-evenly xl:items-start xl:mt-14">
      <section className="w-full px-3 sm:px-4 flex flex-col items-center   xl:w-auto">
        <section
          style={{
            backgroundImage:
              "linear-gradient(to right top, #242427, #2b2a30, #33303a, #3c3542, #463b4b, #554255, #65495e, #765066, #905a6f, #aa6575, #c37278, #da8078)",
          }}
          className="w-full rounded-xl shadow-2xl shadow-black overflow-hidden py-8 px-4 space-y-8 md:w-[550px] xl:w-[600px]"
        >
          <h2 className="text-center font-title text-6xl font-extrabold text-white  xl:text-7xl 2xl:text-8xl">
            Partidas
          </h2>
          <p className="text-center text-gray-200 font-text text-base xl:text-lg 2xl:text-xl">
            Create your game
          </p>
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="Joe Doe"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="players"
                  {...register("players", {
                    required: {
                      value: true,
                      message: "Game is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Players
                </label>
              </div>
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
            </div>

            <div className="flex flex-col gap-6 xl:flex xl:flex-row  ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="white"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="white"
                  {...register("white", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  White
                </label>
              </div>
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white "
                  name="black"
                  {...register("black", {
                    required: {
                      value: true,
                      message: "black is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Black
                </label>
              </div>
            </div>
            <div className="relative font-text">
              <input
                autoComplete="off"
                placeholder="content"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                name="content"
                {...register("content", {
                  required: {
                    value: false,
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                Content
              </label>
            </div>
            <div className="relative font-text text-gray-400  flex gap-2 flex-col justify-center items-center">
              <p className="self-start text-base">pgn</p>{" "}
              <textarea
                placeholder=""
                className=" text-white bg-transparent border-[2px]  w-full xl:text-base rounded-lg p-2"
                name="pgn"
                id="pgn"
                {...register("pgn")}
                rows="5"
                cols="30"
              />
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

      <section className="flex flex-wrap  gap-y-3 gap-x-4 mt-10 justify-center items-start md:gap-y-10 lg:px-6  xl:mt-24 xl:gap-x-9 xl:gap-y-9">
          {games?.map((game) => (
            <CardAdminGame
              key={game._id}
              game={game}
              onEdit={() => setGameSelected(game)}
              onDelete={() => deleteGame(game._id)}
            />
          ))}
        </section>
    </div>
  );
};

export default GamesForm;
 




