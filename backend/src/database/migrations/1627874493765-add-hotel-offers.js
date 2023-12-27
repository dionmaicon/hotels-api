
import { HotelOffers } from "../../models/HotelOffers.js";
import { Offer } from "../../models/Offer.js";
import { Hotel } from "../../models/Hotel.js";


/**
 * Make any changes you need to make to the database here
 */
async function up() {

  const offers = await Offer.find();
  const hotels = await Hotel.find();

  const hotelOffers = [];

  for (let index = 0; index < hotels.length; index++) {
    
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

  await HotelOffers.deleteMany({});

}

export { up, down };
