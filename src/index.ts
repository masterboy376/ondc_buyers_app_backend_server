// imports
import express, { Express, Request, Response } from 'express';

// routes
import userRoutes from './routes/user.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';

// important variables
const app:Express = express();
const port:number = 3000;

// endpoints
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

// server init 
app.listen(port, ()=>{
    console.log(`The app is running at url http://localhost:${port}/`);
});
