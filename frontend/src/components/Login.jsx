import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {

    const [user,setuser] = useState("")
    const [pass,setpass] = useState("")
    const navigate = useNavigate()

  function handleuser(event)
  {
    setuser(event.target.value)
  }
  function handlepass(event)
  {
    setpass(event.target.value)
  }

  function check()
  {
    let logindetails = axios.post("https://loginwebsite-react-backend.onrender.com/login", {"username":user,"password":pass})
    logindetails.then(function(data){
        if(data.data === true)
        {
            navigate("/success")
        }
        else{

            navigate("/fail")
        }
    })

  }


  return (
    <div className="relative ">
        <img src="https://t4.ftcdn.net/jpg/03/11/50/71/360_F_311507184_0mErEL2kUw7z4AbXhsxPjFE7hQnY7BLy.jpg" alt="" className="w-full h-svh"/>
    <div className="absolute top-56 md:top-52 md:right-1/3 m-3 p-6 md:p-20 bg-slate-600 border-2 border-green-400 shadow-green-400 rounded-lg ">

      <div className="p-1 md:p-2 flex gap-5 justify-center items-center">
        <p className="text-white text-sm font-semibold md:text-2xl">E-Mail Address:</p> 
      <input onChange={handleuser} name="username" type="text" placeholder="Enter mail id" className="border text-sm md:text-base border-green-400 shadow-green-500 shadow-sm rounded p-1 md:w-60" />
      </div>

      <div className="p-2 flex justify-center items-center">
      <p className="text-white text-sm font-semibold md:text-2xl">Password:</p> 
      <input onChange={handlepass} name="password"  type="text" placeholder="Enter password" className="md:ml-20 ml-14 text-sm md:text-base border border-green-400 shadow-green-500 shadow-sm rounded p-1 md:w-60" />
      </div>

      <div className="text-center mt-3">
      <button onClick={check} className="text-white bg-blue-400 p-1 border border-green-400 rounded-md font-semibold w-28 md:w-44">Login</button>
      </div>
    </div>
    </div>
  );
}

export default Login;
