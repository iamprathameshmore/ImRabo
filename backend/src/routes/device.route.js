import { Router } from 'express';
import {
  deleteDeviceController,
  getDeviceController,
  postDeviceController,
  putDeviceController,
} from '../controller/device.controller.js';

const deviceRouter = Router();

deviceRouter.post('/', postDeviceController);
deviceRouter.get('/:userId', getDeviceController);
deviceRouter.put('/:userId/:automationId', putDeviceController);
deviceRouter.delete('/:userId/:automationId', deleteDeviceController);

export default deviceRouter;
