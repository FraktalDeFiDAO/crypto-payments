import express from 'express'
import { log } from 'console'
import routes from './routes/index.js'
import {config as dotEnvConfig} from 'dotenv'
import config from './config/index.js'
dotEnvConfig()

const app = express()

app.use(routes)

app.listen(config.port, config.host, () => log(`Listening on ${host}:${port}`))
