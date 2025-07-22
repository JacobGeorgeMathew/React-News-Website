# Real-Time Market News 📈

A modern React-based web application that delivers real-time financial market news using the Finnhub API. Built with Vite for optimal performance and developer experience.

> **Current Status**: 🚧 Project is in early development phase with basic structure implemented.

## 🚀 Features

- **Real-time Market News**: Fetches the latest financial and market news using Finnhub API
- **Modern UI Components**: Clean and responsive design with dedicated news cards
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **API Integration**: Seamless integration with Finnhub financial data API
- **Component-based Architecture**: Modular React components for maintainability
- **ESLint Integration**: Code quality maintained with React-specific linting rules

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Development Tools**: ESLint 9.29.0 with React plugins
- **Styling**: CSS Modules (ready for implementation)
- **API**: Finnhub Financial Data API
- **Package Manager**: npm
- **Hot Module Replacement**: Instant development updates

## 📁 Project Structure

```
Real-time-market-news/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/         # Reusable UI components
│   │   └── M-News-Card.jsx # News card component (skeleton)
│   ├── Pages/             # Page components
│   │   └── Home.jsx       # Homepage component (skeleton)
│   ├── services/          # API services
│   │   └── api.js         # Finnhub API integration
│   ├── css/               # Component styles
│   │   ├── Home.css       # Home page styles (empty)
│   │   └── M-News-Card.css # News card styles (empty)
│   ├── assets/            # Static assets
│   │   └── react.svg      # React logo
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** package manager
- **Internet connection** for API calls

### Installation

1. **Clone the repository**
   ```powershell
   git clone <repository-url>
   cd Real-time-market-news
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **API Configuration**
   - Finnhub API is pre-configured in `src/services/api.js`
   - Free API key included for development
   - ⚠️ **Security Note**: Move API key to environment variables for production

### 🏃‍♂️ Running the Application

**Development Mode**
```powershell
npm run dev
```
Opens development server at `http://localhost:5173` with hot reload

**Production Build**
```powershell
npm run build
```
Creates optimized production build in `dist/` folder

**Preview Production Build**
```powershell
npm run preview
```
Serves production build locally for testing

**Code Quality Check**
```powershell
npm run lint
```
Runs ESLint to analyze code quality

## 📱 Current Implementation

### Implemented Components

- ✅ **App.jsx**: Main application wrapper
- ✅ **Home.jsx**: Homepage skeleton structure
- ✅ **M-News-Card.jsx**: News card component skeleton
- ✅ **api.js**: Finnhub API service with error handling

### API Integration Status

```javascript
// Current API setup in src/services/api.js
const API_KEY = "d1ijk5pr01qhbuvqe3j0d1ijk5pr01qhbuvqe3jg";
const BASE_URL = "https://finnhub.io/api/v1";

// Endpoints configured:
// - General market news: /news?category=general
// - Error handling implemented
// - Response validation ready
```

## 🔧 Development

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start development server with HMR |
| **build** | `npm run build` | Create production-ready build |
| **preview** | `npm run preview` | Preview production build locally |
| **lint** | `npm run lint` | Run ESLint code analysis |

### Development Environment

- **Hot Module Replacement**: ✅ Configured
- **Fast Refresh**: ✅ React state preservation
- **ESLint**: ✅ React hooks and refresh plugins
- **Modern JavaScript**: ✅ ES6+ with Vite transpilation

## 🎯 Development Roadmap

### Phase 1: Core Functionality (Current)
- [x] Project setup and configuration
- [x] Component structure and routing
- [x] API service integration
- [ ] **Next**: Implement news fetching logic
- [ ] **Next**: Create news card UI components

### Phase 2: UI Implementation
- [ ] Design and implement news card layout
- [ ] Add responsive homepage design
- [ ] Implement news feed display
- [ ] Add loading states and error handling

### Phase 3: Enhanced Features
- [ ] News categories and filtering
- [ ] Search functionality
- [ ] Dark/light theme toggle
- [ ] Infinite scrolling
- [ ] News bookmarking

### Phase 4: Production Ready
- [ ] Environment variable configuration
- [ ] Performance optimization
- [ ] Comprehensive error handling
- [ ] Unit and integration tests
- [ ] Accessibility improvements

## 🐛 Known Issues & Limitations

- **Components are skeletal**: Need implementation of actual functionality
- **No styling**: CSS files are empty and need implementation
- **API response handling**: Fetch function doesn't return data yet
- **No state management**: React state hooks need to be implemented

## 🚀 Quick Development Tips

### Next Development Steps
1. **Implement state management** in `Home.jsx` for news data
2. **Add CSS styling** to make the UI visually appealing
3. **Complete API function** to return and process news data
4. **Create reusable news card** component with props

### Recommended Development Order
```
1. Complete api.js fetchMarketNews() function
2. Implement useState/useEffect in Home.jsx
3. Design and style M-News-Card.jsx
4. Add CSS styling for responsive design
5. Implement error handling and loading states
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Finnhub API](https://finnhub.io/) for providing real-time financial data
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [React](https://reactjs.org/) for the powerful UI framework
- [ESLint](https://eslint.org/) for maintaining code quality

---

**⚡ Ready to develop?** Run `npm run dev` and start building amazing features!

