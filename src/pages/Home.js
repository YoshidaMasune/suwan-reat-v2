import React, { useEffect, useState} from 'react'


function Home() {
// --> setState <-- //
   const [users, setUsers] = useState([])
   const [s1, setS1] = useState([])
   const [s2, setS2] = useState([])

   useEffect( () => {
      fetch('https://suwan-api.herokuapp.com/')
      .then(res => res.json())
      .then(users => setUsers(users))
   }, [])

   useEffect( () => {
      setS1(users.filter(u => u.section === 1))
      setS2(users.filter(u => u.section === 2))
   }, [users])


   return (
      <div id='home' className=''>
         
      </div>
   )
}

export default Home