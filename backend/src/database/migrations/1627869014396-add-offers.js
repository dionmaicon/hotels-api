const startDB = require("../../boot/database.js");
const { HotelOffer } = require("../../models/HotelOffer.js");

/**
 * Make any changes you need to make to the database here
 */
async function up() {

  // Write migration here
  await startDB({
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const offers = [];

  for (let index = 1; index < 5; index++) {
    const inDate = new Date();
    const outDate = new Date();
    
    outDate.setDate(inDate.getDate() + 1);

    const formatDate = (d) => {
      return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)
    }

    offers.push({
      type: "hotel-offer",
      checkInDate: formatDate(inDate),
      checkOutDate: formatDate(outDate),
      roomQuantity: index,
      price: {
        currency: "USD",
        total: (129.99 * index),
        base: (120.00 * index)
      }
    })
  }

  try {

    for (const offer of offers) {
      await HotelOffer.create(offer);
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

  await HotelOffer.deleteMany({});

}

module.exports = { up, down };
