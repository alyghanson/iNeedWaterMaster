
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
        const lastWateredDate = new Date(last_water_date);
        const nextWaterDate = new Date(
            /**add the days to the last water date */
            lastWateredDate.getTime()+ watering_frequency_days * 24 * 60 * 60 * 1000
            );
        const lastFertalizedDate = new Date(last_fertilization);

        /** need to format back to strings*/
        const formattedLastWateredDate = lastWateredDate.toLocaleDateString();
        const formattedNextWaterDate = nextWaterDate.toLocaleDateString();
        const formattedLastFertilizedDate = lastFertalizedDate.toLocaleDateString();
      

        return (
        <div className="plant-card">
        <h2>{name}</h2>
        <h3><em>{scientific_name}</em></h3>
        <p>{description}</p>
        <p>Last watered: {formattedLastWateredDate}</p>
        <p>Next water date: {formattedNextWaterDate}</p>
        <p>Water every {watering_frequency_days} days</p>
        <p>Soil type: {soil_type}</p>
        <p>Location: {location}</p>
        <p>Last fertilized: {formattedLastFertilizedDate}</p>
        <p>Plant type: {plant_type}</p>
      </div>)
};

export default Plant;