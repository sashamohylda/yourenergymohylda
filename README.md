# YourEnergy

A modern web application for fitness enthusiasts to discover, track, and manage exercises with personalized training features.

## Features

- 💪 **Exercise Library** - Browse and search through a comprehensive database of exercises
- ⭐ **Favorites Management** - Save your favorite exercises for quick access
- 📊 **BMI Calculator** - Calculate your Body Mass Index
- ⚙️ **Filter & Search** - Advanced filtering by muscle groups and exercise type
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎯 **Personalized Ratings** - Rate and review exercises
- 📧 **Newsletter Subscription** - Stay updated with fitness tips
- 💾 **Local Storage** - Your preferences and favorites are saved locally

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Vite
- **Package Manager**: npm
- **API**: RESTful API integration
- **Notifications**: iziToast for user feedback
- **HTTP Client**: Axios

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yourenergymohylda.git
cd yourenergymohylda
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── js/              # JavaScript modules
├── css/             # Stylesheets
│   ├── base/       # Global styles and utilities
│   ├── layout/     # Layout-specific styles
│   └── utils/      # Helper utilities
├── partials/       # Reusable HTML components
├── img/            # Image assets
├── fonts/          # Font files
├── index.html      # Main page
├── favorites.html  # Favorites page
└── main.js         # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Features Breakdown

### Core Modules

- **api.js** - API service for fetching exercise data
- **trainings.js** - Exercise list management and rendering
- **favorites.js** - Manage favorite exercises
- **filters.js** - Filter exercises by criteria
- **search.js** - Search functionality
- **training-popup.js** - Exercise detail modal
- **rating-popup.js** - Exercise rating modal
- **bmi-popup.js** - BMI calculator modal
- **subscribe.js** - Newsletter subscription
- **mobile-nav.js** - Mobile navigation menu

### Utilities

- **hero.js** - Hero section interactions
- **quote.js** - Daily quote display
- **fab-to-top.js** - Scroll to top button
- **in-progress.js** - Loading indicator
- **local-storage-add.js** - Add items to local storage
- **local-storage-remove.js** - Remove items from local storage
- **messages.js** - User notification messages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

**olexandra mohylda**

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue on GitHub.

---

Made with 💪 for fitness enthusiasts
