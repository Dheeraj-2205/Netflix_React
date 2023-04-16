import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from "axios";



const apikey = "fc399f902305262547b5477e6a3138e2";
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming";
const imgUrl = "https://image.tmdb.org/t/p/original" 
const Card =   ({img}) =>(

     <img className = "card" src={img} alt="cover" />
)
const Row = ({ title,arr = [] }) =>{
    return(

        <div className="row">
            <h2>{title}</h2>
            <div>
                {
                    arr.map((ele,i)=>(
                        <Card key = {i} img = {`${imgUrl}/${ele.poster_path}`}/>
                    ))
                }
            </div>
        </div>
    )
}
const Home = () => {
    const [upcomingMovie,setUpcomingMovie] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
            // console.log(results);
            setUpcomingMovie(results);
            console.log(upcomingMovie);
        }
        fetchData();
    },[])
  return (
    <section className='home'>
        <div className='banner'></div>

        <Row title = {"Popular On Netflix"} arr = {upcomingMovie}/>
        <Row title = {"Popular On Netflix"}/>
        <Row title = {"Popular On Netflix"}/>
        <Row title = {"Popular On Netflix"}/>
    </section>
  )
}

export default Home