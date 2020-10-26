if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
  
let port = process.env.PORT
let mongoUrl = process.env.MONGODB
  
if (process.env.NODE_ENV === 'test') {
  port = process.env.TESTPORT
  mongoUrl = process.env.TESTMONGODB
}
  
module.exports = {
  mongoUrl,
  port
}