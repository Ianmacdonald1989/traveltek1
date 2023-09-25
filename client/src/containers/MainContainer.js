import React from 'react';
import { useEffect, useState } from 'react';
import FlightList from '../components/FlightList';

const MainContainer = () => {
const [flights, setFlights] = useState([]);



useEffect(() => {
fetchFlights()
}, [])

const fetchFlights = () => {
fetch('http://localhost:9000/api/flights')
.then(response => response.json())
.then(flights => setFlights(flights));
}  

const morningFlights = flights.filter(flight => {
    const departureTime = parseInt(flight._attributes.indeparttime.split(':')[0],10);
    return departureTime < 12;
  
})

const swedenFlights = flights.filter(flight => {
    return flight._attributes.destair === 'ARN';
})

const destinationAirports = flights.reduce((destinations, flight) => {
if (!destinations[flight._attributes.destair]) {
    destinations[flight._attributes.destair] = 0;
}
destinations[flight._attributes.destair]++;
return destinations;
}, {});

const topDestinations = Object.entries(destinationAirports)
    .sort((a,b) => b[1] - a[1])
    .slice(0,10);

    const lhrToDxbFlights = flights.filter(flight => {
        return flight._attributes.depair === 'LHR' && flight._attributes.destair === 'DXB';
    });

const totalJourneyTime = lhrToDxbFlights.reduce((total, flight) => {
  const departureTime = new Date(`2018-01-01 ${flight._attributes.outdeparttime}`)
  const arrivalTime = new Date(`2018-01-02 ${flight._attributes.inarrivaletime}`)
  const journeyTime = arrivalTime - departureTime;
  return total + journeyTime;
}, 0)

const averageJourneyTime = totalJourneyTime / lhrToDxbFlights.length;

const formatMillieseconds = (millieseconds) => {
    const totalMinutes = Math.floor(millieseconds / 60000)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60 
    return `${hours} hours ${minutes} minutes`;
}








return (
<>
<p>Total Flights: {flights.length}</p>
<p>Flights to Sweden: {swedenFlights.length}</p>
<p>Average journey time from London to Dubai: {formatMillieseconds(averageJourneyTime)}</p>
<ul>
    {topDestinations.map(([airport, count]) => (
        <li key={airport}>{airport}: {count} flights</li>
    ))}
    </ul>



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
