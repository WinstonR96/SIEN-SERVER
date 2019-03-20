const mongoose = require('mongoose')

const URI = 'mongodb://localhost/sien'

mongoose.connect(URI, {useNewUrlParser: true } )
    .then(db => console.log("BD conectada"))
    .catch(err => console.error(err))

module.exports = mongoose