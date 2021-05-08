const express = require('express');
const transactions = require('./routes/transactions');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/transactions', transactions);

app.listen(process.env.PORT, () => console.log(`Server listening on PORT: ${process.env.PORT}`));