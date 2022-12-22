import { RegistryRepository } from '../repository/registryRepository';
import { RegistryModel } from '../models/RegistryModel';

export class RegistryService {
    static async create(registry: RegistryModel) {
        const createdRegistry = await RegistryRepository.create({...registry})
        return createdRegistry
    }

    static async findAll() {
        const allRegistries = await RegistryRepository.findAll()
        return allRegistries
    }
}