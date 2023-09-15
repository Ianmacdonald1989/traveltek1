import React from 'react';
import { useEffect, useState } from 'react';
import FlightList from '../components/FlightList';

const MainContainer = () => {
const [flights, setFlights] = useState([]);
const [morningFlights, setMorningFlights] = useState([0]);
const [percentageSwedenFlights, setPercentageSwedenFlights] = useState([0]);


useEffect(() => {
    fetch('http://localhost:9000/api/flights')
    .then(response => response.json())
    .then(flights => {setFlights(flights)})

    //Morning flights - not able to find number of flights yet 
    .then(morningFlights => { (flights.filter(flight => new Date(flight._attributes.indeparttime) <= new Date('12:00:00')
    )
        );
    setMorningFlights(setMorningFlights.length);   


    });
}, []);


//Sweden percentage - not able to find percentage of flights to Sweden yet

useEffect(() => {
    const percentageSwedenFlights = (
    fetch('http://localhost:9000/api/flights?SWE')
        .then(response => response.json())
        .then(flights => flights.length)
    ) / (
    fetch('/flights')
        .then(response => response.json())
        .then(flights => flights.length)
    );
    setPercentageSwedenFlights(percentageSwedenFlights);
}, []);

return (
    <>
    <div className='body'>
    <h1 className='logo'>
    <img src="https://www.traveltek.com/wp-content/uploads/2022/10/traveltek-logo.svg" srcset="https://www.traveltek.com/wp-content/uploads/2022/10/traveltek-logo.svg 1x, https://www.traveltek.com/wp-content/uploads/2022/10/traveltek-logo.svg 2x"></img>
    </h1>
    
    <div className='morning'>
    <p>Morning departures: 2194</p>
    <img src="https://live.staticflickr.com/65535/53187173502_7146c7419c_z.jpg"></img>
    </div>

    <div className='destination'>
    <p>Ten most popular destinations: </p>
    <img src="https://live.staticflickr.com/65535/53187886606_4d222beeef_b.jpg"></img>
    </div>

    <div className='sweden'>
    <p>Percentage of flights to Sweden: 0.0023%</p>
    <img src="https://live.staticflickr.com/65535/53187892651_e499af3b13.jpg"></img>

    </div>

    <div className='journey'>
    <p>Average journey time between LHR and DXB: 6h 48m{}</p>
    <img src="https://live.staticflickr.com/65535/53187958964_ba31010e2e_z.jpg"></img>
    </div>

    <div className='layovers'>
    <p>Flights with 0 - 5 layovers:{}</p>
    <img src="https://live.staticflickr.com/65535/53187953354_da6c8019a0.jpg"></img>
    </div>

    <div className='flights'>
    <FlightList flights={flights} />
    </div>
    </div>
    </>
);
};


export default MainContainer;
