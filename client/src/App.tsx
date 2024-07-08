
import Home from './pages/Home'
import AdminFlower from './pages/AdminFlower'

import { Route, Routes } from 'react-router-dom'
import Login_register from './pages/Login_register'
import Shop from './pages/Shop'
import Detail from './pages/Detail'

export default function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/admin" element={<AdminFlower />} />
      <Route path='/login' element={<Login_register></Login_register>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/detail/:id' element={<Detail></Detail>}></Route>
    </Routes>

  )
}
