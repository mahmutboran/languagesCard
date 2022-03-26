
import { useState } from "react";

const Card = (categories) => {

    const [showLogo, setShowLogo] = useState(true)
   console.log( showLogo )

    

    
 
 
    return (
        <div onClick={() => {
            setShowLogo(!showLogo) 
            setTimeout(()=>{
                setShowLogo(showLogo)
            },2000)
            console.log( showLogo )
        }} 
            className="card" >
            {showLogo ? (  
            <div>
            <div>
            <img src={categories.img} alt="img" />
            </div>
            <div>
            <p>{categories.name}</p>
            </div>
            </div>
            ) :

                (<ul >{

                    categories.options.map((opt, i) => {

                        return <li key={i}>{opt}</li>
                    })

                }
                </ul>)}

        </div>
    );
};
export default Card