import React, { useState , useEffect } from 'react';
import { terendApi } from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
function TerendMovies() {
    const [terend, setTerend] = useState([]);
    useEffect(()=>{
        terendApi.get().then((res)=> setTerend(res.data)).catch((error)=> console.log(error))
    },[]);
    const navigate = useNavigate();
    console.log(terend);
    const filteration = terend?.results?.map(({ poster_path, id, title, vote_average }) => {
        return (
          <div className="col-md-2  mb-3" key={id}>
            <div className="cards" onClick={() => navigate(`/movies/${id}`)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
// console.log(filteration);    
    return ( 
        <div className="terend">
            <div className="container">
                <div className="row">
                    {filteration}
                </div>
            </div>
        </div>
     );
}

export default TerendMovies;