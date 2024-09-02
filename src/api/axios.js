import axios from "axios";

const instance = axios.create({
  baseURL: "https://fausti-backend.vercel.app/api",
  withCredentials: "true",
});
export default instance;

/*  
http://localhost:1212/api
https://fausti-backend.vercel.app/api
*/