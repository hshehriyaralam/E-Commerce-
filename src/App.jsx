

import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Card from './Pages/Card'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'


function App() {
 

  return (
    
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route  path='/' element={<Shop />} />
      <Route  path='/mens' element={<ShopCategory  banner={men_banner} category="men" />} />
      <Route  path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
      <Route  path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
      <Route path='/product/:productId' element={<Product />} />

      <Route path='/card' element={<Card />} />
      <Route path='/login' element={<LoginSignup />} />
    </Routes>
    <Footer />
    </BrowserRouter>
       </div>

    
  )
}

export default App
