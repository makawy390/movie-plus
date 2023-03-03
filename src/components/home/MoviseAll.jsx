import axios from "axios";
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { terendApi } from "../api/axiosInstance";
function MoviseAll() {
    const [allMovies , setAllMovise] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        terendApi.get().then((res)=> setAllMovise(res.data.results)).catch((err)=> console.log(err))
    },[]);
    // console.log(allMovies);
    
    const filterMovies = allMovies.filter((mov,ind)=>{
        return ind <10;
    }).map(({poster_path , id, title ,vote_average })=>(
        <div className="col-md-2 mb-3" key={id}>
          <div className="cards" onClick={() => navigate(`/movies/${id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top img-fluid" alt="..." />
            <div className="card-body mt-2">
              <h5 className="card-title mb-2">{title} </h5>
              <p className='vote'>{vote_average.toFixed(1)}</p>
            </div>
          </div>
        </div>
    ))
    console.log(filterMovies);
    return (  
        // <h2>All</h2>
        <div className="filter-movies mt-1">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="box">
                    <h3>Trending<br/>Movies<br/>To Watch Now</h3>
                    <p>Most Watched Movies By Days</p>
                    </div>
                </div>
        {filterMovies}
        <button className="btn btn-danger" onClick={()=> navigate('/terend')}>Show All Movies</button>
        </div>
        </div>
        </div>
    );
}

export default MoviseAll;