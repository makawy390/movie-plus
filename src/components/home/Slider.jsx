import { motion } from "framer-motion";
import  { useState, useEffect, useRef } from 'react';
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
function Slider() {
    const [slider , setSlider] = useState([]);
    const carouselRef = useRef();    
    const [width , setWidth] = useState(0);
    useEffect(()=>{
        // setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
        console.log(carouselRef?.current?.scrollWidth);
        console.log((carouselRef.current.offsetWidth));
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)

    },[width])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cf3cf8c59af4c0e719ec5d733cd36a6b&page=4')
        .then((res)=> setSlider(res.data.results))
        .catch((err)=> console.log(err))
    },[]);
    const history = useNavigate();
    console.log(slider);
    const slidImage = slider.map(({poster_path, vote_average,id})=>(
        <motion.div className="item" key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="carousel-img"  />
            <span className="votes">{vote_average}</span>
        </motion.div>
    ));

    return (    
        <div className="slider">
            <div className="container">
                <h6 className="text-center text-uppercase text-light">Online Streaming </h6>
                <h2 className="text-center text-light">Watch Shows Online</h2>
            <motion.div className="carousel" ref={carouselRef} whileTap={{cursor:"grabbing"}}>
                <motion.div drag="x" dragConstraints={{right:0 , left: -width}} className="inner-carousel">
                    {slidImage}
                </motion.div>
            </motion.div>

            <button className="btn btn-danger  mb-5  w-100" onClick={()=> history('/movies')}>More Movies</button>
            </div>

        </div> 
    );

}

export default Slider
;