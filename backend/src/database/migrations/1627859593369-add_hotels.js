import { Hotel } from "../../models/Hotel.js";
/**
 * Make any changes you need to make to the database here
 */
async function up () {
  // Write migration here
  const hotels = [];
  const countries =  [ 'BR', 'ES', 'IT', 'PT' ];
  const langMap = (country) => {
    switch (country) {
      case 'BR':
        return 'pt-BR';
      case 'ES':
        return 'es-ES';
      case 'IT':
        return 'it-IT';
      case 'PT':
        return 'pt-PT';
      default:
        return 'en-US';
    }
  }

  for (let index = 1; index < 5; index++) {
    hotels.push({
      type: "hotel",
      hotelId: `HOTELID${index}`,
      name: `AWESOME HOTEL ${ countries[index - 1] }`,
      rating: "" + index,
      description: {
        lang: langMap(countries[index - 1]),
        text: "Awesome hotel description"
      },
      location: {
        type: "Point",
        coordinates: [ -168, 54]
      },
      address: {
        cityName: `City ${index}`,
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
  
  await Hotel.deleteMany({});

}

export { up, down };
