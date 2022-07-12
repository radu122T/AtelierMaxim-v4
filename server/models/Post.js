const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const PostSchema = mongoose.Schema ({
    cart:Array,
    shippingNume: String,
    shippingPrenume: String,
    shippingEmail: String,
    shippingTelefon: String,
    shippingAdresa: String,
    shippingLocalitate: String,
    shippingJudet: String,
    shippingCod: String,
    paymentNume: String,
    paymentPrenume: String,
    paymentAdresa:String,
    paymentLocalitate:String,
    paymentJudet:String,
    paymentCod:String,

})

module.exports = mongoose.model('Posts', PostSchema)