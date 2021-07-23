import path from 'path'
import express from 'express'
//comment devBundle out before production

import { MongoClient } from 'mongodb'
import devBundle from './devBundle'
import template from './../template'

const app = express()
//comment out before production
devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 8081
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

const url = process.env.MONGODB_URI || 'mongodb+srv://socialapp:704nBvBUaAMNQaxY@mern.imxgc.mongodb.net/full-stack-db?retryWrites=true&w=majority'

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected successfully to mongodb server')
        db.close()
    }
})