import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { useAdminData } from "./Admin/AdminDataContext";

const Games = () => {
  const { games, setGames } = useAdminData();

  const [selectedGame, setSelectedGame] = useState(null);
  const [game, setGame] = useState(new Chess());
  const [currentMoves, setCurrentMoves] = useState("");
  const [moveIndex, setMoveIndex] = useState(0);

  function obtenerJugadas(pgn) {
    const limpio = pgn.replace(/\n/g, " ");
    const jugadas = limpio.replace(/\d+\./g, "").trim().split(/\s+/);
    return jugadas;
  }

  // Función que avanza a la siguiente jugada
  const handleMoveNext = () => {
    const movesArray = obtenerJugadas(selectedGame.pgn); // Obtén el array de jugadas
    if (moveIndex < movesArray.length) {
      const newMoves = movesArray.slice(0, moveIndex + 1).join(" "); // Actualiza el string de jugadas
      setCurrentMoves(newMoves); // Actualiza las jugadas actuales
      setMoveIndex(moveIndex + 1); // Aumenta el índice de la jugada
      game.move(movesArray[moveIndex]); // Aplica la jugada en la lógica del ajedrez
    }
  };
  const handleMoveBack = () => {
    const movesArray = obtenerJugadas(selectedGame.pgn); // Obtén el array de jugadas
    if (moveIndex > 0) {
      // Evitar retroceder más allá de la primera jugada
      const newMoves = movesArray.slice(0, moveIndex - 1).join(" "); // Actualiza el string de jugadas
      setCurrentMoves(newMoves); // Actualiza las jugadas actuales
      setMoveIndex(moveIndex - 1); // Decrementa el índice de la jugada

      // Reinicia el tablero y aplica las jugadas anteriores
      game.reset(); // Reinicia el estado del tablero
      for (let i = 0; i < moveIndex - 1; i++) {
        game.move(movesArray[i]); // Reaplica todas las jugadas hasta la jugada anterior
      }
    }
  };
  const handleSelectGame = (partida) => {
    setSelectedGame(partida);
    const newGame = new Chess(); // Reinicia el estado del juego
    setGame(newGame);
    setMoveIndex(0);
    setCurrentMoves(""); // Reinicia las jugadas actuales
  };

  return (
    <>
      {" "}
      <main
        id="games"
        className="relative overflow-hidden z-50 w-full pb-10 min-h-screen pt-10 flex flex-col items-center lg:flex-row lg:gap-8"
      >
        <div className="w-full lg:w-[50%] flex flex-col items-center">
          <h6 className="self-start  font-title ml-4 text-6xl md:text-7xl text-white  font-semibold  lg:ml-6 2xl:ml-[5%] 2xl:text-8xl">
            PARTIDAS
          </h6>
          <div
            id="line-games"
            className="self-start w-[0%] h-[2px] bg-lightbrown mt-3 lg:mt-4 2xl:mt-4"
          ></div>
          <p className="text-2xl font-text2 text-stone-400 font-base mt-7 z-50 xl:text-2xl ">
            {selectedGame
              ? selectedGame.players
              : games?.length > 0
              ? games[0].players
              : "No hay partidas disponibles"}
          </p>
          <p className="text-base font-text2 text-stone-600 xl:text-lg">
            {selectedGame
              ? selectedGame.content
              : games?.length > 0
              ? games[0].content
              : "No hay partidas disponibles"}
          </p>
          <p className="text-base font-text2 text-stone-600 xl:text-lg">
            {selectedGame
              ? selectedGame.location
              : games?.length > 0
              ? games[0].location
              : "No hay partidas disponibles"}
          </p>
          <section className="chessboard-wrapper relative  max-w-[400px] 2xl:max-w-[500px] mt-14  ">
            <div id="chessboard-container" className="z-50 w-full relative">
              <div className="font-text2 absolute z-50 -top-7 text-base text-stone-500 md:text-stone-600 flex justify-center items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-white"></span>
                {selectedGame
                  ? selectedGame.black
                  : games?.length > 0
                  ? games[0].black
                  : "No hay partidas disponibles"}
              </div>
              <div className="font-text2 absolute z-50 bottom-[5.7rem] right-0 text-base text-stone-500 md:text-stone-600 flex justify-center items-center gap-2 ">
                <span className="w-4 h-4 rounded-full bg-white"></span>
                {selectedGame
                  ? selectedGame.white
                  : games?.length > 0
                  ? games[0].white
                  : "No hay partidas disponibles"}
              </div>
              <Chessboard
                id="CustomStyledBoard"
                position={game.fen()}
                arePiecesDraggable={false}
                animationDuration={150}
                customDarkSquareStyle={{
                  backgroundColor: "",
                }}
                customLightSquareStyle={{ backgroundColor: "#3C5B6F" }}
              />
              <div className=" flex items-center mt-6 gap-8 justify-evenly text-stone-600 relative">
                <button
                  className="text-7xl hover:text-stone-300 "
                  onClick={handleMoveBack}
                >
                  <i className="bx bx-chevrons-left hover:scale-105 duration-500"></i>
                  <p className="text-lg font-semibold -mt-2 text-lightbrown">
                    Prev
                  </p>
                </button>
                <button
                  className="text-7xl hover:text-stone-300  duration-500"
                  onClick={handleMoveNext}
                >
                  <i className="bx bx-chevrons-right hover:scale-105"></i>
                  <p className="text-lg font-semibold -mt-2 text-lightbrown ">
                    Next
                  </p>
                </button>
                <div className="absolute -bottom-2 w-full h-[1.5px] bg-lightbrown self-center mt-2 max-w-[400px] 2xl:max-w-[500px] 2xl:-bottom-3"></div>
              </div>
            </div>
          </section>
        </div>

        <section className="w-full flex flex-col items-start  mt-12 lg:w-auto  xl:mt-20 2xl:mt-24  z-50   lg:py-4 lg:px-3">
          <ul className="w-[90%] px-3 z-50 text-lg font-title text-stone-300 font-normal flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4  lg:w-auto 2xl:text-[1.3rem] 2xl:gap-6 ">
            {games?.map((partida, i) => {
              return (
                <li
                  id="box-glass"
                  key={i}
                  onClick={() => handleSelectGame(partida)}
                  className="relative w-full p-1 flex justify-start
                 items-center text-base gap-2 rounded-2xl z-50 px-3 md:w-[430px] cursor-pointer hover:scale-105 border border-stone-700 duration-500 group"
                >
                  <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center  bg-zinc-800 text-[#4b718a] text-xl xl:text-2xl group-hover:text-whiteCustom"></i>
                  {partida.players}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Games;
