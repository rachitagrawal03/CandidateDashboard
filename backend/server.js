const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const candidateRouter = require('./routes/candidateRoutes')

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();


const PORT = 4000 || process.env.PORT;

app.use('/candidate', candidateRouter);

app.get('/', (req, res)=>{
    res.status(200).json("server working");
})

app.listen(PORT, ()=>{
    console.log(`server running on url: http://localhost:${PORT}`)
})



