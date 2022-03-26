
import { useState } from "react";

const Card = (categories)=>{
    
    const [showLogo,setShowLogo] = useState(true)

    return(
        <div onClick={click} className="card" >
            <div>

            <img src={categories.img} alt="img" />
            </div>
            <div>

            <p>{categories.name}</p>
            </div>

            <ul >
                <li>{categories.options}</li>
            </ul>

        </div>
    )
}
export default Card