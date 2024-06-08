import express from 'express';
import { militaryController } from '../controllers/militaryController.js';


const militaryRouter = express.Router();


militaryRouter.get("/mechanized_troops", militaryController.mechanized_troops);
militaryRouter.get("/army_fly", militaryController.army_fly);
militaryRouter.get("/ppo", militaryController.ppo);
militaryRouter.get("/tank_troops", militaryController.tank_troops);
militaryRouter.get("/special_force", militaryController.special_force);


export {
    militaryRouter  
};