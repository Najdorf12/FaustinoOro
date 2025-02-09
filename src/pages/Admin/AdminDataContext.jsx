import { createContext, useContext, useState, useEffect } from "react";
import {
  getTournaments,
  getNews,
  getGames,
  getPalmares,
} from "../../api/handlers";

const AdminDataContext = createContext();

export const AdminDataProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [palmares, setPalmares] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tournamentsData, newsData, gamesData, palmaresData] =
          await Promise.all([
            getTournaments(),
            getNews(),
            getGames(),
            getPalmares(),
          ]);
        setTournaments(tournamentsData);
        setNews(newsData);
        setGames(gamesData);
        setPalmares(palmaresData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AdminDataContext.Provider
      value={{
        tournaments,
        setTournaments,
        news,
        setNews,
        games,
        setGames,
        palmares,
        setPalmares,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => useContext(AdminDataContext);
