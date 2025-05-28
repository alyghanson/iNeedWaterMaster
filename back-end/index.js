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

//Create table
//TODO: switch to correct information PLANTS NOT USERS
// const createTable = async () => { 
//     await client.query(`CREATE TABLE IF NOT EXISTS users 
//     (id serial PRIMARY KEY, name VARCHAR (255) NOT NULL, 
//     email VARCHAR (255) NOT NULL, age INT NOT NULL);`)
//   };

//Create Plant table
const createTable = async () => {
  await client.query(`CREATE TABLE IF NOT EXISTS plants 
    (id serial PRIMARY KEY, 
    name VARCHAR (255) NOT NULL, 
    common_name VARCHAR (255) NOT NULL, 
    scientific_name VARCHAR (255) NOT NULL,
    description TEXT NOT NULL,
    last_water_date DATE NOT NULL,
    watering_frequency_days INT NOT NULL,
    soil_type VARCHAR (255) NOT NULL,
    plant_type VARCHAR (255) NOT NULL,
    location VARCHAR (255) NOT NULL,
    last_fertilization DATE NOT NULL);`)
};


  // {
  //   "name": "rowhjlpnqweq",
  //   "common_name": "Cactus",
  //   "scientific_name": "Cactaceae family",
  //   "description": "Thrives in bright, indirect light and adds a tropical feel.",
  //   "last_water_date": "2025-04-29",
  //   "watering_frequency_days": 3,
  //   "soil_type": "Well-draining peat-based mix",
  //   "plant_type": "Desert succulent",
  //   "location": " Downstairs Bedroom",
  //   "last_fertilization": "2025-04-15"
  // },



// comment out to test routes
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
      const response = await client.query(`SELECT * FROM users`);
      
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
    console.log("made it to line 61 in back-end/index.js");
    try {
      const name  = req.body.name;
      const email = req.body.email;
      const age   = req.body.age;
  
  const response = await client.query(`INSERT INTO users(name, email, age) VALUES ('${name}', '${email}', ${age});`);
      if(response){
        res.status(200).send(req.body);
      }
    } catch (error) {
      console.log("FAILED: `app.post` Error at line 71 or below in back-end/index.js" );
      res.status(500).send('Error');
      console.log(error);
    }    
  });

  //specify port for listener: port 3000 here
  app.listen(3001, () => console.log(`App running on port 3001.`));