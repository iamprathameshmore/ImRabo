import { Router } from 'express';
import {
  deleteAutomationController,
  getAutomationController,
  postAutomationController,
  putAutomationController,
} from '../controller/automation.controller.js';

const automationRouter = Router();

automationRouter.post('/', postAutomationController);
automationRouter.get('/:userId', getAutomationController);
automationRouter.put('/:userId/:automationId', putAutomationController);
automationRouter.delete('/:userId/:automationId', deleteAutomationController);

export default automationRouter;
