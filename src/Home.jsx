
import React, { Component, useState, useTransition } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import UserScore from './UserScore';

function Home(){

    const navigate = useNavigate();
    const getData = ()=>{
        const data = localStorage.getItem("Users");
        if (data) {
          return JSON.parse(data);
        }else{
          return [];
        }
      }

    const [User,setUser]= useState(getData);

    const setIsloggedin =  ()=>{
        let updateScore = User.map((user)=>{
        if (user.Isloggedin) {
              user.Isloggedin = false;
              localStorage.setItem("Users",JSON.stringify(User));
              navigate('/');
            }
        })
      };
      
    

 
    return(
    
        <>
        <div className="container-top flex">
            <div className="flex text-2xl pb-40 justify-center">
                <div>Informate</div>
            </div>

            <div className='ml-6'>
                <button className='bg-[#006b67] border-none hover:opacity-75 hover:bg-emerald-900 text-lg hover:scale-105 transition-all p-2' onClick={ setIsloggedin}>Sign off</button>
            </div>
        </div>

        <div className='mb-16' >
            <h2 className='text-3xl flex justify-center mb-3'>Best score</h2>
            <UserScore users={User}/>
        </div>
       
        <Link
            to={"/Game"}
            className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r  transition-all hover:scale-105`}>
            <div className='p-5 flex justify-center items-center'>
                <img src="./src//img/tecnología.png" alt="conceptos de integridad,seguridad y disponibilidad en los sistemas de información" className='w-36' />
            </div>

            <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                <div>
                  conceptos de Integridad, Seguridad y Disponibilidad en los sistemas de información
                </div>
            </h1>
        </Link>


        </>
        
    )
}

export default Home

