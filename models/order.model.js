const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    order :{
        type : String
    },
    total :{
        type : String
    }
})



const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
