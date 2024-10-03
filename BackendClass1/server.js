//Server Instantiate
const express = require('express');
const app = express();

//used to parse req.body in express —> PUT or POSTI
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});

//Routes
app.get('/', (reqest,response) => {
    response.send("Hello are you there?? ANS yes i'm here")
});

app.post('/api/cars', (req, res) =>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully")
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(() => {console.log("Connection Successful")})
.catch((error) => {console.log("Received an error")});


