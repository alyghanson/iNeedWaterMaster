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
      console.log("FAILED: `axios.get` Error at line 12 or below in front-end/src/Components/GetAllPlant.jsx");
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
          </li>
        )}
        </ul>
        
      </>
      );
  };
  
  export default GetAllPlant;