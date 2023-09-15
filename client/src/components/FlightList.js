//accessing flight list by id and presenting on page 

import React from "react"


const FlightList = ({ flights }) => {
return (
    <div>
        <h1 className="list">
            All Flights
            </h1>
    <ul> 
 <select className="dropdown">
  {flights.map((flight, id) => (
    <option key={id} value={flight._id}>{flight._id}</option>
  ))}
</select>
    </ul>
    </div>
)
}

export default FlightList