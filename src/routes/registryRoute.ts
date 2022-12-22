import { Router } from 'express';
import { RegistryController } from '../controllers/registryController';

const registryRouter = Router()

registryRouter.route('/').post(RegistryController.create)
registryRouter.route('/registry').get(RegistryController.findAll)

export { registryRouter }