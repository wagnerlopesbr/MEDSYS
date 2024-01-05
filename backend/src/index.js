const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const listsRoutes = require("./routes/lists");
const doctorsRoutes = require("./routes/doctors");
const patientsRoutes = require("./routes/patients");

app.use(cors());
app.use(express.json());

app.use("/api/lists", listsRoutes);
app.use("/api/doctors", doctorsRoutes);
app.use("/api/patients", patientsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
