import "../Stylesheets/Plants.scss"

import Plant from "./Plant";
import {mockPlants} from "../Plants/mock_plants";
import { PlantProps } from "./Plant";

const Plants = () => {

  return (
    <div className="plantslist">
      {mockPlants.map((plant) => (
        <Plant key={plant.name} {...plant} />
      ))}
    </div>
  );

};

export default Plants;