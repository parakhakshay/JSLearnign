// Fetch product data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        displayProducts(data);
    }).catch(error => console.error(error));

// Function to display product data on the web page
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <tr border="1px"> 
                <td>${product.id} | </td>
                <td>${product.title} |</td>
                <td>${product.body}</td>
            </tr>
        `;
        productContainer.appendChild(productCard);
    });
}