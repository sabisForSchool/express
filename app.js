import express from 'express';
const app = express();

import routes from "./src/routes/index.js"
const port = 3000;

app.use(
  express.json(), 
  routes
  );

app.listen(port, () => {
  console.log("Server is running on port " + port);
});