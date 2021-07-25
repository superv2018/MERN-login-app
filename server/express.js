import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.route'

//comment devBundle out before production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()


//comment out before production
devBundle.compile(app)



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/', userRoutes)
app.use('/', authRoutes)

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error": err.name + ": " + err.message})
    } else if (err) {
        res.status(400).json({"error": err.name + ": " + err.message})
        console.log(err)
    }
})

app.get('/', (req, res) => {
    res.status(200).send(template())
})


export default app;