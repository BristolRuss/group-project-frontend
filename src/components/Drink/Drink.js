import React from 'react'

const Drink = () => (
  <>
    <header className="subHeader">
      <h3>STRAWBERRY DAIQUIRI</h3>
    </header>
    <section className = "spiritSection" style = {{
      backgroundImage: 'url("https://www.thespruceeats.com/thmb/Wkv4Vu76pPHtdgJ52Jn7ffcikL0=/2048x1152/smart/filters:no_upscale()/strawberry-daiquiri-recipes-759821_13_preview1-5b05f448ba61770036fbae90.jpeg")'
    }}>
        <div className = "drinkCards primary">
            <h3>INGREDIENTS</h3>
            <ul>
                <li>2 parts white rum</li>
                <li>1 part sugar syrup</li>
                <li>1 part lime juice</li>
                <li>4 pieces strawberry</li>
                <li>ice cubes</li>
            </ul>
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