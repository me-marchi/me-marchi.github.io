import { AppDataSource } from "../database/dataSource"
import { Registry } from "../entities/Registry"

export class RegistryRepository {
    static async create(){
        AppDataSource.initialize().then(async () => {

            console.log("Inserting a new registry into the database...")
            const registry = new Registry()
            registry.firstName = "Daniel"
            registry.lastName = "Craig"
            registry.weight = '70'
            registry.height = '1.80'
            await AppDataSource.manager.save(registry)
            console.log("Saved a new user with id: " + registry.id)

            console.log("Loading users from the database...")
            const registries = await AppDataSource.manager.find(Registry)
            console.log("Loaded users: ", registries)

        }).catch(error => console.log(error))
    }
}