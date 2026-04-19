# 💸 Personal Finance & Expense Analytics App

A modern, responsive **React-based Personal Finance Tracker** built with Vite that helps users manage their income, expenses, budgets, and gain valuable financial insights through an intuitive and interactive dashboard.

![Personal Finance App](https://via.placeholder.com/800x400/38bdf8/ffffff?text=Personal+Finance+App)

## ✨ Features

### 📊 Dashboard
- **Financial Overview**: Total Income, Total Expenses, Net Balance at a glance
- **Top Spending Category**: Identify where you spend the most
- **Spending Breakdown**: Interactive pie chart showing expenses by category
- **Real-time Updates**: All data updates instantly as you add transactions

### 💳 Transactions Management
- **Add Transactions**: Easily add income or expense entries with detailed information
- **Transaction History**: View all transactions in a clean, card-based layout
- **Search & Filter**: Find transactions by title, notes, category, or type
- **Delete Transactions**: Remove unwanted entries with confirmation
- **Transaction Details**: Amount, category, date, notes, and type (Income/Expense)

### 🎯 Budget Management
- **Monthly Budget Setting**: Set and track your monthly spending limit
- **Budget Progress**: Visual progress bar showing spending vs. budget
- **Over-budget Alerts**: Clear warnings when you exceed your budget
- **Remaining Budget**: See how much you have left to spend

### 📈 Analytics & Insights
- **Transaction Statistics**: Total transactions and recurring transaction count
- **Average Expense**: Understand your typical spending patterns
- **Income vs Expense Trends**: Bar chart showing monthly income and expense trends
- **Financial Insights**: Data-driven insights to help you make better financial decisions

### 🎨 User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode Ready**: Clean, modern UI with intuitive navigation
- **Smooth Animations**: Framer Motion-powered transitions between pages
- **Toast Notifications**: User-friendly feedback for all actions
- **Form Validation**: Robust form validation with helpful error messages

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### State Management
- **React Context API** - Global state management for finance data
- **React Hook Form** - Efficient form handling with validation

### UI & Styling
- **CSS Modules** - Scoped styling for components
- **React Icons** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions

### Data Visualization
- **Recharts** - Responsive charts and graphs
- **date-fns** - Modern date utility library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Support** - Type definitions for better development experience

### Key Dependencies
```json
{
  "react": "^19.2.4",
  "react-router-dom": "^7.13.2",
  "framer-motion": "^12.38.0",
  "recharts": "^3.8.1",
  "react-hook-form": "^7.72.0",
  "react-toastify": "^11.0.5",
  "date-fns": "^4.1.0",
  "uuid": "^13.0.0"
}
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-finance-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

### Code Quality

```bash
# Run ESLint for code linting
npm run lint
```

## 📁 Project Structure

```
personal-finance-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── analytics/      # Analytics-specific components
│   │   ├── budget/         # Budget management components
│   │   ├── dashboard/      # Dashboard widgets
│   │   ├── layout/         # Layout components (Sidebar, Topbar)
│   │   └── transactions/   # Transaction-related components
│   ├── config/             # App configuration
│   ├── constants/          # App constants and defaults
│   ├── context/            # React Context providers
│   ├── data/               # Seed data and mock data
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── routes/             # Routing configuration
│   ├── services/           # API services (if any)
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── validation/         # Form validation schemas
│   ├── App.jsx             # Main App component
│   ├── AppProviders.jsx    # App-wide providers
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎯 Usage Guide

### Adding Transactions
1. Navigate to the "Add Transaction" page
2. Fill in the transaction details:
   - Amount (positive for income, negative for expenses)
   - Category (select from predefined categories or add custom)
   - Date (defaults to today)
   - Notes (optional description)
3. Click "Add Transaction"

### Managing Budget
1. Go to the "Budget" page
2. Set your monthly budget amount
3. Monitor your spending progress
4. Receive alerts when approaching or exceeding budget

### Viewing Analytics
1. Visit the "Analytics" page
2. Review your spending patterns
3. Analyze income vs expense trends
4. Use insights to make informed financial decisions

## 🔧 Configuration

### Categories
Transaction categories are defined in `src/constants/transactionCategories.js`. You can modify this file to add or remove categories.

### Storage
The app uses localStorage to persist data. Transaction data is stored under the key defined in `src/constants/storageKeys.js`.

### Styling
- Global styles are in `src/index.css`
- Component-specific styles are in respective CSS files
- CSS custom properties (variables) are used for theming

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Charts powered by [Recharts](https://recharts.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Form handling with [React Hook Form](https://react-hook-form.com/)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

**Made with ❤️ for better financial management**

---

## 📂 Folder Structure

```bash
src/
├── assets/
├── components/
│   ├── analytics/
│   ├── budget/
│   ├── dashboard/
│   ├── layout/
│   └── transactions/
├── config/
├── constants/
├── context/
├── data/
├── hooks/
├── pages/
├── routes/
├── services/
├── types/
├── utils/
├── validation/
├── App.jsx
├── AppProviders.jsx
├── index.css
└── main.jsx