import "../Stylesheets/Plants.scss"
import PlantProfileCard from "./PlantProfileCard";
import { useEffect, useState } from "react";
import axios from "axios";
import PlantType from "../Classes/Plant";

const Plants = () => {
  const [plants, setAllPlants] = useState<PlantType[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/all")
      .then((response) => {
        setAllPlants(response.data); // Use plain objects
      })
      .catch((error) => {
        console.log("FAILED: `axios.get` Error at line 12 or below in front-end/src/Components/GetAllPlant.jsx");
        console.log(error);
      });
  }, []);

  return (
    <div className="plantslist">
      {plants.map((p) => (
        <PlantProfileCard key={p.id} plant={p} overdue={false} />
      ))}
    </div>
  );
};

export default Plants;