

class Plant {
    /**Name -> words to be displayed on action card */
    name: string;
    /**Sci Name -> to be displayed in italics */
    scientificName: string;
    /** Descr. -> summary of info */
    description: string;
    /**water date -> determines when the next water date is */
    formattedLastWaterDate: string;
    /**Water freq. -> added to water date to determine next one */
    wateringFrequencyDays: number;
    /**Soil Type -> describes soil, will be hidden info on plant card*/
    soilType: string;
    /**plant type -> determines auto pic */
    plantType: string;
    /**location -> describes where plant is */
    location: string;
    /**last fert -> date last done, not used in calculations*/
    formattedLastFertilization: string;
    /**computed  */
    daysUntilWater: number;
    /**computed next watering date */
    nextWaterDate: string;

    constructor (params: Record <string, any>) {
        this.name = params.name;
        this.scientificName = params.scientific_name;
        this.description = params.decription;
        this.formattedLastWaterDate = params.formattedLast_water_date;
        this.wateringFrequencyDays = params.watering_frequency_days;
        this.soilType = params.soil_type;
        this.plantType = params.plant_type;
        this.location = params.location;
        this.formattedLastFertilization = params.last_fertilization;
        this.daysUntilWater = this.getDaysUntilWater();
        this.nextWaterDate = this.getNextWaterDateString();

    };
    //         /** turn date strings into Dates for calculations */
    //         const lastWateredDate = new Date(last_water_date);
    //         const nextWaterDate = new Date(
    //             /**add the days to the last water date */
    //             lastWateredDate.getTime()+ watering_frequency_days * 24 * 60 * 60 * 1000
    //             );
    //         /** not used yet, but incase needed... */
    //         const lastFertalizedDate = new Date(last_fertilization);
    
    //         /** need to format back to strings*/
    //         const formattedLastWateredDate = lastWateredDate.toLocaleDateString();
    //         const formattedNextWaterDate = nextWaterDate.toLocaleDateString();
    //         const formattedLastFertilizedDate = lastFertalizedDate.toLocaleDateString();
    
    getNextWaterDate(): Date {
        /**computes the next water date from days between watering and last water date */
        const lastWaterDate = new Date(this.formattedLastWaterDate);
        // Add last date to days between watering to compute next date (days * hours * mins * sec * mil.sec)
        const nextWaterDate = new Date(lastWaterDate.getTime() + this.wateringFrequencyDays * 24 * 60**2 * 1000);
        return nextWaterDate;
    };

    getNextWaterDateString(): string {
        /**Retruns string format of next water date */
        const nextWaterDate = this.getNextWaterDate();
        return nextWaterDate.toLocaleDateString();
    };

    getDaysUntilWater(): number {
        /**Computes days left before watering is needed. */
        const currentDate = new Date();
        // Turn date string into DateTime
        const lastWaterDate = new Date(this.formattedLastWaterDate);
        // compute
        const days = currentDate.getTime() - lastWaterDate.getTime();
        
        return days;
    };
};
