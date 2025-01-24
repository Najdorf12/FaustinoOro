import { createContext, useContext, useState, useEffect } from "react";
import { getTournaments, getNews, getGames } from "../../api/handlers";

const AdminDataContext = createContext();

export const AdminDataProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tournamentsData, newsData, gamesData] = await Promise.all([
          getTournaments(),
          getNews(),
          getGames(),
        ]);
        setTournaments(tournamentsData);
        setNews(newsData);
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };
    fetchData();
  }, []);
  
  return (
    <AdminDataContext.Provider
      value={{ tournaments, setTournaments, news, setNews, games, setGames}}
    >
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => useContext(AdminDataContext);
