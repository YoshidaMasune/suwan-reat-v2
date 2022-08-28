import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between p-2 bg-[#DAB88B]'>
         <div className="logo text-xl">
            <Link to='/'>Suwan</Link>
         </div>

         <ul className='flex gap-1'>
            <li>
               <Link to="/login">login</Link>
            </li>
            <li>
               <Link to='admin'>admin</Link>
            </li>
         </ul>
      </nav>
    </>
  )
}

export default Navbar