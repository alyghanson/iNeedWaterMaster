import pg from'pg';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//start conection to postgres
const { Client } = pg;

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

//Comment out to test routes
client.connect();
console.log("Connected to Postgres database");
//Create Plant table
//This will need a migration system in the future
//We drop the table if it exists and create a new one just for building the app, 
//need to change this in the future because we want the data to persist
const dropTable = async () => {
  await client.query(`DROP TABLE IF EXISTS plants;`);
  console.log("Dropped plants table, TODO change this in the future to not drop table");
};
const createTable = async () => {
  console.log("Creating plants table");
  await client.query(`CREATE TABLE IF NOT EXISTS plants (
    id serial PRIMARY KEY, 
    name VARCHAR (255) NOT NULL, 
    common_name VARCHAR (255) NOT NULL, 
    scientific_name VARCHAR (255) NOT NULL,
    description TEXT NOT NULL,
    last_water_date DATE NOT NULL,
    watering_frequency_days INT NOT NULL,
    soil_type VARCHAR (255) NOT NULL,
    plant_type VARCHAR (255) NOT NULL,
    location VARCHAR (255) NOT NULL,
    last_fertilization DATE NOT NULL
  );`)
};


// comment out to test routes
  dropTable()
  createTable();

  const app = express();
  //Cors to allow cross-origin requests
  app.use(cors());
  //Parse the POST method:
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //add hello world route
  //TODO delete when fixed
  app.get('/api', (req, res) => res.send('Hello World!'));

  //create GET method to get information from table
  //TODO change to correct table
  app.get('/api/all', async (req, res) => {
    try {
      // const response = await client.query(`SELECT * FROM users`);
      const response = await client.query(`SELECT * FROM plants`);
      
      if(response){
        res.status(200).send(response.rows);
      }
      
    } catch (error) {
      console.log("FAILED: `app.get` Error at line 52 or below in back-end/index.js" );
      res.status(500).send('Error');
      console.log(error);
    } 
  });

  //create POST method to get info from form
  //TODO add plant form / table / all the things, use this as a template
  app.post('/api/form', async (req, res) => {
    // console.log("made it to line 61 in back-end/index.js");
    try {
      // Use camelCase for JS variables
      const name = req.body.name;
      const common_name = req.body.common_name;
      const scientific_name = req.body.scientific_name;
      const description = req.body.description;
      const last_water_date = req.body.last_water_date;
      const watering_frequency_days = req.body.watering_frequency_days;
      const soil_type = req.body.soil_type;
      const plant_type = req.body.plant_type;
      const location = req.body.location;
      const last_fertilization = req.body.last_fertilization;

      // Use parameterized query to prevent SQL injection
      const response = await client.query(
        `INSERT INTO plants(
          name, 
          common_name, 
          scientific_name, 
          description, 
          last_water_date, 
          watering_frequency_days, 
          soil_type, 
          plant_type, 
          location, 
          last_fertilization
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
        [
          name,
          common_name,
          scientific_name,
          description,
          last_water_date,
          watering_frequency_days,
          soil_type,
          plant_type,
          location,
          last_fertilization
        ]
      );

      if (response) {
        res.status(200).send(req.body);
      }
    } catch (error) {
      console.log("FAILED: `app.post` Error at line 87 or below in back-end/index.js");
      res.status(500).send('Error');
      console.log(error);
    }
  });

  //specify port for listener: port 3000 here
  app.listen(3001, () => console.log(`App running on port 3001.`));