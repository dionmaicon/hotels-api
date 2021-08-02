const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
const mongoosePaginate = require('mongoose-paginate-v2');

const { HotelSchema } = require('./Hotel.js');
const { HotelOfferSchema } = require('./HotelOffer.js');

const HotelOffersSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['hotel-offers']
  },
  hotel: {
    type: HotelSchema,
    required: true
  },
  offers: [HotelOfferSchema],
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

module.exports = {
  HotelOffers: mongoose.model('HotelOffers', HotelOffersSchema, 'HotelOffers')
}
