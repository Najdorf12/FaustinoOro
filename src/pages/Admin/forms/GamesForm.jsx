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
        pgn: "",
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
    alert("PARTIDA CREADA EXITOSAMENTE");
  };

  const editGame = (game) => {
    axios
      .put(`/games/${game._id}`, game)
      .then((res) => {
        setGames((prevGames) =>
          prevGames.map((item) => (item._id === res.data._id ? res.data : item))
        );
        setGameSelected(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteGame = (id) => {
    axios
      .delete(`/games/${id}`)
      .then(() => {
        setGames((prevGames) => prevGames.filter((item) => item._id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full rounded-xl border-zinc-700 border overflow-hidden py-6 px-4 space-y-6 md:space-y-7 md:w-[550px] xl:w-[700px]">
        <h2 className="text-center font-title text-5xl font-extrabold text-whiteCustom md:text-6xl xl:text-7xl 2xl:text-8xl">
          PARTIDAS
        </h2>
        <p className="text-center text-zinc-500  font-text text-base xl:text-xl 2xl:text-xl">
          Crea una nueva partida
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
            <div className="relative font-text xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="Joe Doe"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                name="players"
                {...register("players", {
                  required: {
                    value: true,
                    message: "Game is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                Players
              </label>
            </div>
            <div className="relative font-text xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
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
          </div>

          <div className="flex flex-col gap-6 xl:flex xl:flex-row  ">
            <div className="relative font-text xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="white"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                name="white"
                {...register("white", {
                  required: {
                    value: false,
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                White
              </label>
            </div>
            <div className="relative font-text xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
                name="black"
                {...register("black", {
                  required: {
                    value: true,
                    message: "black is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
                Black
              </label>
            </div>
          </div>
          <div className="relative font-text">
            <input
              autoComplete="off"
              placeholder="content"
              className="peer h-10 w-full border-b-2 border-zinc-600 text-whiteCustom bg-transparent placeholder-transparent focus:outline-none focus:border-sky-600"
              name="content"
              {...register("content", {
                required: {
                  value: false,
                },
              })}
            />
            <label className="absolute left-0 -top-3.5 text-whiteCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whiteCustom peer-focus:text-sm">
              Content
            </label>
          </div>
          <div className="relative font-text text-gray-400  flex gap-2 flex-col justify-center items-center">
            <p className="self-start text-base">PGN</p>{" "}
            <textarea
              placeholder=""
              className="text-whiteCustom bg-transparent border-[2px]  w-full xl:text-base rounded-lg p-2  focus:outline-none  focus:border-sky-600 border-zinc-500"
              name="pgn"
              id="pgn"
              {...register("pgn")}
              rows="5"
              cols="30"
            />
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

      <section className="flex flex-wrap  gap-y-3 gap-x-4 mt-10 justify-center items-start md:gap-y-10 lg:px-6 xl:mt-24 xl:gap-x-9 xl:gap-y-9">
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
