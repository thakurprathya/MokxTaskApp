'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => { 
            router.push('/onboarding'); 
        }, 5000);
    },[]);

    return (
        <div className='flex flex-col items-center'>
            <img onClick={()=>{router.push('/onboarding')}} src={'/logo.svg'} alt="logo" className="cursor-pointer mt-[150px] md:mt-[200px] w-[172px] h-[172px]" />
            <p onClick={()=>{router.push('/onboarding')}} className="cursor-pointer font-kumbh mt-[150px] md:mt-[203px] text-[#69235B] text-center text-xl not-italic font-semibold leading-[normal]">Back to Vedas 🕉️</p>
        </div>
    )
}

export default Home;
