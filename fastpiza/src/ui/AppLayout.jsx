import React from 'react'
import Heder from './Heder'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'
const AppLayout = () => {
  const isLoding = useNavigation()
  console.log(isLoding);
  return (
    <div className='layout'>
      {isLoding.state==="loading" && <Loader/>}
      <Heder/>
      <main>
        <Outlet/>
      </main>
      <CartOverview/>
    </div>
  )
}
export default AppLayout
