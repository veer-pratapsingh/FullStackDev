const express = requrie('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log("Server Connected");
})
    
    