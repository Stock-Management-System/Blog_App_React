import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState();


  const userInfo = {
    "username": 'veli1',
    "email": 'veli1@veli.veli',
    "first_name": 'veli',
    "last_name": 'deli',
    "profile_pic": 'https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg',
    "biography":'biographybiographybiographybiographybiographybiographybiographybiography',
    "password": '123asd456',
    "password1": '123asd456'
}


const url = "http://127.0.0.1:8000/"

const getData = async () =>{
  const res = await axios.post(`${url}auth/login/`,{
    "email": "veli1@veli.veli",
    "username":'veli1',
    "password":'123asd456'
  })

  setData(res.data)
}




console.log(data);

  useEffect(() => {
   
  }, [])

  return (
    <div>
      <button onClick={()=>getData()}>clşick</button>
    </div>
  )
}

export default Home