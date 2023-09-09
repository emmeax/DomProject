document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    let quantity = 0;
    const price = 125.00;
    const oldPrice = 250.00;
    const cart = [];

    // DOM elements
    const quantityElement = document.querySelector('.amount');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const addToCartButton = document.querySelector('.add_btn');
    const cartCount = document.querySelector('.cart-count');

    // Function to update the quantity and total price
    function updateQuantity() {
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }

    // Function to update the total price based on the quantity
    function updateTotalPrice() {
        const totalPrice = price * quantity;
        document.querySelector('.now').textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Event listener for the minus button
    minusButton.addEventListener('click', function () {
        if (quantity > 0) {
            quantity--;
            updateQuantity();
        }
    });

    // Event listener for the plus button
    plusButton.addEventListener('click', function () {
        quantity++;
        updateQuantity();
    });

    // Event listener for adding to the cart
    addToCartButton.addEventListener('click', function () {
        if (quantity > 0) {
            // Ask for confirmation before adding to cart
            const isConfirmed = window.confirm("Are you sure you want to add this item to the cart?");
            if (isConfirmed) {
                const item = {
                    name: 'Fall Limited Edition Sneakers',
                    price: price,
                    quantity: quantity
                };
                cart.push(item);
                updateCartCount();
                // You can also store 'cart' in localStorage to persist data
            }
        }
    });

    // Function to update the cart count
    function updateCartCount() {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalQuantity;
    }

    // Initialize cart count
    updateCartCount();
});













