import config from './../config/config.js'
import app from './express'
import mongoose from 'mongoose'

//database connection
mongoose.Promise = global.Promise
mongoose.connect(config.mongoURI,  { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoURI}`)
})

/* MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected successfully to mongodb server')
        db.close()
    }
}) */

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})
