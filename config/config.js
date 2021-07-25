const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8081,
    jwtSecret: process.env.JWT_SECRET || 'JULY2021',
    mongoURI: process.env.MONGODB_URI || process.env.MONGO_HOST ||
    'mongodb+srv://' + (process.env.IP || 'socialapp') + ':' +
    (process.env.MONGO_PORT || '704nBvBUaAMNQaxY@mern.imxgc.mongodb.net') +
    '/full-stack-db?retryWrites=true&w=majority'
}

export default config