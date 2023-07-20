import Navbar from './components/Navbar'
import './App.css'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotal } from './reducer/cartSlice'

function App() {
 const dispatch = useDispatch()
 const { cartItems, quantity, total, isLoding } = useSelector((store) => store.cart)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <>
    <Navbar/>
    <CartContainer/>
    </>
  )
}

export default App
