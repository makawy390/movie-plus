import React, { useState, useEffect } from "react";
import "./movies.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import setCountLike from "../../store/action/setCountLike";
import nums from "./nums";
import moviesFunc from "../../store/action/countMoives";
import axios from "axios";

function Movies() {
  const sel  = useSelector((state)=> state.numberOfMovies)
  const [movies, setMovies] = useState([]);
  const [auth , setAuth] = useState('');
  const movieOne = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=cf3cf8c59af4c0e719ec5d733cd36a6b&page=${sel}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handelCount = () => {
    dispatch(setCountLike(+count + 1));
  };

  console.log(movies);
  useEffect(() => {
    movieOne();
  }, [sel]);
  const handel = (e)=>{
    dispatch(moviesFunc(e.target.value));
  }
  console.log("Select" , sel);
  const btns = nums.map(({id})=>(
    <button type="button" className='btns' id={auth}  value={id} key={id} onClick={(e)=> handel(e)}>{id}</button>
  ))

  const navigate = useNavigate();
  // const loading = useSelector((state) => state.loader);
  const movie = movies.map(({ poster_path, id, title, vote_average }) => {
    return (
      <div className="col-md-2  mb-3" key={id}>
        <div className="cards" onClick={() => navigate(`${id}`)}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="img-fluid w-100"
            alt="..."
          />
          <div className="card-body mt-2">
            <h5 className="card-title mb-2">{title} </h5>
            <p className="vote">{vote_average}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="movies mt-5">
      <div className="container">
        
        <div className="row">{movie}</div>
        <ul className="list-unstyled">
          {btns}
        </ul>
      </div>
    </div>
  );
}
export default Movies;
