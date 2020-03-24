import React from 'react';
import { Link } from 'react-router-dom';

class DrinkCard extends React.Component {
    render() {
        return (
            <>
                <header className="subHeader">
                    <h3>RUM</h3>
                </header>
                <Link className = "btn backButton" to = "/">BACK</Link>
                <section className = "spiritSection">
                    <div className = "spiritCard drinkColour">
                        <h5>DAIQUIRI</h5>
                    </div>
                    <Link to = "/drink/1" >
                        <div className = "spiritCard drinkColour">
                            <h5>STRAWBERRY DAIQUIRI</h5>
                        </div>
                    </Link>
                    <div className = "spiritCard drinkColour">
                        <h5>BLUE LONG ISLAND</h5>
                    </div>
                    <div className = "spiritCard drinkColour">
                        <h5>RUM FIZZ</h5>
                    </div>
                    <div className = "spiritCard drinkColour">
                        <h5>PINA COLADA</h5>
                    </div>
                    <div className = "spiritCard drinkColour">
                        <h5>MALIBU BEACH</h5>
                    </div>
                </section>
            </>
        )
    }
}

export default DrinkCard;

// const DrinkCard = ({drinks}) => (
//   <>
//     <header className="subHeader">
//         <h3>RUM</h3>
//     </header>
//     <section className = "spiritSection">
//         {drinks.map((drink, i) => {
//             <div className = "spiritCard drinkColour">
//                 <h5 key = {i}>{drink.name}</h5>
//             </div>   
//         })}
//         <Link className = "btn backButton" to = "/">BACK</Link>
//         <div className = "spiritCard drinkColour">
//             <h5>{name}</h5>
//         </div>
//         <Link to = "/drink/1" >
//             <div className = "spiritCard drinkColour">
//                 <h5>STRAWBERRY DAIQUIRI</h5>
//             </div>
//         </Link>
//         <div className = "spiritCard drinkColour">
//             <h5>BLUE LONG ISLAND</h5>
//         </div>
//         <div className = "spiritCard drinkColour">
//             <h5>RUM FIZZ</h5>
//         </div>
//         <div className = "spiritCard drinkColour">
//             <h5>PINA COLADA</h5>
//         </div>
//         <div className = "spiritCard drinkColour">
//             <h5>MALIBU BEACH</h5>
//         </div>
//     </section>
//   </>
// )

// export default DrinkCard;
