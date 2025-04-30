import "../Stylesheets/Plant.scss"
import flower from "../Pictures/vintage-illustration-watering-can.png"
import Plant from '../Classes/Plant';
/**Props for Plant card that defines what the JSON file contains. 
Eventually this will describe a database */

// /**Plant card props */
export interface PlantProfileProps {
    plant: Plant;
    overdue: boolean;
}

// Defines the actions and what they contain -> must formate into dates for the next water date to exist
const PlantProfileCard = ({plant}: PlantProfileProps) => {
        
    return (
        <div className="card">
            <div className="text-box">
                <div className="name">{plant.name}</div>
                <img src={flower} className="plantPicture"></img>
                <div className="content">{plant.commonName}</div>
                <div className="content">{plant.scientificName}</div>
                <div className="content">{plant.location}</div>
                <div className="content">Water next on: {plant.formattedLastWaterDate}</div>
            </div>
        </div>);
};

export default PlantProfileCard;