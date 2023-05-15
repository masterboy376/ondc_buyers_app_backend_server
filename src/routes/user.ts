import express, { Express, Request, Response } from 'express';

const router = express.Router();

// routes
//---start---

router.get('/createUser', (req:Request, res:Response)=>{
    res.status(200).send("all is well");
});

router.get('/changePassword', (req:Request, res:Response)=>{
    res.status(200).send("all is well, sort of");
});

//---end---

export default router;
