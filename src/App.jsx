import { Route, Routes } from 'react-router-dom'
import LoginPages from './components/pages/login/LoginPages'
import OrderPage from './components/pages/order/OrderPage'
import ErrorPage from './components/pages/error/ErrorPage'

function App() {
  

  return (
    
    <Routes>
      <Route path='/' element = {< LoginPages />} />
      <Route path='/order' element = {< OrderPage />} />
      <Route path='*' element = {< ErrorPage />} />
    </Routes>
    
  )
}

export default App
