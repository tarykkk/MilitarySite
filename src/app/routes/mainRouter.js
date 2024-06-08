import express from 'express';
import { mainController } from '../controllers/mainController.js';


const mainRouter = express.Router();


mainRouter.get("/", mainController.home);
mainRouter.get("/about_us", mainController.about);
mainRouter.get("/news", mainController.news);
mainRouter.get("/article/:id", mainController.article);


export {
  mainRouter  
};