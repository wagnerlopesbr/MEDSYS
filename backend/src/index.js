const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const listsRoute = require("./routes/lists");
const employeesRoute = require("./routes/employees");
const patientsRoute = require("./routes/patients");
const usersRoute = require("./routes/users");
const sectorsRoute = require("./routes/sectors");
const roomsRoute = require("./routes/rooms");
const db_usersRoute = require("./db/db_users");

app.use(cors());
app.use(express.json());

app.use("/api/lists", listsRoute);
app.use("/api/lists/employees", employeesRoute);
app.use("/api/lists/patients", patientsRoute);
app.use("/api/lists/users", usersRoute);
app.use("/api/lists/sectors", sectorsRoute);
app.use("/api/lists/rooms", roomsRoute);
app.use("/db_users", db_usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
