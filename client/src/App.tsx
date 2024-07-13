
import Home from './pages/user/Home'
import AdminFlower from './pages/admin/AdminFlower'

import { Route, Routes } from 'react-router-dom'
import Login_register from './pages/user/Login_register'
import Shop from './pages/admin/Shop'
import Detail from './pages/user/Detail'
import Category from './pages/admin/Category'
import FormAddProduct from './pages/admin/FormAddProduct'
import LoginAdmin from './pages/admin/LoginAdmin'

export default function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/admin" element={<AdminFlower />} />
      <Route path='/login' element={<Login_register></Login_register>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/detail/:id' element={<Detail></Detail>}></Route>
      <Route path='/category' element={<Category></Category>}></Route>
      <Route path='/add' element={<FormAddProduct></FormAddProduct>}></Route>
      <Route path='/loginAdmin' element={<LoginAdmin />} />
    </Routes>

  )
}
