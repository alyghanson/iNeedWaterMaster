//from tutorial

import axios from "axios";
import { useEffect, useState } from "react";

const GetAllPlant = () => {
  const [plant, setAllPlant] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/api/all")
    //print plant object to console
    .then((response) => {console.log(response)
      // set for display
      setAllPlant(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
    return (
      <>
        <h1>All Plants</h1>
        <ul>
        {plant && plant.map(plant => 
          <li key={plant.id}>
            <h3>ID: {plant.id} </h3>
            name: {plant.name} <br></br>
            common_name: {plant.common_name} <br></br>
            scientific_name: {plant.scientific_name} <br></br>
            description: {plant.description} <br></br>
            last_water_date: {plant.last_water_date} <br></br>
            watering_frequency_days: {plant.watering_frequency_days} <br></br>
            soil_type: {plant.soil_type} <br></br>
            plant_type: {plant.plant_type} <br></br>
            location: {plant.location} <br></br>
            last_fertilization: {plant.last_fertilization} <br></br>
          </li>
        )}
        </ul>
        
      </>
      );
  };
  
  export default GetAllPlant;