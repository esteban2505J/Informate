
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'


function Home(){

    const getData = ()=>{
        const data = localStorage.getItem("Users");
        if (data) {
          return JSON.parse(data);
        }else{
          return [];
        }
      }

    const [User,setUser]= useState(getData);

 
    return(
    
        <>
        <div className="flex text-2xl">
            <div>Informate</div>
        </div>
       
        <Link
            to={"/Game"}
            className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r  transition-all hover:scale-105`}>
            <div className='p-5 flex justify-center items-center'>
                <img src="./src//img/tecnología.png" alt="conceptos de integridad,seguridad y disponibilidad en los sistemas de información" className='w-36' />
            </div>

            <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                <div className=''>
                  conceptos de integridad,seguridad y disponibilidad en los sistemas de indormacion

                </div>
            </h1>
        </Link>


        </>
        
    )
}

export default Home

