import React from 'react';

const AgeVerification = ({verified}) => {
    return (
    <section>
        <h1 className="subHeader">Warning! You must be over the legal drinking age in your country to access this website.</h1>
        <div>
            <h3 className = "subHeader">Please select an option below:</h3>
        </div>
        <button onClick = {verified} className="btn verification subHeader" style={{margin: "30px", width: "10vw", padding: "1rem"}}>Yes, I am old enough to enter</button>
        <a href = "https://www.youtube.com/watch?v=TazHNpt6OTo" rel="noopener noreferrer" target="_blank"><button className="btn verification subHeader" style={{margin: "30px", width: "10vw", padding: "1rem"}}>No, take me away</button></a>
    </section>
    )
}
export default AgeVerification;