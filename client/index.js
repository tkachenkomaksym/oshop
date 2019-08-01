
fetch('/products')
  .then(function(response) {
    return response.json();
  })
  .then(function(products) {
    renderProducts(products)
  });


function renderProducts(products) {
  const container = document.querySelector("#container");

  products.forEach( product => {
    const element = createProductElement(product);
    container.appendChild(container);
  });

  function createProductElement(products) {

    const product = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("span");
    const price = document.createElement("span");
    const description = document.createElement("p");
    // const order = document.createElement("button");

    image.src = product.photo;
    name.innerText = product.name;
    description.innerText = description.name;
    price.innerText = product.price + ' ' + product.currency;

    product.appendChild(image);

    return product;
    // нужен он клик хендлер, который буте отправлять с кнопки заказ
  }
}


//выбрать контейнер
//создать эелемент
// поместить в него данные из массива продуктов
