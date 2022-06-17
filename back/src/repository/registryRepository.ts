import { AppDataSource } from "../database/dataSource"
import { Registry } from "../entities/Registry"

export class RegistryRepository {
    static async create(body){
        // await AppDataSource.initialize().then(async () => {
        //     await AppDataSource.manager.save(body)
        
        // }).catch(error => console.log(error))

        const connection = await AppDataSource.initialize()

        const createdRegistry = await connection.getRepository(Registry).save(body);
        return createdRegistry
    }

    static async findAll() {
        console.log("Loading users from the database...")

        const registries = await AppDataSource.manager.find(Registry)
        console.log("Loaded users: ", registries)
    }
}