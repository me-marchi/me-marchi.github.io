import { config } from 'dotenv';
config()

import cors from 'cors';
import "reflect-metadata";

import express from 'express';
const app = express()

import { registryRouter } from './routes/registryRoute';
app.use(express.json())
app.use(registryRouter)
app.use(cors())

app.listen(5500, () => console.log('Server running'))

export { app }

