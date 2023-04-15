import React, { useEffect } from 'react'
import "./Home.scss";
import axios from "axios";



const apikey = "fc399f902305262547b5477e6a3138e2";
const url = "https://api.themoviedb.org/3"
const Card =   ({img}) =>(

     <img className = "card" src={img} alt="cover" />
)
const Row = ({title,arr = [{
    img :"https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg"
}] }) =>{
    return(

        <div className="row">
            <h2>{title}</h2>
            <div>
                {
                    arr.map((ele)=>(
                        <Card img = {ele.img}/>
                    ))
                }
            </div>
        </div>
    )
}
const Home = () => {
    useEffect(()=>{
        
    },[])
  return (
    <section className='home'>
        <div className='banner'></div>

        <Row title = {"Popular On Netflix"}/>
        <Row title = {"Popular On Netflix"}/>
        <Row title = {"Popular On Netflix"}/>
        <Row title = {"Popular On Netflix"}/>
    </section>
  )
}

export default Home