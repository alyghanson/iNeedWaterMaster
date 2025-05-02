import pg from'pg';
import express from 'express';
import bodyParser from 'body-parser';

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
const createTable = async () => { 
    await client.query(`CREATE TABLE IF NOT EXISTS users 
    (id serial PRIMARY KEY, name VARCHAR (255) UNIQUE NOT NULL, 
    email VARCHAR (255) UNIQUE NOT NULL, age INT NOT NULL);`)
  };
// comment out to test routes
  createTable();

  //Parse the POST method:
  const app = express();
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
      res.status(500).send('Error');
      console.log(error);
    } 
  });

  //create POST method to get info from form
  //TODO chenge to plant form
  app.post('/api/form', async (req, res) => {
    try {
      const name  = req.body.name;
      const email = req.body.email;
      const age   = req.body.age;
  
  const response = await client.query(`INSERT INTO users(name, email, age) VALUES ('${name}', '${email}', ${age});`);
      if(response){
        res.status(200).send(req.body);
      }
    } catch (error) {
      res.status(500).send('Error');
      console.log(error);
    }    
  });

  //specify port for listener: port 3000 here
  app.listen(3000, () => console.log(`App running on port 3000.`));