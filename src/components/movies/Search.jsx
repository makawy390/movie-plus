import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {img1} from '../assets/img-not.jpg'
function SearchMovies() {
    const [movies , setMovies] = useState([])
const [searchValue, setSearchValue]= useState("");
const navigate = useNavigate();
useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${searchValue}`)
    .then((res)=>{
        if (res.data) {
            setMovies(res.data.results)
        }
    } ).catch((err)=> console.log(err))
},[searchValue]);

const movie = movies.map(({ poster_path, id, title, vote_average }) => {
    return (
      <div className="col-md-2  mb-3" key={id}>
        <div className="cards" onClick={() => navigate(`/movies/${id}`)}>
          <img
            src={`${poster_path == null? `https://diaamohamed013.github.io/movie_p/img-not.jpg` :`https://image.tmdb.org/t/p/w500/${poster_path}`}`}
            className="img-fluid w-100"
            alt="..."
          />
          <div className="card-body mt-2">
            <h5 className="card-title mb-2">{title} </h5>
            <p className="vote">{vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    );
  });

console.log(movies);
    return ( 
        <div className="search-movies">
            <div className="container">
              
              <div className="row">
                <div className="col-md-6 mx-auto">
                  
                <input type="search" placeholder='Search for a movie' className='input mx-auto'  value={searchValue} 
                onChange={(e)=> setSearchValue(e.target.value)} />
                </div>
              </div>
                <div className="row mt-5">
                    {movie}
                </div>
            </div>
        </div>
     );
}

export default SearchMovies;