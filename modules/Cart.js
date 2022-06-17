const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userid: { type: Number, required: true, unique: true},
    products: [
        {
            productId:{ type: String},

            quantity:{
                type: Number,
                default: 1,
             }

        }
    ],
    
},
{timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema); 