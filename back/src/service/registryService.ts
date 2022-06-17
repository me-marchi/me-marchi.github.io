import { RegistryRepository } from '../repository/registryRepository';

export class RegistryService {
    static async create(registry) {
        const createdRegistry = await RegistryRepository.create({...registry})
        return createdRegistry
    }
}