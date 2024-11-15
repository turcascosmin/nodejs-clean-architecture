import { Router } from 'express';
import { CarController } from '../controllers/CarController';
const router = Router();

const carController = new CarController();

router.get('/cars', carController.getAll.bind(carController));
router.post('/cars', carController.create.bind(carController));
router.get('/cars/:id', carController.getById.bind(carController));
router.put('/cars/:id', carController.update.bind(carController));
router.delete('/cars/:id', carController.delete.bind(carController));

export { router as carRoutes };
