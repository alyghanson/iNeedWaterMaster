import "../Stylesheets/Plants.scss"

import Plant from "./PlantProfileCard";
import {plants} from "../Plants/mock_plants";

const Plants = () => {

  return (
    <div className="plantslist">
      {plants.map((p) => (
        <Plant key={p.name} plant={p} overdue={false} />
      ))}
    </div>
  );

};

export default Plants;