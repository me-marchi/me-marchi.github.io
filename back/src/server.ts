import { config } from 'dotenv';
config()

import "reflect-metadata";
import express from 'express';
const app = express()
import "./database/dataSource"

app.listen(3000, () => console.log('Server running'))

module.exports = app

