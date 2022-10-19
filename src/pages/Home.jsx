import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);

  useEffect(() => {
   
  }, [])

  return (
    <div>
 home
    </div>
  )
}

export default Home