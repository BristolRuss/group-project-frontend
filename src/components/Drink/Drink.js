import React from 'react';

class Drink extends React.Component {
      componentDidMount() {
        this.props.getData();
    }
    render() {
      if(!this.props.drink){
        return null
      }
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
                        <li key = {ingredient.ingredient}>
                            <h5>{ingredient.ingredient.replace(/(\b[a-z](?!\s))/g, function(x){return x.toUpperCase();})}</h5>
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
              <iframe title="pinaColada" style = {{opacity: "0"}} width="560" height="315" src="https://www.youtube.com/embed/TazHNpt6OTo?controls=0&autoplay=1&amp;start=41" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
        )
    }
}

export default Drink;