const products = [
  {
    name: 'product1',
    price: 100,
    currency: 'UAH',
    photo:  'https://fakeimg.pl/400x400/',
    description: 'any description'
  }
];

module.exports = function(req, res, next) {
  res.json(products);
};

