import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Searchorder = () => {
  const navigate = useNavigate()
  const[query,setquery]=useState();
  const handlesearch = () =>{
  if (!query) return ;
  navigate(`/order/${query}`)
  setquery("")

  }
  return (
    <div>
      <input placeholder='search order #' value={query} onChange={(e)=>setquery(e.target.value)}/>
      <button onClick={handlesearch}>Search</button>
    </div>
  )
}

export default Searchorder