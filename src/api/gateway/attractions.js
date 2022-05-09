// see https://www.planetware.com/tourist-attractions-/delhi-ind-delhi-delhi.htm
const attractions = [
  {
    id: '2f41453f-9911-4c9a-b52c-5b352cefbca9',
    name: 'The Red Fort',
    description:
      'The beautiful Red Fort (Lal Qila) was built by Shah Jahan in 1648 and served as the seat of Mughal power until 1857. This stunning structure, with its tall, red sandstone walls covers an area of more than two square kilometers, the entirety of which is crescent shaped and surrounded by a moat.',
    address: 'Netaji Subhash Marg, Chandni Chowk, New Delhi, Delhi 110006, India',
    site: 'https://www.indiaculture.nic.in/red-fort-complex',
    rank: 1,
  },
  {
    id: 'bab8e74f-0270-4aef-bb56-b3651ff348de',
    name: 'India Gate',
    description:
      'Looking a little like the famous Arc de Triomphe in Paris, the equally impressive India Gate is a magnificent stone arch built as a memorial to Indian soldiers killed in WWI. An eternal flame burns beneath the massive structure, and its walls are inscribed with the names of more than 90,000 soldiers who died in the conflict.',
    address: 'Rajpath, India Gate, New Delhi, Delhi, India',
    site: null,
    rank: 6,
  },
  {
    id: '5aad8025-f847-49f6-83ae-12188834ce0b',
    name: 'Gandhi Smriti',
    description:
      "Numerous references can be found to Mahatma Gandhi throughout Delhi, a testament to the man's legacy. Of the many attractions related to the famed leader of the Indian independence movement, perhaps the best is Gandhi Smriti (Gandhi Remembrance), a museum housed in the property where he was assassinated in 1948.",
    address: '5 Tees January Marg, New Delhi, Delhi, India',
    site: 'http://www.gandhismriti.gov.in/',
    rank: 12,
  },
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(attractions))));
};

exports.findById = id => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(attractions)).find(attraction => attraction.id == id))
  );
};
