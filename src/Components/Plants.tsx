import Plant from "./Plant";
import {mockPlants} from "../Plants/mock_plants";
import { PlantProps } from "./Plant";

const Plants = () => {

  return (
    <div className="plants-list">
      {mockPlants.map((plant) => (
        <Plant key={plant.name} {...plant} />
      ))}
    </div>
  );
};

export default Plants;