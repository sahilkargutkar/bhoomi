const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");
const path = require("path");

dotenv.config({ path: "bhoomi-backend/config/config.env" });

connectDatabase();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("bhoomi-client/build")));
  app.get("*", (req, res) => {
    res.sendfile(
      path.resolve(__dirname, "bhoomi-client", "build", "index.html")
    );
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server Working on Port http://localhost:${process.env.PORT}`);
});
