import { Route, Routes } from 'react-router-dom'
import LoginPages from './components/pages/login/LoginPages'
import OrderPage from './components/pages/order/OrderPage'

function App() {
  

  return (
    
    <Routes>
      <Route path='/' element = {< LoginPages />} />
      <Route path='/order' element = {< OrderPage />} />
    </Routes>
    
  )
}

export default App
