const startDB = require("../../boot/database.js");
const { HotelOffers } = require("../../models/HotelOffers.js");
const { HotelOffer } = require("../../models/HotelOffer.js");
const { Hotel } = require("../../models/Hotel.js");


/**
 * Make any changes you need to make to the database here
 */
async function up() {

  // Write migration here
  await startDB({
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const offers = await HotelOffer.find();
  const hotels = await Hotel.find();

  const hotelOffers = [];

  for (let index = 0; index < 4; index++) {
    
    hotelOffers.push({
      type: "hotel-offers",
      hotel: hotels[index],
      offers: offers.slice(0, index + 1)
    })
  }

  try {

    for (const hotelOffer of hotelOffers) {
      await HotelOffers.create(hotelOffer);
    }

  } catch (e) {
    console.log('Error: \t', e.message);
  }
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {

  // Write migration here
  await startDB({
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await HotelOffers.deleteMany({});

}

module.exports = { up, down };
