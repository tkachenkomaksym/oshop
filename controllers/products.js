const products = [
  {
    name: 'product1',
    price: 100,
    currency: 'UAH',
    photo:  'https://fakeimg.pl/400x400/',
    description: 'any description'
  }
];

exports.get_products = function(req, res, next) {
  res.json(products);
};
