document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    function updateCart() {
        const cartContainer = document.querySelector('.cart-items');
        const orderSummary = document.querySelector('.order-summary');
        cartContainer.innerHTML = '';
        let totalItems = 0;
        let totalAmount = 0;
        let discount = 3.00;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalItems += item.quantity;
            totalAmount += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - ${item.size} - $${itemTotal.toFixed(2)}</p>
                <div class="quantity-control">
                    <button class="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase">+</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);

            cartItem.querySelector('.decrease').addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                    updateCart();
                }
            });

            cartItem.querySelector('.increase').addEventListener('click', () => {
                item.quantity++;
                updateCart();
            });
        });

        orderSummary.innerHTML = `
            <p>Items: $${totalAmount.toFixed(2)}</p>
            <p>Discounts: -$${discount
