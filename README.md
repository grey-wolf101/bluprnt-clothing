# Bluprnt Inc - Modern Clothing E-Commerce Website

A stunning, modern, and highly functional e-commerce clothing website featuring advanced filtering, universal search, inventory management, and a sleek user interface.

## 🎨 Features

### User Interface
- **Modern Design**: Minimalist aesthetic with gradient accents and smooth animations
- **Responsive Layout**: Perfectly optimized for desktop, tablet, and mobile devices
- **Interactive Hero Section**: Eye-catching landing page with clear call-to-action
- **Smooth Navigation**: Sticky navbar with smooth scrolling and active link indicators

### Shopping Features
- **Universal Search**: Search products by name, color, category, or description
- **Advanced Filtering**:
  - Category filter (T-Shirts, Hoodies, Jackets, Pants, Shorts)
  - Color filter with visual color swatches
  - Size filter with multiple size options
  - Price range slider
  - Availability filter (In Stock / Out of Stock)
- **Sorting Options**: Sort by newest, price (low to high / high to low), or most popular
- **Product Display**: Grid layout with product images, ratings, prices, and availability status

### Inventory Management
- **Stock Tracking**: Real-time stock availability display
- **Out of Stock Indicators**: Visual badges clearly indicate unavailable products
- **Disabled Checkout**: Can't add out-of-stock items to cart
- **Stock Display**: Shows number of available items in product modal

### Shopping Cart
- **Side Cart Panel**: Convenient right-side cart with smooth animations
- **Cart Summary**: Subtotal, shipping, and total calculations
- **Free Shipping**: Automatic discount for orders over $50
- **Remove Items**: Easy item removal from cart
- **Badge Counter**: Shows number of items in cart

### Wishlist
- **Save Favorites**: Add products to wishlist with one click
- **Wishlist Badge**: Shows number of favorited items
- **Visual Indicators**: Heart icon changes on wishlist items

### Product Details
- **Modal View**: Detailed product information in elegant modal
- **High-Quality Images**: Responsive product images
- **Rating System**: Star ratings with review counts
- **Color Selection**: Visual color selection in product modal
- **Size Options**: Display available sizes for each product
- **Price Information**: Current price with original price comparison
- **Stock Status**: Clear indication of product availability

### Additional Sections
- **About Section**: Company information with feature cards
- **Contact Section**: Contact form and company information
- **Footer**: Quick links, social media, and important information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (Vanilla)**: No dependencies, pure vanilla JavaScript for:
  - Dynamic product filtering
  - Universal search functionality
  - Cart management
  - Wishlist functionality
  - Modal interactions
  - State management

## 📊 Product Database

Includes 12 sample products with:
- Product name, category, and description (Lorem Ipsum)
- Color variants
- Available sizes
- Price and original price
- Stock quantity
- Rating and review count
- Product images from Unsplash
- Availability badges (Sale, New, Out of Stock)

## 🎯 Key Features Explained

### Universal Search
- Search across multiple fields: product name, description, category, and color
- Real-time results as you type
- Case-insensitive matching
- Works in combination with filters

### Advanced Filters
- **Multi-select**: Choose multiple options in each category
- **Combination Filtering**: Apply multiple filters simultaneously
- **Clear All Button**: Reset all filters with one click
- **Dynamic Updates**: Products grid updates instantly

### Inventory Management
- Stock levels displayed per product
- Products with 0 stock show "Out of Stock" badge
- Disabled "Add to Cart" button for unavailable items
- Clear stock status in product modal
- Red badge highlighting for unavailable items

### Shopping Cart
- Persistent cart in session
- Automatic shipping calculation
- Real-time total updates
- Quantity tracking per item

## 📁 Project Structure

```
bluprnt-clothing/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/grey-wolf101/bluprnt-clothing.git
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Customize**:
   - Update company information in HTML
   - Modify color scheme in CSS (`:root` variables)
   - Add your own products in `script.js` product array
   - Replace images with your own

## 🎨 Customization

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #0066ff;
    --accent-color: #00d4ff;
    /* ... more variables */
}
```

### Add Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 1,
    name: 'Product Name',
    category: 'category',
    color: 'color',
    size: ['s', 'm', 'l'],
    price: 29.99,
    oldPrice: 39.99,
    image: 'image-url',
    description: 'Description',
    rating: 4.5,
    reviews: 248,
    stock: 15,
    badge: 'sale'
}
```

## ✨ Features Showcase

✅ Modern, minimalist design
✅ Fully responsive (mobile, tablet, desktop)
✅ Universal search functionality
✅ Advanced multi-filter system
✅ Real-time inventory tracking
✅ Out of stock product display
✅ Shopping cart with calculations
✅ Wishlist functionality
✅ Product ratings and reviews
✅ Smooth animations and transitions
✅ Modal product view
✅ Stock availability badges
✅ Free shipping calculation
✅ No external dependencies
✅ Easy to customize

## 📱 Responsive Breakpoints

- **Desktop**: Full features (1024px+)
- **Tablet**: Optimized grid layout (768px - 1023px)
- **Mobile**: Single column layout (below 768px)
- **Small Mobile**: Further optimized (below 480px)

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📦 Deployment

Deploy to:
- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Drag and drop deployment
- **Vercel**: Optimized for web projects
- **Traditional Hosting**: Any web hosting provider

## 💡 Future Enhancements

- Add to backend with database
- User authentication
- Payment gateway integration
- Order tracking
- Customer reviews
- Recommendation engine
- Advanced analytics

## 📝 License

Open source and available for personal and commercial use.

## 🤝 Support

For support or suggestions, please create an issue or contribute to the project.

---

**Bluprnt Inc - Your Blueprint for Fashion**

*Built with ❤️ for the modern shopper*