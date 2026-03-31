import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Counter from './components/Counter'
import DigitalTools from './components/DigitalTools'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (toolId) => {
    if (!cartItems.includes(toolId)) {
      setCartItems([...cartItems, toolId])
      toast.success('Item added to cart');
    }
  }

  const handleRemoveFromCart = (toolId) => {
    setCartItems(cartItems.filter(id => id !== toolId))
    toast.warning('Item removed from cart');
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  return (
    <div className="bg-white">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
      <Navbar cartCount={cartItems.length} />
      <Hero />
      <Counter />
      <DigitalTools
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
      <Services />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
