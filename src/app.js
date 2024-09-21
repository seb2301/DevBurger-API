import express from 'express'; 
const bodyParser = require('body-parser');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Parse incoming JSON requests
    this.app.use(bodyParser.json()); 
    this.app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded data
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Define your other routes here
  }
}

export default new App().app;
