'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () =>{
    const router = useRouter();
    const [validMail, setValidMail] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const HandleInputEmail = (e)=>{
        const value = e.target.value;
        setEmail(value);
        setValidMail(isEmailValid(value));
    }

    return (
        <div className="flex flex-col items-center">
            <img onClick={()=>router.back()} src="/backArrow.svg" alt="arrow" className="cursor-pointer self-start mt-5 ml-5 w-[24px]" />
            <img src="logo.svg" alt="logo" className="w-[72px]" />
            <div className="mt-[12px] relative">
                <p className="z-20 relative font-kumbh text-[#69235B] text-lg not-italic font-bold">Log in to Mokx</p>
                <div className="z-0 absolute bottom-[3.5px] left-0 w-[56px] h-[8px] bg-[#ffc746]"></div>
            </div>
            <p className="mt-[16px] w-[70%] font-inter text-[#69235B] text-center text-sm not-italic font-light leading-5 tracking-[0.1px]">Welcome back! Sign in using your social account or email to continue us</p>
            <div className="mt-[30px] flex items-center gap-[20px]">
                <div className="hover:bg-[#ffc746] hover:border-[#ffc746] border-black cursor-pointer flex items-center justify-center border w-[48px] h-[48px] rounded-full">
                    <img src="/facebookLogo.svg" alt="fb" />
                </div>
                <div className="hover:bg-[#ffc746] hover:border-[#ffc746] border-black cursor-pointer flex items-center justify-center border w-[48px] h-[48px] rounded-full">
                    <img src="/googleLogo.svg" alt="fb" />
                </div>
                <div className="hover:bg-[#ffc746] hover:border-[#ffc746] border-black cursor-pointer flex items-center justify-center border w-[48px] h-[48px] rounded-full">
                    <img src="/appleBlackLogo.svg" alt="fb" />
                </div>
            </div>
            <div className="mt-[30px] flex items-center gap-[15px] w-[90%] md:w-[375px]">
                <hr className="h-[1px] w-[43%] bg-[#CDD1D0]"/>
                <p className="font-inter text-[#69235B] text-center text-sm not-italic font-thin leading-[14px] tracking-[0.1px]">OR</p>
                <hr className="h-[1px] w-[43%] bg-[#CDD1D0]"/>
            </div>
            <div className="mt-[30px] flex flex-col items-start w-[90%] md:w-[375px]">
                <p className={`font-inter text-center text-sm not-italic font-medium leading-[14px] tracking-[0.1px] ${validMail? 'text-[#69235B]' : 'text-[#FF2D1B]'}`}>Your email</p>
                <input onChange={HandleInputEmail} value={email} type="text" className={`focus:outline-none w-full border-b px-4 py-2 font-poppins text-[#000E08] text-base not-italic font-normal leading-4 ${validMail? 'border-b-[#CDD1D0]' : 'border-b-[#FF2D1B]'}`} />
                {validMail ? "" : <p className="mt-[8px] self-end font-inter text-[#FF2D1B] text-xs not-italic font-thin leading-3">Invalid email address</p> }
                <p className={`mt-[30px] font-inter text-[#69235B] text-center text-sm not-italic font-medium leading-[14px] tracking-[0.1px]`}>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="focus:outline-none w-full border-b border-b-[#CDD1D0] px-4 py-2 font-poppins text-[#000E08] text-base not-italic font-normal leading-4" />
            </div>
            <button onClick={()=>router.push('/chatroom')} disabled={validMail && password?.length>0 ? false : true} className="mt-[157px] h-[54px] rounded-[10px] bg-[#ffc746] disabled:bg-[#FBDC94] w-[90%] md:w-[340px] font-kumbh text-[#69235B] disabled:text-[#EDA0A8] text-center text-xl not-italic font-medium leading-[normal]">Login</button>
            <button className="mt-[30px] font-kumbh text-[#FBBC04] hover:text-yellow-700 text-xl not-italic font-normal tracking-[0.1px]">Forgot Password?</button>
        </div>
    );
}

export default SignIn;