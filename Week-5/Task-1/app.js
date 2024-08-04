// Initialize cart
let cart = {
    "Product 1": { price: 10.99, quantity: 0 },
    "Product 2": { price: 19.99, quantity: 0 },
    "Product 3": { price: 5.99, quantity: 0 }
};

// Function to update the cart display and total cost
function updateCart() {
    const cartContainer = document.querySelector('#box2');
    const cartContent = cartContainer.querySelector('.cart');
    let totalCost = 0;

    // Clear existing cart content
    cartContent.innerHTML = '';

    // Add each item in the cart to the display
    for (const [productName, item] of Object.entries(cart)) {
        if (item.quantity > 0) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';

            itemDiv.innerHTML = `
                <span>${productName} - $${item.price.toFixed(2)}</span>
                <span class="middle">
                    <button class="decrease" data-product="${productName}">-</button>
                    ${item.quantity}
                    <button class="increase" data-product="${productName}">+</button>
                </span>
                <span>
                    <button class="remove" data-product="${productName}">Remove</button>
                </span>
            `;

            cartContent.appendChild(itemDiv);
            totalCost += item.price * item.quantity;
        }
    }

    // Update total cost
    document.querySelector('.total').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('#box1 .product button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.previousElementSibling.textContent.split(' - ')[0];
        if (cart[productName]) {
            cart[productName].quantity++;
            updateCart();
        }
    });
});

// Add event listeners to cart buttons
document.querySelector('#box2').addEventListener('click', event => {
    const target = event.target;
    const productName = target.getAttribute('data-product');

    if (target.classList.contains('increase')) {
        if (cart[productName]) {
            cart[productName].quantity++;
            updateCart();
        }
    } else if (target.classList.contains('decrease')) {
        if (cart[productName] && cart[productName].quantity > 0) {
            cart[productName].quantity--;
            updateCart();
        }
    } else if (target.classList.contains('remove')) {
        if (cart[productName]) {
            cart[productName].quantity = 0;
            updateCart();
        }
    }
});

// Initial update to display cart items and total amount
updateCart();
