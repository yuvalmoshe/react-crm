let mongoose = require ('mongoose')

let clientSchema = new mongoose.Schema({
    name: String,
    country: String,
    firstContact: String,
    emailType: String,
    sold: Boolean,
    owner: String
});

let Client = mongoose.model('client', clientSchema)

module.exports = Client;