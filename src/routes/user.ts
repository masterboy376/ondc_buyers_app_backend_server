import express, { Express, Request, Response } from 'express';

const router = express.Router();

export const createUser = router.get('/createUser', (req:Request, res:Response)=>{
    res.status(200).send("all is well");
});

export const changePassword = router.get('/changePassword', (req:Request, res:Response)=>{
    res.status(200).send("all is well");
});
