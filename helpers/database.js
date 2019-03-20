const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.DATABASECONECTION

mongoose.connect(URI, {useNewUrlParser: true } )
    .then(db => console.log("BD conectada"))
    .catch(err => console.error(err))

module.exports = mongoose