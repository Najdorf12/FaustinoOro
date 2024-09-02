import axios from "./axios";

export const getNews = async () => {
  try {
    const response = await axios.get("/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const getTournaments = async () => {
  try {
    const response = await axios.get("/tournaments");
    return response.data;
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    throw error;
  }
};
