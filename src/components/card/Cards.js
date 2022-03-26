import {categories} from "../helper/data";
import reactImage from "../assets/react.svg"
import Card from "./Card"
import "./Cards.css"




const Cards = () => {

    return (
     <div className="container">
        <img src={reactImage} alt="react" />
         <div className="cards-container">
             <h2>Languages</h2>
             <div className="card-container">

             { categories.map((item,index)=>(<Card{...item} key={index}/>))}
             </div>

      
         </div>
        {console.log(categories)}
    </div>
  )
}

export default Cards