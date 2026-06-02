// Product Database
const products = [
    { id: 1, name: 'Classic Crew Neck T-Shirt', category: 't-shirt', color: 'black', size: ['xs', 's', 'm', 'l', 'xl', 'xxl'], price: 29.99, oldPrice: 39.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', description: 'Premium quality classic t-shirt in timeless black. Perfect for everyday wear.', rating: 4.5, reviews: 248, stock: 15, badge: 'sale' },
    { id: 2, name: 'Premium Hoodie', category: 'hoodie', color: 'navy', size: ['s', 'm', 'l', 'xl'], price: 59.99, oldPrice: 79.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Comfortable and stylish navy hoodie with premium fabric.', rating: 4.8, reviews: 356, stock: 22, badge: 'new' },
    { id: 3, name: 'Modern Graphic Tee', category: 't-shirt', color: 'white', size: ['m', 'l', 'xl'], price: 34.99, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&q=80', description: 'Modern graphic design on premium white t-shirt.', rating: 4.3, reviews: 189, stock: 8, badge: null },
    { id: 4, name: 'Slim Fit Jacket', category: 'jacket', color: 'black', size: ['s', 'm', 'l', 'xl', 'xxl'], price: 89.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&q=80', description: 'Sleek black slim fit jacket for a modern look.', rating: 4.6, reviews: 412, stock: 5, badge: null },
    { id: 5, name: 'Casual Chino Pants', category: 'pants', color: 'gray', size: ['28', '30', '32', '34', '36', '38'], price: 49.99, oldPrice: 69.99, image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&q=80', description: 'Comfortable casual chino pants in neutral gray.', rating: 4.4, reviews: 201, stock: 18, badge: 'sale' },
    { id: 6, name: 'Athletic Shorts', category: 'shorts', color: 'blue', size: ['xs', 's', 'm', 'l', 'xl'], price: 39.99, image: 'https://images.unsplash.com/photo-1549887534-7eeb1d757f2b?w=500&q=80', description: 'High-performance athletic shorts for active lifestyle.', rating: 4.5, reviews: 167, stock: 20, badge: null },
    { id: 7, name: 'Oversized Sweatshirt', category: 'hoodie', color: 'gray', size: ['s', 'm', 'l', 'xl', 'xxl'], price: 54.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Cozy oversized gray sweatshirt for comfort.', rating: 4.7, reviews: 289, stock: 12, badge: 'new' },
    { id: 8, name: 'V-Neck T-Shirt', category: 't-shirt', color: 'red', size: ['xs', 's', 'm', 'l', 'xl'], price: 24.99, oldPrice: 34.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', description: 'Elegant red v-neck t-shirt for casual elegance.', rating: 4.2, reviews: 145, stock: 0, badge: 'sale' },
    { id: 9, name: 'Denim Jacket', category: 'jacket', color: 'blue', size: ['s', 'm', 'l', 'xl'], price: 79.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&q=80', description: 'Classic blue denim jacket that never goes out of style.', rating: 4.6, reviews: 334, stock: 10, badge: null },
    { id: 10, name: 'Polo Shirt', category: 't-shirt', color: 'white', size: ['s', 'm', 'l', 'xl', 'xxl'], price: 44.99, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&q=80', description: 'Professional white polo shirt for smart casual.', rating: 4.4, reviews: 223, stock: 16, badge: null },
    { id: 11, name: 'Cargo Pants', category: 'pants', color: 'black', size: ['28', '30', '32', '34', '36'], price: 59.99, image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&q=80', description: 'Practical cargo pants with multiple pockets.', rating: 4.3, reviews: 198, stock: 14, badge: null },
    { id: 12, name: 'Relaxed Fit Hoodie', category: 'hoodie', color: 'white', size: ['m', 'l', 'xl', 'xxl'], price: 64.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Relaxed white hoodie perfect for lounging.', rating: 4.5, reviews: 267, stock: 7, badge: 'new' }
];

// State Management
const state = {
    filteredProducts: [...products],
    cart: [],
    wishlist: [],
    filters: {
        category: ['all'],
        color: [],
        size: [],
        price: 200,
        availability: ['all']
    }
};

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productsCount = document.getElementById('productsCount');
const noResults = document.getElementById('noResults');
const filterCheckboxes = document.querySelectorAll('input[data-filter]');
const clearFiltersBtn = document.querySelector('.clear-filters');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const sortBy = document.getElementById('sortBy');
const universalSearch = document.getElementById('universalSearch');
const productModal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.querySelector('.close-cart');
const cartItems = document.getElementById('cartItems');
const subtotal = document.getElementById('subtotal');
const shipping = document.getElementById('shipping');
const total = document.getElementById('total');
const cartBadge = document.querySelector('#cartBtn .badge');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistBadge = document.querySelector('#wishlistBtn .badge');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Event Listeners
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});

clearFiltersBtn.addEventListener('click', clearAllFilters);
priceRange.addEventListener('input', handlePriceChange);
sortBy.addEventListener('change', handleSort);
universalSearch.addEventListener('input', handleSearch);
closeModal.addEventListener('click', closeProductModal);
cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
});

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Initialize
renderProducts();

// Functions
function applyFilters() {
    // Get selected filters
    const categoryCheckboxes = document.querySelectorAll('input[data-filter="category"]:checked');
    const colorCheckboxes = document.querySelectorAll('input[data-filter="color"]:checked');
    const sizeCheckboxes = document.querySelectorAll('input[data-filter="size"]:checked');
    const availabilityCheckboxes = document.querySelectorAll('input[data-filter="availability"]:checked');

    state.filters.category = Array.from(categoryCheckboxes).map(cb => cb.value);
    state.filters.color = Array.from(colorCheckboxes).map(cb => cb.value);
    state.filters.size = Array.from(sizeCheckboxes).map(cb => cb.value);
    state.filters.availability = Array.from(availabilityCheckboxes).map(cb => cb.value);

    filterProducts();
}

function filterProducts() {
    state.filteredProducts = products.filter(product => {
        // Category filter
        if (!state.filters.category.includes('all')) {
            if (!state.filters.category.includes(product.category)) return false;
        }

        // Color filter
        if (state.filters.color.length > 0) {
            if (!state.filters.color.includes(product.color)) return false;
        }

        // Size filter
        if (state.filters.size.length > 0) {
            const hasSize = state.filters.size.some(size => product.size.includes(size));
            if (!hasSize) return false;
        }

        // Price filter
        if (product.price > state.filters.price) return false;

        // Availability filter
        if (!state.filters.availability.includes('all')) {
            if (state.filters.availability.includes('in-stock') && product.stock === 0) return false;
            if (state.filters.availability.includes('out-of-stock') && product.stock > 0) return false;
        }

        return true;
    });

    renderProducts();
}

function handlePriceChange() {
    state.filters.price = parseInt(priceRange.value);
    priceValue.textContent = state.filters.price;
    filterProducts();
}

function clearAllFilters() {
    filterCheckboxes.forEach(checkbox => {
        if (checkbox.value === 'all' || (checkbox.dataset.filter === 'availability' && checkbox.value === 'all')) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
    priceRange.value = 200;
    priceValue.textContent = '200';
    sortBy.value = 'newest';
    universalSearch.value = '';
    state.filters = {
        category: ['all'],
        color: [],
        size: [],
        price: 200,
        availability: ['all']
    };
    filterProducts();
}

function handleSort() {
    const sortValue = sortBy.value;
    
    switch(sortValue) {
        case 'price-low':
            state.filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            state.filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            state.filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'newest':
        default:
            state.filteredProducts.sort((a, b) => b.id - a.id);
    }
    
    renderProducts();
}

function handleSearch() {
    const searchTerm = universalSearch.value.toLowerCase();
    
    if (searchTerm === '') {
        filterProducts();
        return;
    }

    state.filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.color.toLowerCase().includes(searchTerm)
        );
    });

    renderProducts();
}

function renderProducts() {
    productsGrid.innerHTML = '';
    
    if (state.filteredProducts.length === 0) {
        noResults.style.display = 'flex';
        productsCount.textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    productsCount.textContent = state.filteredProducts.length;

    state.filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const badgeHtml = product.badge ? `<span class="product-badge ${product.badge}">${product.stock === 0 ? 'Out of Stock' : product.badge === 'sale' ? 'Sale' : product.badge === 'new' ? 'New' : ''}</span>` : '';
        const oldPriceHtml = product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : '';
        const isWishlisted = state.wishlist.some(item => item.id === product.id);
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 80)}...</p>
                <div class="product-rating">
                    <div class="stars">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        ${oldPriceHtml}
                    </div>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(event, ${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        productCard.addEventListener('click', (e) => {
            if (!e.target.closest('.wishlist-btn')) {
                openProductModal(product);
            }
        });
        
        productsGrid.appendChild(productCard);
    });
}

function openProductModal(product) {
    const isInStock = product.stock > 0;
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalOldPrice').textContent = product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : '';
    document.getElementById('modalDescription').textContent = product.description;
    
    const stockStatus = document.getElementById('stockStatus');
    if (isInStock) {
        stockStatus.className = 'stock-status in-stock';
        stockStatus.textContent = `✓ In Stock (${product.stock} available)`;
    } else {
        stockStatus.className = 'stock-status out-of-stock';
        stockStatus.textContent = '✗ Out of Stock';
    }

    // Color selector
    const colorSelector = document.getElementById('colorSelector');
    colorSelector.innerHTML = '';
    const colorOption = document.createElement('div');
    colorOption.className = 'color-option selected';
    colorOption.style.backgroundColor = getColorCode(product.color);
    colorOption.title = product.color;
    colorSelector.appendChild(colorOption);

    // Size selector
    const sizeSelector = document.getElementById('sizeSelector');
    sizeSelector.innerHTML = '';
    product.size.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option selected';
        sizeOption.textContent = size.toUpperCase();
        sizeSelector.appendChild(sizeOption);
    });

    // Quantity
    document.getElementById('qtyInput').value = '1';

    // Quantity controls
    document.getElementById('qtyPlus').onclick = () => {
        document.getElementById('qtyInput').value = parseInt(document.getElementById('qtyInput').value) + 1;
    };
    document.getElementById('qtyMinus').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        if (qty > 1) {
            document.getElementById('qtyInput').value = qty - 1;
        }
    };

    // Add to cart button
    document.getElementById('addToCartBtn').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        addToCart(product, qty);
        closeProductModal();
    };

    // Toggle button state based on stock
    document.getElementById('addToCartBtn').disabled = !isInStock;
    document.getElementById('addToCartBtn').style.opacity = isInStock ? '1' : '0.5';

    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

function getColorCode(colorName) {
    const colors = {
        'black': '#000',
        'white': '#fff',
        'navy': '#001f3f',
        'gray': '#808080',
        'blue': '#0066cc',
        'red': '#cc0000'
    };
    return colors[colorName] || '#000';
}

function addToCart(product, quantity) {
    const existingItem = state.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCart();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    cartBadge.textContent = state.cart.length;
    renderCartItems();
    calculateCartTotals();
}

function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (state.cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--light-text);">Your cart is empty</p>';
        return;
    }

    state.cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

function calculateCartTotals() {
    const subtotalAmount = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingAmount = subtotalAmount > 50 ? 0 : 9.99;
    const totalAmount = subtotalAmount + shippingAmount;

    subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    shipping.textContent = shippingAmount === 0 ? 'Free' : `$${shippingAmount.toFixed(2)}`;
    total.textContent = `$${totalAmount.toFixed(2)}`;
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

function toggleWishlist(event, productId) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    const index = state.wishlist.findIndex(item => item.id === productId);

    if (index > -1) {
        state.wishlist.splice(index, 1);
    } else {
        state.wishlist.push(product);
    }

    wishlistBadge.textContent = state.wishlist.length;
    renderProducts();
    showNotification(index > -1 ? 'Removed from wishlist' : 'Added to wishlist!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--secondary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 300;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thank you! We will contact you soon.');
        contactForm.reset();
    });
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

console.log('Bluprnt Inc - Modern Clothing Store Loaded Successfully!');
