import express from 'express';
import middleware from "./src/middlewares/middleware.js";
const app = express();

import routes from "./src/routes/index.js"
const port = 3000;

app.use(
  express.json(),
  middleware, 
  routes
  );

app.listen(port, () => {
  console.log("Server is running on port " + port);
});