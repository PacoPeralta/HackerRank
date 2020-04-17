class Ticket {
  constructor(event, price, venue) {
    this.event = event;
    this.priceRange = price;
    this.venue = venue;
  }
}

class Venue {
  constructor(name, city, state, country, address) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.country = country;
    this.address = address;
  }
}

class PriceRange {
  constructor(priceRange) {
    this.priceRange = priceRange;
  }
  getMinPrice() {
    return this.priceRange.shift();
  }

  getMaxPrice() {
    return this.priceRange.pop();
  }

  getMedPrice() {
    return this.priceRange.reduce((acc, curr) => {
      acc = acc + curr;
      return acc / this.priceRange.length;
    }, 0);
  }
}

const FOSTER_THE_PEOPLE = () => {
  const price = new PriceRange([50, 85, 120, 2500]);
  const venue = new Venue(
    'Staple Center',
    'Los Angeles',
    'California',
    'USA',
    '123 Long Drive, LA, 987778'
  );
  return new Ticket('Foster the People', price, venue);
};

export default function result() {
  return `This is the mid price: ${FOSTER_THE_PEOPLE().priceRange.getMedPrice()}`;
}
