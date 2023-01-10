import { AppDataSource } from "../database/dataSource"
import { Registry } from "../entities/Registry"
import { RegistryModel } from "../models/RegistryModel";

export class RegistryRepository {
    static async create(body: RegistryModel){        
        const createdRegistry = await AppDataSource.getRepository(Registry).save(body);
        return createdRegistry
    }

    static async findAll() {
        const allRegistries = await AppDataSource.manager.find(Registry)
        return allRegistries
    }
}