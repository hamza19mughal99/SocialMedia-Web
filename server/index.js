import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/posts.js";

const app = express();

app.use('/', postRoutes);

app.use(bodyParser.json({ limits: '30mb', extended: true}));
app.use(bodyParser.urlencoded({ limits: '30mb', extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mernProject:mernProject123@cluster0.r4emm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => {
app.listen(PORT,
    () => console.log(`Server listening on ${PORT}`))
}).catch((err) => {
    console.log(err)
})