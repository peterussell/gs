import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import GA4React from "ga-4-react";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// Initialize analytics. Wait 4 seconds to allow the app to load first
if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  try {
    setTimeout(_ => {
      const ga4react = new GA4React("G-ME96X32XY5");
      ga4react.initialize();
    }, 4000);
  } catch (err) { /* Prevent crashes due to adblockers */ }
}
