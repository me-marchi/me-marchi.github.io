import { Request, Response } from 'express';
import { RegistryService } from '../service/registryService';

export class RegistryController {
    static async create(req: Request, res: Response) {
        try {
            const body = req.body

            const createdRegistry = await RegistryService.create({...body})

            return res.status(200).send(createdRegistry)
        } catch (error) {
            return res.status(error.status||500).send(error)
        }
    }

    static async findAll(req: Request, res: Response) {
        try {
            const allRegistries = await RegistryService.findAll()
            return res.status(200).send(allRegistries)
        } catch(error) {
            console.log(error)
            return res.status(error.status||500).send(error)
        }
    }
}
