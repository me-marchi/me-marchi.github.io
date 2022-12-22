import { Router } from 'express';
import { RegistryController } from '../controllers/registryController';

const registryRouter = Router()

registryRouter.route('/').post(RegistryController.create)
registryRouter.route('/').get(RegistryController.findAll)

export { registryRouter }