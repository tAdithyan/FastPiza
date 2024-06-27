import React from 'react'
import Heder from './Heder'
import CartOverview from '../features/cart/CartOverview'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <div>
      <Heder/>
      <main>
        <Outlet/>
      </main>
      <CartOverview/>
    </div>
  )
}
export default AppLayout
