const products = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
const renderProduct = (title, price) => {
    return `<div class="product-item">
        <h3> ${title}</h3>
        <p>${price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
};
const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList;
};

renderPage(products);
