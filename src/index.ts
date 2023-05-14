import express, { Express, Request, Response } from 'express';
import { createUser, changePassword } from './routes/user.js';

const app:Express = express();
const port:number = 3000;

app.use('/user', [ createUser, changePassword ]);

app.listen(port, ()=>{
    console.log(`the app is running at port ${port}`);
});
