// index.js - The entry point where React meets the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles that apply before your App component loads
import App from './App';

/*
  This file serves as the bridge between your React application and the HTML document.
  It's the first JavaScript file that runs when your portfolio loads in the browser.
  
  Here's what happens when someone visits your portfolio:
  1. The browser loads index.html from the public folder
  2. The HTML file includes a script tag that loads this index.js file
  3. This file creates a React root and renders your App component
  4. Your App component then renders all your portfolio sections
*/

// Get the root DOM element from public/index.html where React will mount your app
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  React.StrictMode is a development tool that helps identify potential problems
  in your application. It:
  - Warns about deprecated React features
  - Helps detect side effects during rendering
  - Ensures your components handle state updates correctly
  
  Note: StrictMode only runs in development mode, not in production builds
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  Optional: Web Vitals measurement
  If you want to measure performance metrics in your portfolio, you can
  uncomment the lines below. This helps track loading speed and user interaction metrics.
  
  To use this, you'll need to install the web-vitals package:
  npm install web-vitals
  
  Then uncomment these lines:
*/

// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);