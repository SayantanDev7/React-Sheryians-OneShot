import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//createRoot is a function that creates a root for the React application
//getElementById is a function that gets the element by its id
//render is a function that renders the React application to the root
//we are using this method because the old method createRoot() is deprecated

createRoot(document.getElementById('root')).render(
  <App />
)
