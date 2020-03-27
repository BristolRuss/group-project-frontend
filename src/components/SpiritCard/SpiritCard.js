import React from 'react';
import { Link } from 'react-router-dom';
import EasterEgg from '../EasterEgg/EasterEgg'

class SpiritCard extends React.Component {
  constructor(){
    super();
    this.state = {
        u: false,
        n: false,
        o: false
    };
    this.handleU = this.handleU.bind(this);
    this.handleN = this.handleN.bind(this);
    this.handleO = this.handleO.bind(this);
}
  handleU(){
    this.setState({
        u: true
    })
  }

  handleN(){
    this.setState({
        n: true
    })
  }

  handleO(){
    this.setState({
        o: true
    })
  }
  // <Link className="ee" to = "/easterEgg"></Link>

  render() {
    let {u, n, o} = this.state;

    if(u && n && o === true){
      return <EasterEgg />
    }
    else {
      return (
        <>
          <header className="subHeader">
            <h3>CHO<span onClick = {this.handleO}>O</span>SE YO<span onClick = {this.handleU}>U</span>R POISO<span onClick = {this.handleN}>N</span></h3>
          </header>
          <section className = "spiritSection">
            {this.props.spirits.map(spirit => (
              <Link key={spirit.id} to = {`/spirit/${spirit.id}`} >
                  <div className = "card spiritCard spiritColour" style = {{
                    background: `url(${spirit.image})`, backgroundSize: "cover", opacity: "85%"
                  }}>
                      <h5 className="drinkCardH5">{spirit.name.toUpperCase()}</h5>
                  </div>
              </Link>))}
          </section>
        </>
      )
    }
  }
}

export default SpiritCard;