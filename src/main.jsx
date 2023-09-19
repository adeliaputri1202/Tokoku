import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import '@material-tailwind/react'; // Import Material Tailwind CSS styles


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
