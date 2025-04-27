document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Sample product data (in a real app, this would come from your Spring Boot backend)
    const products = [
        {
            id: 1,
            name: "Premium Water Bottle",
            price: 24.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115442.png",
            category: "Bottles"
        },
        {
            id: 2,
            name: "Water Filter System",
            price: 129.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115528.png",
            category: "Filters"
        },
        {
            id: 3,
            name: "Hydration Pack",
            price: 49.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115547.png",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Mineral Water (6-pack)",
            price: 12.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115605.png",
            category: "Beverages"
        },
        {
            id: 5,
            name: "Smart Water Tracker",
            price: 39.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115623.png",
            category: "Tech"
        },
        {
            id: 6,
            name: "Eco-Friendly Water Jug",
            price: 34.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115641.png",
            category: "Containers"
        },
        {
            id: 7,
            name: "Alkaline Water (12-pack)",
            price: 18.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115657.png",
            category: "Beverages"
        },
        {
            id: 8,
            name: "Portable Water Purifier",
            price: 79.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115714.png",
            category: "Filters"
        },
        {
            id: 9,
            name: "Portable Water Purifier",
            price: 79.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115730.png",
            category: "Filters"
        },
        {
            id: 10,
            name: "Portable Water Purifier",
            price: 79.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115746.png",
            category: "Filters"
        },
        {
            id: 11,
            name: "Premium Water Bottle",
            price: 24.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115442.png",
            category: "Bottles"
        },
        {
            id: 12,
            name: "Water Filter System",
            price: 129.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115528.png",
            category: "Filters"
        },
        {
            id: 13,
            name: "Hydration Pack",
            price: 49.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115547.png",
            category: "Accessories"
        },
        {
            id: 14,
            name: "Mineral Water (6-pack)",
            price: 12.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115605.png",
            category: "Beverages"
        },
        {
            id: 15,
            name: "Smart Water Tracker",
            price: 39.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115623.png",
            category: "Tech"
        },
        {
            id: 16,
            name: "Eco-Friendly Water Jug",
            price: 34.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115641.png",
            category: "Containers"
        },
        {
            id: 17,
            name: "Alkaline Water (12-pack)",
            price: 18.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115657.png",
            category: "Beverages"
        },
        {
            id: 18,
            name: "Portable Water Purifier",
            price: 79.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115714.png",
            category: "Filters"
        },
        {
            id: 19,
            name: "Portable Water Purifier",
            price: 79.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115730.png",
            category: "Filters"
        },
        {
            id: 20,
            name: "Portable Water Purifier",
            price: 79.99,
            image: "/Fotos/Captura de pantalla 2025-04-27 115746.png",
            category: "Filters"
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