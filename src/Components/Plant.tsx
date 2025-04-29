import "../Stylesheets/Plant.scss"
import flower from "../Pictures/vintage-illustration-watering-can.png"
/**Props for Plant card that defines what the JSON file contains. 
Eventually this will describe a database */

/**Plant card props */
export interface PlantProps {
    /**Name -> words to be displayed on action card */
    name: string;
    /**Sci Name -> to be displayed in italics */
    scientific_name: string;
    /** Descr. -> summary of info */
    description: string;
    /**water date -> determines when the next water date is */
    last_water_date: string;
    /**Water freq. -> added to water date to determine next one */
    watering_frequency_days: number;
    /**Soil Type -> describes soil, will be hidden info on plant card*/
    soil_type: string;
    /**plant type -> determines auto pic */
    plant_type: string;
    /**location -> describes where plant is */
    location: string;
    /**last fert -> date last done, not used in calculations*/
    last_fertilization: string;
}

// Defines the actions and what they contain -> must formate into dates for the next water date to exist
const Plant = ({name, scientific_name, description, last_water_date, watering_frequency_days, soil_type, 
    plant_type, location, last_fertilization}: PlantProps) => {
        
        /** turn date strings into Dates for calculations */
        const lastWateredDate = new Date(last_water_date);
        const nextWaterDate = new Date(
            /**add the days to the last water date */
            lastWateredDate.getTime()+ watering_frequency_days * 24 * 60 * 60 * 1000
            );
        /** not used yet, but incase needed... */
        const lastFertalizedDate = new Date(last_fertilization);

        /** need to format back to strings*/
        const formattedLastWateredDate = lastWateredDate.toLocaleDateString();
        const formattedNextWaterDate = nextWaterDate.toLocaleDateString();
        const formattedLastFertilizedDate = lastFertalizedDate.toLocaleDateString();

        /**TODO days left until water (can be used for sorting) need to build
         * function to handle this. must handle negative days and make it zero.
         * Mark with URGENT
         */


        return (
        <div className="card">
            <div className="text-box">
                <div className="name">{name}</div>
                <img src={flower} className="plantPicture"></img>
                <div className="content">{scientific_name}</div>
                <div className="content">{location}</div>
                <div className="content">Water next on: {formattedLastWateredDate}</div>

            </div>
        </div>);
};

export default Plant;