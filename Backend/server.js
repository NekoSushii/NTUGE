const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000;
const cors = require('cors')

/* cors routing */
/* var corsOptions = {
    origin: "http://localhost:5000"
} */
app.use(cors({origin: "http://localhost:5000"}))
app.use(express.urlencoded({ extended: true }));
//routing
require('./app/routes/routes')(app)
app.listen(port, () => console.log(`Listening on port ${port}`));
//database
const db = require('./app/config/firebase')

/* display */
app.get("/", (req, res) => {
    res.json({ message: `connect to port ${port}` });
  });