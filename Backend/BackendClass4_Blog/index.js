const express = requrie('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.json());

