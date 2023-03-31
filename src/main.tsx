import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CartProvider } from './context/Cart/CartProvider'
import { ProductsProvider } from './context/Products/ProductsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
