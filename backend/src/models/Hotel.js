import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import mongooseLong  from 'mongoose-long'
mongooseLong(mongoose);

const pointSchema = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const HotelSchema = Schema({
    type: {
        type: String,
        enum: ['hotel'],
        required: true,
        default: "hotel"
    },
    hotelId: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[A-Z0-9]{8}$/.test(v);
            },
            message: props => `${props.value} is not a valid hotelID`
        },
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[1-5]$/.test(v);
            },
            message: props => `${props.value} is not a valid rating`
        },
    },
    description: {
        lang: {
            type: String,
            validate: {
                validator: function (v) {
                    return /[a-zA-Z0-9-]{2,5}/.test(v);
                },
                message: props => `${props.value} is not a valid language`
            },
        },
        text: {
            type: String
        }
    },
    location: {
        type: pointSchema,
        required: true
    },
    address: {
        cityName: {
            type: String,
            required: true
        },
        countryCode: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[A-Z]{2}$/.test(v);
                },
                message: props => `${props.value} is not a valid hotelID`
            },
        },
        stateCode: {
            type: String
        }
    }
}, {
    timestamps: true,
});

HotelSchema.set('collection', 'Hotel');

HotelSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
const Hotel = model('Hotel', HotelSchema, 'Hotel') 
export { HotelSchema, Hotel };