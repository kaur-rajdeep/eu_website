import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Acet } from './pages/Acet'
import './index.css'
import Contact from './pages/Contact';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Acet/>
    <App />
    <Contact />
  </React.StrictMode>
);
