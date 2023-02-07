const products = [
  {
    "colors": ["Red", "Black"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "Crusher ANC Personalized",
    "price": 499.00,
    "imageUrl": [
      "crusher1.png",
      "crusher2.webp",
      "crusher3.webp",
      "crusher4.webp",
      "crusher5.webp",
      "crusher6.webp",
      "crusher7.webp",
      "crusher8.webp",
    ],
    "description": "Behold the most immersive headphones ever made. Crusher ANC combines Adjustable Sensory Bass, Active Noise Cancellation, and Personal Sound to deliver a deeper audio experience that’s flawlessly tuned for your unique hearing.",
    "altTxt": "Photo of black headphones",
    "sizes": ["small", "medium", "large"],
    //break and put on new line?
    "productInfo": "Adjustable Sensory Bass Digital Active Noise Cancellationn Personal Sound Bluetooth Wireless Technology Up to 24 hours of Battery and Rapid Charge"
  },
  {
    "colors": ["black", "pink", "yellow", "green"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "NEW! JIB™ TRUE",
    "price": 99.00,
    "imageUrl": [
      "jib1.webp",
      "jib2.webp",
      "jib3.webp",
      "jib4.webp",
      "jib5.webp",
    ],
    
    "description": "Truly wireless. Perfectly simple. Sesh™ Evo makes it easier than ever to go truly wireless. With an impressive set of features that makes the price look even smaller, there’s no reason to hold out.",
    "altTxt": "Photo of black wireless headphones and case",
    "sizes": ["small"],
    "productInfo": "- True Wireless via Bluetooth® 5 - Up to 24 Hours Total Battery. 5 Hours in Bud + 19 Hours in Case- Rapid Charge: 10 Minutes = 2 Hours - IP55 Sweat, Water, and Dust Resistant- Call, Track, and Volume Control - Activate Assistant- Single Button Controls - Use Either Bud Solo- Track and Find if Lost via Tile®- Music, Movie, and Podcast EQ Modes"
  },
  {
    "colors": ["blue", "Black", "grey"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "Indy Fuel True Wireless Earbud",
    "price": 299.00,
    "imageUrl": [
      "indy1.webp",
      "indy2.webp",
      "indy3.webp",
      "indy4.webp",
      "indy5.webp",
    ],
    "description": "True Freedom. Effortless charging. Indy™ Fuel lets you go totally wireless—even charging the case. The true alternative to overpriced, precious, homogenous earbuds that you’re afraid to use, or lose, or both.",
    "altTxt": "Photo of black headphones",
    "sizes": ["small", "large"],
    //break and put on new line?
    "productInfo": "- True Wireless via Bluetooth® 5 - Up to 30 Hours Total Battery - 6 Hours in Bud + 24 Hours in Case - Rapid Charge: 10 Minutes = 2 Hours- Wireless Charging Case- IP55 Sweat, Water, and Dust Resistant - Call, Track, and Volume Control - Activate Assistant - Use Either Bud Solo  - Track and Find if Lost via Tile® - Music, Movie, and Podcast EQ Modes - Ambient Listening Mode"
  },
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(products)).find(product =>
      product._id == id)
    )
  );
}




