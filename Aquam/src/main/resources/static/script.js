document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Sample product data (in a real app, this would come from your Spring Boot backend)
    const products = [
        {
            id: 1,
            name: "Botella con dibujo",
            price: 12.50,
            image: "/Fotos/Captura de pantalla 2025-04-27 115442.png",
            category: "Bottles"
        },
        {
            id: 2,
            name: "Pack Duo Color",
            price: 22.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 224815.png",
            category: "Bottles"
        },
        {
            id: 3,
            name: "Pack Duo Color",
            price: 22.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 224834.png",
            category: "Bottles"
        },
        {
            id: 4,
            name: "Pack Duo Color",
            price: 22.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 224914.png",
            category: "Bottles"
        },
        {
            id: 5,
            name: "Botella básica",
            price: 10.50,
            image: "/Fotos/Captura de pantalla 2025-04-27 224931.png",
            category: "Bottles"
        },
       {
            id: 6,
            name: "Pack Bienvenida",
            price: 14.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 224931.png",
            category: "Bottles"
        },
        {
            id: 7,
            name: "Pack Duo",
            price: 20.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 225002.png",
            category: "Bottles"
        },
        {
            id: 8,
            name: "Pack Duo",
            price: 20.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 225020.png",
            category: "Bottles"
        },
        {
            id: 9,
            name: "Pack familiar",
            price: 29.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 225037.png",
            category: "Bottles"
        },
        {
            id: 10,
            name: "Pack familiar",
            price: 29.95,
            image: "/Fotos/Captura de pantalla 2025-04-27 225053.png",
            category: "Bottles"
        }
    ];

    // Load products
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            cartCount++;
            updateCartCount();


            console.log(`Added product ID ${productId} to cart`);
        });
    });

    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        cartCountElement.textContent = cartCount;
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
});