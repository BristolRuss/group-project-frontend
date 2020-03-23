import React from 'react'

const Drink = () => (
  <>
    <header className="subHeader">
      <h3>STRAWBERRY DAIQUIRI</h3>
    </header>
    <section className = "spiritSection ">
        <div className = "drinkCards primary">
            <h3>INGREDIENTS</h3>
            <ul>
                <li>2 parts white rum</li>
                <li>1 part sugar syrup</li>
                <li>1 part lime juice</li>
                <li>4 pieces strawberry</li>
                <li>ice cubes</li>
            </ul>
            <img className="test" src = 'https://i2.wp.com/www.missinthekitchen.com/wp-content/uploads/2017/02/Strawberry-Daiquiri-Recipe-Photo-4.jpg' />
        </div>
        <div className = "drinkCards">
            <h3>METHOD</h3>
            <ul>
                <li>add ice to the blender</li>
                <li>pour strawberrylime juicesugar syrupwhite rum into the blender</li>
                <li>blend together</li>
                <li>strain into the cocktail glass</li>
                <li>garnish with strawberry</li>
            </ul>
        </div>
    </section>
  </>
)

export default Drink;