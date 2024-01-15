import { Router } from 'express';
import {config} from "dotenv";

config();

import homeRouter from './home';
import productsRouter from "./products";

const router: Router = Router();


const baseUrl: string = process.env.url as string || '/api/v1/ionic/';

router.use(`${baseUrl}home`, homeRouter);
router.use(`${baseUrl}products`, productsRouter);

export default router;
