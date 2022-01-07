require('dotenv').config()
const password = process.env.MONGO_PASSWORD

module.exports = {
  dbURL: `mongodb+srv://aviorkahalani:${password}@cluster0.dnii4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
}
