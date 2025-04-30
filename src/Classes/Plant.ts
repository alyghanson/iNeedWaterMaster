

class Plant {
    name: string;
    /**Common Name -> words to be displayed on action card */
    commonName: string;
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
    /**computed next watering date */
    nextWaterDate: string;

    constructor (params: Record <string, any>) {
        this.name = params.name;
        this.commonName = params.commonName;
        this.scientificName = params.scientific_name;
        this.description = params.decription;
        this.formattedLastWaterDate = params.formattedLast_water_date;
        this.wateringFrequencyDays = params.watering_frequency_days;
        this.soilType = params.soil_type;
        this.plantType = params.plant_type;
        this.location = params.location;
        this.formattedLastFertilization = params.last_fertilization;
        this.nextWaterDate = this.getNextWaterDateString();
    };

    
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

    get daysUntilWater() {
        /**Computes days left before watering is needed. */
        const currentDate = new Date();
        // Turn date string into DateTime
        const lastWaterDate = new Date(this.formattedLastWaterDate);
        // compute
        const days = currentDate.getTime() - lastWaterDate.getTime();

        // Check to make sure it is in the correct format here might not be number of days yet
        console.log(days)
        return days;
    }
};
export default Plant;
