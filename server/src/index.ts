import dotenv from 'dotenv';
dotenv.config();
import app from './server';
import mongoose from 'mongoose';

const port = process.env.PORT

const CONNECTION_URL = process.env.DATABASE

mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(port, ()=> {
        console.log(`application is running on http://localhost:${port}`)
    })
}).catch((error) => {
    console.log(error)
})
