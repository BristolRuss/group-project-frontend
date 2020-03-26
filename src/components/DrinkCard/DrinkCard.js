import React from 'react';
import { Link } from 'react-router-dom';

class DrinkCard extends React.Component {
    componentDidMount() {
        this.props.getData();
    }
    render() {
        return (
            <>
                <header className="subHeader">
                    <h3>{this.props.spirits[this.props.id].name.toUpperCase()}</h3>
                </header>
                <section className = "spiritSection">
                    {this.props.drinks.map(drink => (
                        <Link key={drink.id} to = {`/drink/${drink.id}`} >
                            <div className = "card spiritCard drinkColour" style = {{
                                backgroundImage: `url(${drink.image})`, backgroundSize: "cover", opacity: "85%"
                            }}>
                                <h5 className="drinkCardH5">{drink.name.toUpperCase()}</h5>
                            </div>
                        </Link>   
                    ))} 
                </section>
            </>
        )
    }
}

export default DrinkCard;