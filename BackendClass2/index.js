const express =  require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server Connected")
});

app.get('/', (req,res) => {
    res.send("Hello The Server is Connected. App is in buliding Stage")
});