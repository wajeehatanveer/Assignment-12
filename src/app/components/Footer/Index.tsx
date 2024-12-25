import Image from 'next/image';
import Logo from '../../../../public/logo.png'

const Footer = () => {
    return (
     <>
    <div className='flex w-full h-[261px] bg-[#043873] pt-[100px]  pb-[32px] pl-[150px] gap-[100px]'>
        <div className='flex gap-2'>
            <Image src={Logo}
                alt='logo'
                width={30}
                height={25}
                className='w-[20px] h-[18px] mt-1 ' />
         <div>
            <h1 className=' font-semibold text-[#FFFFFF] text-[17px] '>whitespace</h1>
            <p className='text-[#FFFFFF] text-[12px] font-normal h-[120px] w-[240px] -ml-7'>whitepace was created<br />for the new ways we live<br />and work. We make a better<br /> workspace around the world</p>
        </div>
        </div>
        <div className='text-[#FFFFFF] text-[12px] gap-[15px]'>
            <p className='text-white font-bold text-[13px]'>Products</p>
            <ul className='text-[#FFE492]'>Overview</ul>
            <ul>Pricing</ul>
            <ul>Customer stories</ul>    
        </div> 
        <div className='text-[#FFFFFF] text-[12px] gap-[15px]'>
            <p className='text-white font-bold text-[13px]'>Resourses</p>
            <ul>Blog</ul>
            <ul>Guides & tutorials</ul>
            <ul>Help center</ul>    
        </div> 
        <div className='text-[#FFFFFF] text-[12px] gap-[15px]'>
            <p className='text-white font-bold text-[13px]'>Company</p>
            <ul>About</ul>
            <ul>Careers</ul>
            <ul>Media kit</ul>    
        </div>
        </div>
        <div className='w-[full] h-[40px] bg-[#2E4E73] '>
        <div className='w-[l69px] h-[20px] pl-[500px] text-[#FFFFFF]'>
    <h3 className='text-[#FFFFFF] text-[12px] pt-3'> Microsoft &copy; 2021 Whitepace LLC.</h3>
    </div>
    </div>
    </>
  )
}
           {/* <div className='gap-[100px]'> 
           <div className='-ml-7 '>
        <Image src={Logo} 
        alt='logo'
        width={37} 
        height={29} 
        className=' w-[30px]  h-[25px]   ' />
        </div>  
        <div >
        <h1 className={`flex font-semibold text-[#FFFFFF] text-[17px] pl-6`}>whitespace</h1>
        <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>
         <div>
          <p className='text-[#FFFFFF] text-[12px] font-normal h-[120px] w-[240px]'>whitepace was created<br />for the new ways we live<br />and work. We make a better<br /> workspace around the world</p>
         </div> 
 */}

          {/* </div>
         </div>  */}
        
        

    
   
export default Footer;