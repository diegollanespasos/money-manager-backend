const express = require('express');
const transactions = require('./routes/transactions');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

connectDB();
const app = express();

app.use(express.json());
app.use('/api/transactions', transactions);

app.listen(process.env.PORT, () => console.log('Listening on PORT 5000'));