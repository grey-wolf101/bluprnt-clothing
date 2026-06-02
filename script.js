// Product Database
const products = [
    { id: 1, name: 'Classic Skull Cap', category: 'skull-cap', color: 'black', size: ['one-size'], price: 24.99, oldPrice: 34.99, image: 'https://images.unsplash.com/photo-1533869173e98f4829b987456fb2e457?w=500&q=80', description: 'Premium wool blend skull cap. Perfect for any season.', rating: 4.8, reviews: 142, stock: 25, badge: 'sale' },
    { id: 2, name: 'Logo Beanie', category: 'skull-cap', color: 'navy', size: ['one-size'], price: 29.99, image: 'https://images.unsplash.com/photo-1533869173e98f4829b987456fb2e457?w=500&q=80', description: 'Embroidered logo beanie with comfortable fit.', rating: 4.6, reviews: 98, stock: 18, badge: 'new' },
    { id: 3, name: 'Vintage Tee', category: 't-shirt', color: 'black', size: ['xs', 's', 'm', 'l', 'xl', 'xxl'], price: 19.99, oldPrice: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', description: 'Comfortable 100% cotton vintage-style t-shirt.', rating: 4.7, reviews: 267, stock: 32, badge: 'sale' },
    { id: 4, name: 'Graphic Tee', category: 't-shirt', color: 'white', size: ['s', 'm', 'l', 'xl'], price: 22.99, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&q=80', description: 'Bold graphic design on premium white tee.', rating: 4.5, reviews: 156, stock: 20, badge: null },
    { id: 5, name: 'Premium Hoodie', category: 'hoodie', color: 'black', size: ['xs', 's', 'm', 'l', 'xl', 'xxl'], price: 54.99, oldPrice: 74.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Cozy premium hoodie with kangaroo pocket.', rating: 4.9, reviews: 389, stock: 15, badge: 'sale' },
    { id: 6, name: 'Zip Hoodie', category: 'hoodie', color: 'gray', size: ['s', 'm', 'l', 'xl', 'xxl'], price: 59.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Versatile zip-up hoodie perfect for layering.', rating: 4.7, reviews: 234, stock: 12, badge: 'new' },
    { id: 7, name: 'Olive Beanie', category: 'skull-cap', color: 'olive', size: ['one-size'], price: 26.99, image: 'https://images.unsplash.com/photo-1533869173e98f4829b987456fb2e457?w=500&q=80', description: 'Stylish olive green beanie for all seasons.', rating: 4.4, reviews: 87, stock: 22, badge: null },
    { id: 8, name: 'Burgundy Tee', category: 't-shirt', color: 'burgundy', size: ['xs', 's', 'm', 'l', 'xl'], price: 18.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', description: 'Rich burgundy color classic t-shirt.', rating: 4.6, reviews: 145, stock: 28, badge: null },
    { id: 9, name: 'Navy Hoodie', category: 'hoodie', color: 'navy', size: ['m', 'l', 'xl', 'xxl'], price: 55.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Classic navy hoodie for everyday wear.', rating: 4.8, reviews: 312, stock: 9, badge: null },
    { id: 10, name: 'White Tee', category: 't-shirt', color: 'white', size: ['xs', 's', 'm', 'l', 'xl', 'xxl'], price: 16.99, oldPrice: 24.99, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&q=80', description: 'Essential white t-shirt for every wardrobe.', rating: 4.5, reviews: 198, stock: 40, badge: 'sale' },
    { id: 11, name: 'Gray Beanie', category: 'skull-cap', color: 'gray', size: ['one-size'], price: 25.99, image: 'https://images.unsplash.com/photo-1533869173e98f4829b987456fb2e457?w=500&q=80', description: 'Neutral gray beanie with soft texture.', rating: 4.7, reviews: 124, stock: 19, badge: null },
    { id: 12, name: 'Oversized Hoodie', category: 'hoodie', color: 'white', size: ['m', 'l', 'xl', 'xxl'], price: 59.99, oldPrice: 79.99, image: 'https://images.unsplash.com/photo-1556821552-ec38bc1e9dc3?w=500&q=80', description: 'Oversized white hoodie for ultimate comfort.', rating: 4.9, reviews: 267, stock: 11, badge: 'sale' }
];

const state = {
    filteredProducts: [...products],
    cart: [],
    wishlist: [],
    filters: {
        category: ['all'],
        color: [],
        price: 150,
        availability: ['all']
    }
};

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

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

renderProducts();

function applyFilters() {
    const categoryCheckboxes = document.querySelectorAll('input[data-filter="category"]:checked');
    const colorCheckboxes = document.querySelectorAll('input[data-filter="color"]:checked');

    state.filters.category = Array.from(categoryCheckboxes).map(cb => cb.value);
    state.filters.color = Array.from(colorCheckboxes).map(cb => cb.value);

    filterProducts();
}

function filterProducts() {
    state.filteredProducts = products.filter(product => {
        if (!state.filters.category.includes('all')) {
            if (!state.filters.category.includes(product.category)) return false;
        }

        if (state.filters.color.length > 0) {
            if (!state.filters.color.includes(product.color)) return false;
        }

        if (product.price > state.filters.price) return false;

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
        checkbox.checked = checkbox.value === 'all';
    });
    priceRange.value = 150;
    priceValue.textContent = '150';
    sortBy.value = 'newest';
    universalSearch.value = '';
    state.filters = {
        category: ['all'],
        color: [],
        price: 150,
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
            product.category.toLowerCase().includes(searchTerm)
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
        
        const badgeHtml = product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : 'New'}</span>` : '';
        const oldPriceHtml = product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : '';
        const isWishlisted = state.wishlist.some(item => item.id === product.id);
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${'★'.repeat(Math.floor(product.rating))}</div>
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
    
    document.querySelector('.stars').textContent = '★'.repeat(Math.floor(product.rating));
    document.querySelector('.rating-count').textContent = `(${product.reviews} reviews)`;
    
    const stockStatus = document.getElementById('stockStatus');
    if (isInStock) {
        stockStatus.className = 'stock-status in-stock';
        stockStatus.textContent = `✓ In Stock (${product.stock} available)`;
    } else {
        stockStatus.className = 'stock-status out-of-stock';
        stockStatus.textContent = '✗ Out of Stock';
    }

    const sizeSelector = document.getElementById('sizeSelector');
    sizeSelector.innerHTML = '';
    product.size.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option selected';
        sizeOption.textContent = size.toUpperCase();
        sizeSelector.appendChild(sizeOption);
    });

    document.getElementById('qtyInput').value = '1';

    document.getElementById('qtyPlus').onclick = () => {
        document.getElementById('qtyInput').value = parseInt(document.getElementById('qtyInput').value) + 1;
    };
    document.getElementById('qtyMinus').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        if (qty > 1) {
            document.getElementById('qtyInput').value = qty - 1;
        }
    };

    document.getElementById('addToCartBtn').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        addToCart(product, qty);
        closeProductModal();
    };

    document.getElementById('addToCartBtn').disabled = !isInStock;
    document.getElementById('addToCartBtn').style.opacity = isInStock ? '1' : '0.5';

    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

function addToCart(product, quantity) {
    const existingItem = state.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({ ...product, quantity: quantity });
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
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">Your cart is empty</p>';
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
        background: #ff6b6b;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
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

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thanks! We\'ll be in touch soon.');
        contactForm.reset();
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100px); opacity: 0; }
    }
`;
document.head.appendChild(style);

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
