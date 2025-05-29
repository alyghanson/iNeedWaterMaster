import axios from "axios";
import { useState } from "react";

const PostPlant = () => {
  // Use snake_case to match backend/database
  const [plant, setPlant] = useState({
    name: '',
    common_name: '',
    scientific_name: '',
    description: '',
    last_water_date: '',
    watering_frequency_days: '',
    soil_type: '',
    plant_type: '',
    location: '',
    last_fertilization: ''
  });

  const createPlant = async () => {
    // console.log("made it to line 13 in front-end/PostPlant.jsx");
    await axios.post(
      "http://localhost:3001/api/form",
      plant,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      console.log("Full form response (before setting): ", response.data);
      setPlant({
        name: '',
        common_name: '',
        scientific_name: '',
        description: '',
        last_water_date: '',
        watering_frequency_days: '',
        soil_type: '',
        plant_type: '',
        location: '',
        last_fertilization: ''
      });
      return alert("Plant created successfully!");
    })
    .catch((err) => {
      return alert(err);
    });
  };

  const onChangeForm = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div>
        <div>
          <h1>Create Plant</h1>
          <form>
            <div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={plant.name}
                  onChange={onChangeForm}
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label>Common Name</label>
                <input
                  type="text"
                  value={plant.common_name}
                  onChange={onChangeForm}
                  name="common_name"
                  id="common_name"
                  placeholder="Common Name"
                />
              </div>
              <div>
                <label>Scientific Name</label>
                <input
                  type="text"
                  value={plant.scientific_name}
                  onChange={onChangeForm}
                  name="scientific_name"
                  id="scientific_name"
                  placeholder="Scientific Name"
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  value={plant.description}
                  onChange={onChangeForm}
                  name="description"
                  id="description"
                  placeholder="Description"
                />
              </div>
              <div>
                <label>Last Water Date</label>
                <input
                  type="date"
                  value={plant.last_water_date}
                  onChange={onChangeForm}
                  name="last_water_date"
                  id="last_water_date"
                />
              </div>
              <div>
                <label>Watering Frequency (days)</label>
                <input
                  type="number"
                  value={plant.watering_frequency_days}
                  onChange={onChangeForm}
                  name="watering_frequency_days"
                  id="watering_frequency_days"
                  placeholder="Watering Frequency (days)"
                />
              </div>
              <div>
                <label>Soil Type</label>
                <input
                  type="text"
                  value={plant.soil_type}
                  onChange={onChangeForm}
                  name="soil_type"
                  id="soil_type"
                  placeholder="Soil Type"
                />
              </div>
              <div>
                <label>Plant Type</label>
                <input
                  type="text"
                  value={plant.plant_type}
                  onChange={onChangeForm}
                  name="plant_type"
                  id="plant_type"
                  placeholder="Plant Type"
                />
              </div>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  value={plant.location}
                  onChange={onChangeForm}
                  name="location"
                  id="location"
                  placeholder="Location"
                />
              </div>
              <div>
                <label>Last Fertilization</label>
                <input
                  type="date"
                  value={plant.last_fertilization}
                  onChange={onChangeForm}
                  name="last_fertilization"
                  id="last_fertilization"
                />
              </div>
            </div>
            <button type="button" onClick={createPlant}>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostPlant;