const express = require("express");
const db = require("./utils/database");
require("dotenv").config();
const initModels = require("./models/initModels");
const apiRoutes = require("./routes/");
require("dotenv").config();


const app = express();
app.use(express.json())
const PORT = process.env.PORT || 8000;
initModels();


app.get("/",(req, res) => {
  res.send("Server connected")
})

db.authenticate()
  .then(()=> console.log("Database connected"))
  .catch((error) => console.error(error));

db.sync()
  .then(() => console.log("Database synchronized"))
  .catch((error) => console.error(error));

apiRoutes(app);

app.listen(PORT, ()=> console.log(`Server on ${PORT}`));