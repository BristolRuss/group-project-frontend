import React from 'react';
import { Link } from 'react-router-dom';

const SpiritCard = ({id, name }) => (
  <>
    <header className="subHeader">
      <h3>CHOOSE YOUR SPIRIT</h3>
    </header>
    <section className = "spiritSection">
      <Link to = "/spirit/1" >
        <div className = "spiritCard spiritColour">
          <h5>RUM</h5>
        </div>
      </Link>
      <div className = "spiritCard spiritColour">
        <h5>RUM</h5>
      </div>
      <div className = "spiritCard spiritColour">
        <h5>RUM</h5>
      </div>
      <div className = "spiritCard spiritColour">
        <h5>RUM</h5>
      </div>
      <div className = "spiritCard spiritColour">
        <h5>RUM</h5>
      </div>
      <div className = "spiritCard spiritColour">
        <h5>RUM</h5>
      </div>
    </section>
  </>
)

export default SpiritCard;