const products = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
const renderProduct = (product, img = `img/sale.png/200x15`) => {
    return `<div class="product-item">
    <img src ="{img}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <button class="buy-btn"><p class="buy">Купить</p></button>
    </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML =
        (list.map(product => renderProduct(product))).join('');
};


renderPage(products);
