import { Request, Response } from 'express';
import { RegistryService } from '../service/registryService';

export class RegistryController {
    static async create(req: Request, res: Response) {
        try {
            const body = req.body

            const createdRegistry = await RegistryService.create({...body})

            return res.status(200).send(createdRegistry)
        } catch (error) {
            return res.status(error.status).send(error)
        }
    }
}
