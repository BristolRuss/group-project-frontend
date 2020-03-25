import React from 'react';
import { Link } from 'react-router-dom';

class SpiritCard extends React.Component {
  componentDidMount() {
      this.props.getData();
  }

  render() {
      return (
        <>
          <header className="subHeader">
            <h3>CHOOSE YOUR SPIRIT</h3>
          </header>
          <section className = "spiritSection">
            {this.props.spirits.map(spirit => (
              <Link key={spirit.id} to = {`/spirit/${spirit.id}`} >
                  <div className = "card spiritCard spiritColour">
                      <h5>{spirit.name.toUpperCase()}</h5>
                  </div>
              </Link>))}
          </section>
        </>
      )
  }
}

export default SpiritCard;