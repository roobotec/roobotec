# ROBOTEC Website

A modern, responsive company website built with React and React Router, featuring AI automation, data analysis, and custom software solutions.

## Project Structure

```
robotec-website/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Global styles
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── package.json           # Root package.json
```

## Features

- Responsive design with a mobile-friendly layout
- Modern UI with the existing gradient visuals and animations
- Component-based React architecture
- Static routing for GitHub Pages deployment
- Services, about, solutions, and contact pages preserved

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup Instructions

1. Navigate to the project root
   ```bash
   cd robotec-website
   ```

2. Install frontend dependencies
   ```bash
   npm run install-client
   ```

3. Start the development server
   ```bash
   npm run client
   ```

4. Open the site at http://localhost:3000

## Development

### Available Scripts

- `npm run install-client` - Install client dependencies
- `npm run client` - Start the React development server
- `npm run build` - Build the React app for production

## Deployment to GitHub Pages

1. Build the app
   ```bash
   npm run build
   ```

2. Deploy the contents of the `client/build` folder to GitHub Pages.

3. If you want to deploy directly from the project, install the GitHub Pages package and run:
   ```bash
   cd client
   npm run deploy
   ```

## Customization

- Update content in the components under `client/src/components/`
- Change pages in `client/src/pages/`
- Adjust routing in `client/src/App.js`

## Technologies Used

- React 18
- React Router DOM
- CSS3
- GitHub Pages deployment ready

## License

MIT License
