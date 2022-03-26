import { categories } from "../helper/data"


const Card = (categories)=>{
    
const click =(e)=>{
    console.log(e.target)
}

    return(
        <div onClick={click} className="card" >
            <div>

            <img src={categories.img} alt="img" />
            </div>
            <div>

            <p>{categories.name}</p>
            </div>

        </div>
    )
}
export default Card