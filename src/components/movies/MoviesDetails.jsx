import axios from "axios";
// import axiosInstance from "../api/axiosInstance";
import { useState , useEffect} from 'react';
import { useParams , useNavigate } from "react-router-dom";
function MoviesDetails() {
    const [details , setDetails] = useState([]);
    const params = useParams();
    const getMovies = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=cf3cf8c59af4c0e719ec5d733cd36a6b`)
        .then((res)=> setDetails(res.data))
        .catch((err)=> console.log(err))
    }
    const navigate = useNavigate();
    useEffect(()=>{
        getMovies()
},[])
const genre = details?.genres?.map(({name , id})=>(
    <li key={id}>{name} </li>
))
    return ( 
        <div className="details-movies mt-5 mb-5">
            <div className="container">
                <span className="btn text-white  mb-3" onClick={()=> navigate(-1)}>Back</span>
       <div className="card-details">
        <div className="row">
            <div className="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="card-img-top img-fluid mb-3" alt="..."/>
            </div>
            <div className="col-md-8">
  <div className="card-body">
    <h3 className="card-title">{details.title} </h3>
    <ul className="list-unstyled genree">
  {genre}
   </ul>
   <p><span> Original Language : </span>{details. original_language} </p>
    <p> <span>Popularity : </span>  {details.popularity} </p>
    <p> <span>Vote count : </span>  {details.vote_count}</p>
    <p><span>Vote average : </span>{details?.vote_average?.toFixed(1)} </p>
    <p> <span>Budget : </span>  {details.budget}</p>
    <p><span>Release Date : </span> {details.release_date}</p>
    <p><span>Overview : </span> {details.overview}</p>

    <a className="btn text-white btn-sm" href={`${details.homepage}`} target="_blank" >Watch Now</a>
  </div>
            </div>
        </div>
        
    <p className="vote-details">{details?.vote_average?.toFixed(1)}</p>

       </div>
        </div>
        </div>
     );
}

export default MoviesDetails;