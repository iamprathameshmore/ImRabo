import { Router } from 'express';
import {
  deleteIntegrationController,
  getIntegrationController,
  postIntegrationController,
  putIntegrationController,
} from '../controller/integration.controller.js';

const integrationRouter = Router();

integrationRouter.post('/', postIntegrationController);
integrationRouter.get('/:userId', getIntegrationController);
integrationRouter.put('/:userId/:automationId', putIntegrationController);
integrationRouter.delete('/:userId/:automationId', deleteIntegrationController);

export default integrationRouter;
