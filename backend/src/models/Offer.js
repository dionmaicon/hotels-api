import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import mongooseLong  from 'mongoose-long'
mongooseLong(mongoose);

const OfferSchema = Schema({
    type: {
        type: String,
        enum: ['reservation'],
        defautl: 'reservation'
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

OfferSchema.set('collection', 'Offers');

OfferSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

const Offer = model('Offer', OfferSchema, 'Offer')
export {
    OfferSchema,
    Offer
}
