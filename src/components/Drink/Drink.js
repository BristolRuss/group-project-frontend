import React from 'react';

class Drink extends React.Component {
    componentDidMount() {
        // this.props.getData();
    }

    render() {
        const {name, ingredients, method, image} = this.props.drink;
        return (
            <>
              <header className="subHeader">
                <h3>{name.toUpperCase()}</h3>
              </header>
              <section className = "spiritSection" style = {{
                backgroundImage: `url("${image}")`
              }}>
                  <div className = "drinkCards primary">
                      <h3>INGREDIENTS</h3>
                      <ul>
                      {ingredients.map(ingredient => (
                        <li key = {ingredient}>
                            <h5>{ingredient}</h5>
                        </li>))} 
                      </ul>
                  </div>
                  <div className = "drinkCards">
                      <h3>METHOD</h3>
                      <ul>
                      {method.map(step => (
                        <li key = {step}>
                            <h5>{step}</h5>
                        </li>))}
                      </ul>
                  </div>
              </section>
            </>
        )
    }
}

export default Drink;