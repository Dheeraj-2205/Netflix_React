import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from "axios";
import {Link} from "react-router-dom"


const apikey = "fc399f902305262547b5477e6a3138e2";
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const Popular = "popular";
const top_rated = "top_rated";
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
    const [play,setPlay] = useState([]);
    const [popular,setPopular] = useState([]);
    const [rated,setRated] = useState([]);
    const [genre,setGenre] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
            setUpcomingMovie(results);
        }
        const fetchnowPlaying = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
            setPlay(results);
        }
        const fetchPopular = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${Popular}?api_key=${apikey}`);
            setPopular(results);
        }
        const fetchtop_rated = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${top_rated}?api_key=${apikey}`);
            setRated(results);
        }
        const getAllGenre = async()=>{
            const {data :{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
            setGenre(genres);
        }
        fetchData();
        fetchnowPlaying();
        fetchPopular();
        fetchtop_rated();
        getAllGenre();
    },[])
  return (
    <section className='home'>
        <div className='banner'>
            {/* <img src={`${imgUrl}/${upcomingMovie[0].poster_path}`} alt="" /> */}
        </div>

        <Row title = {"Popular On Netflix"} arr = {upcomingMovie}/>
        <Row title = {"Popular On Netflix"} arr = {play}/>
        <Row title = {"Popular"} arr = {popular}/>
        <Row title = {"Top Rated"} arr = {rated}/>

        <div className="genreBox">
            {
                genre.map((item, i )=>(
                    <Link key = {i} to= {`/genre/${item.id}`}>{item.name}</Link>
                ))
            }
        </div>
    </section>
  )
}

export default Home