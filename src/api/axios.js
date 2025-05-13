import axios from "axios";

const instance = axios.create({
  baseURL: "https://fausti-backend.vercel.app/api", // https://fausti-backend.vercel.app/api   http://localhost:1212/api
  withCredentials: "true",
});

export default instance;

/*  
google-site-verification=d5Xcyiv8AbV1jDhqaVAdH899VeRrMB6vURIAPNq1Xko
*/
