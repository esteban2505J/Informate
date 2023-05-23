import React from 'react'
import { useState,useEffect } from 'react'
import {BrowserRouter, Link , useNavigate} from 'react-router-dom';





 function Principal() {

    const getData = ()=>{
       const data = localStorage.getItem("Users");
       if (data) {
         return JSON.parse(data);
       }else{
         return [];
       }
     }

  const [Username,setUsername] = useState('');
  const [Pasword,setPasword] = useState('');
  const [User,setUser] = useState(getData());
  const[Exist,setExist] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()

    let exist = User.map((user)=>{

      if(Username!== '' && user.Username === Username && user.Pasword === Pasword && Pasword !== ''){
        localStorage.setItem("Isloggedin", true);
        setExist(true);
        let btn = document.querySelector("#btn-submit").className +="bg-red-600";
      
        setTimeout(() => {
          navigate('/Home'); 
        }, 1000);
      }
    });

    if(Username === '' || Pasword === ''){
      let btn = document.querySelector("#btn-submit").className +="bg-red-600";
      setTimeout(() => {
        if(confirm("¿quieres volver a intentarlo?")) window.location.reload(true);
      }, 1000);
    }
    
  }

  
  return (
        <div className='bg-gray-800 flex flex-col justify-center'>
            <form 
            className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
            onSubmit= {handleSubmit}
            >
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    value={Username}
                    placeholder='Username'
                    onChange={({target})=>{setUsername(target.value)}}
                    />
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                    value={Pasword}
                    placeholder='Pasword'
                    onChange={({target})=>{setPasword(target.value)}}
                    />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button id='btn-submit' className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg '>SIGNIN</button>

                <span className='flex justify-center'><Link to={"/Checkin"}>Check in</Link></span>
            </form>
        </div>
  )
}
export default Principal