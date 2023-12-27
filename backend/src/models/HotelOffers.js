import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import mongooseLong  from 'mongoose-long'
mongooseLong(mongoose);

import mongoosePaginate from 'mongoose-paginate-v2';

import { OfferSchema } from './Offer.js';
import { HotelSchema } from './Hotel.js';

const HotelOffersSchema = Schema({
  type: {
    type: String,
    enum: ['hotel-offers']
  },
  hotel: {
    type: HotelSchema,
    required: true
  },
  offers: [OfferSchema],
  self: {
    type: String
  }
}, {
  timestamps: true
});

HotelOffersSchema.set('collection', 'HotelOffers');

HotelOffersSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

HotelOffersSchema.plugin(mongoosePaginate);

export const HotelOffers = model('HotelOffers', HotelOffersSchema, 'HotelOffers');
