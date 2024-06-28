import React from 'react'
import { Link } from 'react-router-dom'
import Searchorder from '../features/order/Searchorder'

const Heder = () => {
  return (
    <header>
  <Link to ="/">Fast Pizza Co.</Link>
  <Searchorder/>
    </header>
  )
}

export default Heder