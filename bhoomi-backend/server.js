const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

dotenv.config({ path: "bhoomi-backend/config/config.env" });

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server Working on Port http://localhost:${process.env.PORT}`);
});
