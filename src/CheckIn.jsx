import React from "react";
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";



function CheckIn(){

  const navigate = useNavigate();

  const getData = ()=>{
    const data = localStorage.getItem("Users");
    if (data) {
      return JSON.parse(data);
    }else{
      return [];
    }
  }


  
  const [Users,setUsers] = useState(getData());
  const [Username,setUsername] = useState("");
  const [Pasword,setPasword] = useState("");
  const [Pasword2,setPasword2] = useState("");
  const[Score,setScore] = useState("");
  const[Equals,setEquals] = useState(true);
  const[Isloggedin,setIsloggedin] = useState(false);


  const handleSubmit = async (e)=>{
    e.preventDefault()
    setTimeout(() => {
      if (Pasword!== Pasword2) {
        setEquals(false)
        setTimeout(() => {
          if(confirm("Sorry the passwords don't match, do you want to try again?")) window.location.reload(true);
        }, 1000);
      
      }else{
        if(Username!== '' && Pasword!==''){
          var user= {Username,Pasword,Score,Isloggedin}
          setUsers([...Users, user])
          limpiarFormulario()
          let b = document.querySelector("#bnt-submit").className = "w-full my-5 py-2 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg bg-green-600";
  
          setTimeout(() => {
            if(confirm("Tu cuenta ha sido creada con exito")) navigate('/');
          }, 1000);
        }
      
      }
    }, 500);
    
  }
  const limpiarFormulario = ()=>{
    setUsername("")
    setPasword("")
    setPasword2("")
    document.getElementById("form-checkIn").reset();
  }

  useEffect(()=>{
    localStorage.setItem("Users",JSON.stringify(Users));
  },[Users]);


  return (
    <div className='bg-gray-800 flex flex-col justify-center'>
            <form 
            className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
            id="form-checkIn"
            onSubmit= {handleSubmit}
            >
                <h2 className='text-4xl dark:text-white font-bold text-center'>Check in</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    value={Username}
                    placeholder='Username'
                    onChange={e=>setUsername(e.target.value)}
                    />
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                    value={Pasword}
                    placeholder='Pasword'
                    onChange={e=>setPasword(e.target.value)}
                    />
                </div>
             
                <div className='flex flex-col text-gray-400 py-2' >
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    id="password2"
                    type="password" 
                    value={Pasword2}
                    placeholder='Confirm pasword'
                    onChange={e=>setPasword2(e.target.value)}
                    />
                    <span className="tex-sm">confirm pasword</span>
                </div>
              
                <div> {Equals === true? (
                <button id="bnt-submit" className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Check in</button>
                ): 
                  <div className="shadow-xl shadow-red-900 rounded-md">
                    <span className="text-red-700 text-lg ">Passwords do not match !!!</span>
                  </div>
                  }</div>

            </form>
        </div>
  )
}

export default CheckIn