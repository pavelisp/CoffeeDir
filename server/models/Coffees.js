const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let coffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    roaster: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    farm: {
      type: String,
    },
    description: {
      type: String,
    },
    flavours: {
      type: Array,
      of: String
    },
    price: {
      type: Number,
    },
    link: {
      type: String,
    },
    score: {
      type: Number,
      default: 0
    }, 
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
},
{timestamps: true});

module.exports = mongoose.model('Coffee', coffeeSchema);