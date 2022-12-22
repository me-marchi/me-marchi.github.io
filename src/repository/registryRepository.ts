import { AppDataSource } from "../database/dataSource"
import { Registry } from "../entities/Registry"
import { RegistryModel } from "../models/RegistryModel";

export class RegistryRepository {
    static async create(body: RegistryModel){
        // await AppDataSource.initialize().then(async () => {
        //     await AppDataSource.manager.save(body)
        
        // }).catch(error => console.log(error))

        const connection = await AppDataSource.initialize()

        const createdRegistry = await connection.getRepository(Registry).save(body);
        return createdRegistry
    }

    static async findAll() {
        const allRegistries = await AppDataSource.manager.find(Registry)
        return allRegistries
    }
}