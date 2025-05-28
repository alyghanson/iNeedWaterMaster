import axios from "axios";
import { useState } from "react";

const PostPlant = () => {
  
    const [plant, setPlant] = useState({
      name: '',
      commonName: '',
      scientificName: '',
    })
    const createPlant = async () => {
      console.log("made it to line 13 in front-end/PostPlant.jsx");
      await axios.post("http://localhost:3001/api/form", 
      plant,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((response) => {
        // Log what was sent for debugging
        console.log("Full form response (before setting): ", response.data);
        setPlant({      
          name: '',
          commonName: '',
          scientificName: '',
        })
        // console.log(response)
        return alert("User Created: " + `${JSON.stringify(response.data, null,4)}`);
        })
      .catch((err) => {
        return alert(err);
      });
    }
    const onChangeForm = (e) => {
      if (e.target.name === 'name') {
        setPlant({...plant, name: e.target.value});
      } else if (e.target.name === 'commonName') {
        setPlant({...plant, commonName: e.target.value});
      } else if (e.target.name === 'scientificName') {
        setPlant({...plant, scientificName: e.target.value});
      }
  }
    return (
      <div >
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
                            onChange={(e) => onChangeForm(e)} 
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                          />
                      </div>
                      <div>
                          <label>Common Name</label>
                          <input 
                            type="text" 
                            value={plant.commonName}
                            onChange={(e) => onChangeForm(e)} 
                            name="commonName" 
                            id="commonName" 
                            placeholder="Common Name" 
                          />
                      </div>
                  </div>
                  <div>
                      <div>
                          <label htmlFor="exampleInputEmail1">Latin Name</label>
                          <input 
                            type="text" 
                            value={plant.scientificName}
                            onChange={(e) => onChangeForm(e)} 
                            name="scientificName" id="scientificName" 
                            placeholder="Scientific Name" 
                          />
                      </div>
                  </div>
                  <button type="button" onClick= {()=>createPlant()}>Create</button>
              </form>
              </div>
          </div>
      </div>
      );
  };
  
  export default PostPlant;