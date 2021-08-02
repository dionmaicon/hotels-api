const mongoose = require('mongoose');
require('mongoose-long')(mongoose);

const HotelOfferSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['hotel-offer'],
        defautl: 'hotel-offer'
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    roomQuantity: {
        type: Number,
        min: 1,
        max: 9,
    },
    price: {
        currency: {
            type: String
        },
        total: {
            type: Number,
            min: 0
        },
        base: {
            type: Number,
            min: 0
        }
    }
}, {
    timestamps: true
});

HotelOfferSchema.set('collection', 'HotelOffers');

HotelOfferSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});


module.exports = {
    HotelOfferSchema,
    HotelOffer: mongoose.model('HotelOffer', HotelOfferSchema, 'HotelOffer')
}
