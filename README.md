# CUCOL - Cambridge University Colombian Society Website

A modern, responsive website for the Cambridge University Colombian Society (CUCOL), built with Quarto and featuring a beautiful Colombian-themed design.

## 🌟 Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Colombian Theme**: Beautiful design inspired by the Colombian flag colors
- **Quarto Framework**: Easy content management and static site generation
- **Professional Typography**: Uses Geist and Manrope fonts for a modern look
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- **SEO Optimized**: Meta tags, structured data, and social media integration
- **Accessibility**: WCAG compliant design with proper contrast and navigation

## 🎨 Design System

### Color Palette
- **Primary (Yellow)**: `#FCD116` - Colombian flag yellow
- **Secondary (Blue)**: `#003893` - Colombian flag blue  
- **Accent (Red)**: `#CE1126` - Colombian flag red
- **Neutral Colors**: Modern grays for clean typography and backgrounds

### Typography
- **Headings**: Geist font family (modern, clean)
- **Body Text**: Manrope font family (readable, professional)
- **Responsive Font Sizes**: Automatically scales for different screen sizes

### Components
- **Hero Sections**: Full-screen sections with gradient backgrounds
- **Feature Cards**: Interactive cards with hover effects
- **Member Grid**: Responsive grid layouts for team members
- **Contact Forms**: Styled forms with proper validation states
- **Flag Accents**: Colombian flag-inspired decorative elements

## 📱 Responsive Breakpoints

- **Mobile**: < 576px - Single column layout, optimized touch targets
- **Tablet**: 576px - 768px - Two column layouts, medium spacing
- **Desktop**: 769px - 992px - Three column layouts, full spacing
- **Large Desktop**: > 993px - Four column layouts, maximum spacing

## 📁 File Structure

```
├── _quarto.yml          # Main configuration
├── header.html          # Meta tags and font includes
├── styles.css           # Complete responsive stylesheet
├── index.qmd            # Homepage with hero section
├── about.qmd            # About page with mission and history
├── members.qmd          # Members page with committee grid
├── news.qmd             # News & Events page with listing
├── contact.qmd          # Contact page with form and info
├── public/              # Images and assets
│   └── images/
│       └── cucol-logo.png
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

1. **Install Quarto**: Download from [quarto.org](https://quarto.org/docs/get-started/)
2. **Clone Repository**: `git clone https://github.com/cucolsoc/cucolsoc.github.io.git`
3. **Navigate to Directory**: `cd cucolsoc.github.io`

### Development Commands

```bash
# Build the website
quarto render

# Preview locally with live reload
quarto preview

# Build and serve locally
quarto preview --render

# Check for issues
quarto check
```

### Customization

#### Content Updates
- Edit `.qmd` files to update content
- Use Markdown syntax for formatting
- Add images to `public/` directory

#### Styling
- Modify `styles.css` for design changes
- Update CSS variables in `:root` for theme colors
- Add new responsive breakpoints as needed

#### Configuration
- Edit `_quarto.yml` for site settings
- Update `header.html` for meta tags and SEO
- Modify navigation and footer in `_quarto.yml`

## 📱 Responsive Features

### Mobile-First Design
- Touch-friendly buttons and navigation
- Optimized typography for small screens
- Collapsible navigation menu
- Proper spacing for thumb navigation

### Tablet Optimization
- Two-column layouts for medium screens
- Balanced content distribution
- Optimized image sizes
- Touch-friendly form elements

### Desktop Enhancement
- Multi-column layouts
- Hover effects and animations
- Larger typography and spacing
- Enhanced visual hierarchy

## 🎯 Key Components

### Hero Sections
```css
.hero-section {
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  padding: var(--spacing-xxl) 0;
  text-align: center;
}
```

### Feature Cards
```css
.feature-card {
  background: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  transition: var(--transition);
}
```

### Responsive Grid
```css
.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}
```

## 🔧 Technical Details

### CSS Architecture
- **CSS Custom Properties**: For consistent theming
- **Flexbox & Grid**: Modern layout techniques
- **Mobile-First**: Progressive enhancement approach
- **BEM Methodology**: Organized class naming

### Performance
- **Optimized Images**: Responsive image handling
- **Minimal Dependencies**: Lightweight framework
- **Fast Loading**: Optimized CSS and assets
- **SEO Friendly**: Proper meta tags and structure

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **Color Contrast**: WCAG AA compliant
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and descriptions

## 📊 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Set source to "GitHub Actions"
4. Site builds automatically on push

### Other Platforms
- **Netlify**: Drag and drop `_site` folder
- **Vercel**: Connect repository for automatic deployment
- **AWS S3**: Upload `_site` contents to S3 bucket
- **Traditional Hosting**: Upload `_site` files via FTP

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test locally: `quarto preview`
5. Commit changes: `git commit -m 'Add feature'`
6. Push to branch: `git push origin feature-name`
7. Submit a pull request

## 📞 Support

For questions or support:
- **Email**: contact@cucol.cam.ac.uk
- **Instagram**: [@cucol_cambridge](https://instagram.com/cucol_cambridge)
- **Facebook**: [CUCOL Cambridge](https://facebook.com/cucolcambridge)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with ❤️ for the Cambridge University Colombian Society*
