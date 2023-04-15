import React from 'react'
import "./Home.scss";

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
  return (
    <section className='home'>
        <div className='banner'></div>

        <Row title = {"Popular On Netflix"}/>
    </section>
  )
}

export default Home