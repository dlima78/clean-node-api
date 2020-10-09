const uri = 'mongodb://localhost:27017/clean-node-api'

export default {
  mongoUrl: process.env.MONGO_URL || uri,
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'trfj@_d:Wsd'
}
