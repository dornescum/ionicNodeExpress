import {Router} from 'express';

import {getAllProducts, getProductById, getProductsByCategory} from "../controllers/ProductsController";


const router = Router();

router.get('/', getAllProducts);

router.get('/:pid', getProductById);

router.get('/category/:name', getProductsByCategory);

export default router;
