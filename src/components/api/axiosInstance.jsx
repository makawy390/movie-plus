import axios from "axios";
import store from "../../store/store/store"; 
import  setLoader from "../../store/action/setLoader";
// import moviesFunc from "../../store/action/countMoives";
// import { useSelector } from "react-redux";
// const number = store.getState().numberOfMovies;
const axiosInstance = axios.create({
    baseURL : `https://api.themoviedb.org/3/movie/popular?api_key=cf3cf8c59af4c0e719ec5d733cd36a6b&page=1`,
});
export const terendApi = axios.create({
    baseURL : 'https://api.themoviedb.org/3/trending/all/day?api_key=cf3cf8c59af4c0e719ec5d733cd36a6b' 
});
axiosInstance.interceptors.request.use((config)=>{    
    store.dispatch(setLoader((true)))
    return config;
}, (error)=>{
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use((res)=>{
    store.dispatch(setLoader((false)))
    return res;
},(error)=>{
return Promise.reject(error); 
})
export default axiosInstance;


