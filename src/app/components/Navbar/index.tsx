import React from 'react'
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import Footer from '../../components/Footer/Index';
import { Poppins } from 'next/font/google';




const Navbar = () => {
  return (
          <>
          {/* Navbar */}
         <div className='sticky flex w-[full] h-[65px] items-center pl-28  bg-[#043873] '>
            <div>
        <Image src={Logo} 
        alt='logo'
        width={191} 
        height={34} 
        className=' w-[30px] h-[25px]  ' />
        </div>
        <div>
        <h1 className={`flex font-semibold text-[#ffffff] text-[25px] pl-2`}>whitespace</h1>
        </div>
        <div className='pl-[220px] pr-[180px]'>
        <ul className='flex justify-between items-center text-white gap-8 text-xs'>
       <li>Products</li>
       <li>Solutions</li>
       <li>Resourses</li>
       <li>Pricing</li>
       <div className='pl-[120px]'>
       <button className='w-[80px] h-[40px]  rounded-[8px] pt-[12px] pl-[23px] pr-[40px] pb-[16px] bg-[#FFE492] text-black text-xs '>Login</button>
       </div>
        </ul>
        </div>
        </div>

       {/* Herosection */}
        <div className='w-full h-[529px] bg-[#043873] top-[921px] left-[1px] pt-[140px] pr-[220]  pl-{220]'>
            <div className='w-[656px] h-[361px] gap-[24px]'>
            <h1 className='h-[154px] font-extrabold text-[34px] pl-24 text-[#FFFFFF]'>Get More Done with <br />whitepace</h1>
           <p className=' pl-24 -mt-8 text-[12px] font-normal text-[#FFFFFF]'>Project management software that enables your teams to<br /> collaborate, plan,analyze and manage everyday tasks</p>
           <div className='flex'>
            <div className=' -mt-56   ml-[450px]'> 
            <div className=' w-[590px] h-[350px] bg-[#C4DEFD]'>

            </div>
            </div>
            </div>
             </div> 
        </div>
       <Footer />
        </>

    
  )
}    
         

export default Navbar;