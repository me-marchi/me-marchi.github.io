import { DataSource } from "typeorm"
import { Registry } from '../entities/Registry'
import { RegistryRepository  } from "../repository/registryRepository";

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Registry],
    migrationsTableName: "migrations",
    migrations: ["migrations/*.js"]
});

const registry = async() => {
    await RegistryRepository.create()
};
registry()

// AppDataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })

export { AppDataSource }