const startDB = require("../../boot/database.js");
const { Hotel } = require("../../models/Hotel.js");

/**
 * Make any changes you need to make to the database here
 */
async function up () {
  
  // Write migration here
  await startDB({
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const hotels = [];
  const countries =  [ 'BR', 'ES', 'IT', 'PT' ];

  for (let index = 1; index < 5; index++) {
    hotels.push({
      type: "hotel",
      hotelId: `HOTELID${index}`,
      name: `AWESOME HOTEL ${ countries[index - 1] }`,
      rating: "" + index,
      description: {
        lang: 'BR',
        text: "Um grande hotel"
      },
      location: {
        type: "Point",
        coordinates: [ -168, 54]
      },
      address: {
        cityName: `City C${index}`,
        countryCode: countries[index - 1]
      }
    })    
  }

  try {
    
    for (const hotel of hotels) {
      await Hotel.create(hotel);
    }
    
  } catch (e) {
    console.log('Error: \t', e.message);
  }
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down () {
  // Write migration here
  await startDB({
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await Hotel.deleteMany({});

}

module.exports = { up, down };
