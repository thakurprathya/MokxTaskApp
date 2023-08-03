'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () =>{
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [validMail, setValidMail] = useState(true);
    const [validPass, setValidPass] = useState(true);

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const HandleInputEmail = (e)=>{
        const value = e.target.value;
        setEmail(value);
        setValidMail(isEmailValid(value));
    }
    const HandleInputPass = (e)=>{
        const value = e.target.value;
        setConfirmPass(value);
        setValidPass(value === password);
    }

    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <img onClick={()=>router.back()} src="/backArrow.svg" alt="arrow" className="cursor-pointer self-start mt-5 ml-5 w-[24px]" />
            <img src="logo.svg" alt="logo" className="w-[72px]" />
            <div className="mt-[12px] flex flex-col relative w-[12.15%]">
                <p className="z-20 font-kumbh text-[#69235B] text-lg not-italic font-bold">Sign up with Email</p>
                <div className="z-0 absolute bottom-[3.5px] -right-1 w-[56px] h-[8px] bg-[#ffc746]"></div>
            </div>

            {/* Form */}
            <p className="mt-[16px] w-[70%] font-inter text-[#69235B] text-center text-sm not-italic font-light leading-5 tracking-[0.1px]">Welcome back! Sign in using your social account or email to continue us</p>
            <div className="mt-[60px] flex flex-col items-start w-[90%] md:w-[375px]">
                <p className={`overflow-hidden font-inter text-[#69235B] text-center text-sm not-italic font-medium leading-[14px] tracking-[0.1px]`}>Your name</p>
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="focus:outline-none w-full border-b border-b-[#CDD1D0] px-4 py-2 font-poppins text-[#000E08] text-base not-italic font-normal leading-4" />
                <p className={`overflow-hidden mt-[30px] font-inter text-center text-sm not-italic font-medium leading-[14px] tracking-[0.1px] ${validMail? 'text-[#69235B]' : 'text-[#FF2D1B]'}`}>Your email</p>
                <input onChange={HandleInputEmail} value={email} type="text" className={`focus:outline-none w-full border-b px-4 py-2 font-poppins text-[#000E08] text-base not-italic font-normal leading-4 ${validMail? 'border-b-[#CDD1D0]' : 'border-b-[#FF2D1B]'}`} />
                {validMail ? "" : <p className="mt-[8px] self-end font-inter text-[#FF2D1B] text-xs not-italic font-thin leading-3">Invalid email address</p> }
                <p className={`overflow-hidden mt-[30px] font-inter text-[#69235B] text-center text-sm not-italic font-medium leading-[14px] tracking-[0.1px]`}>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="focus:outline-none w-full border-b border-b-[#CDD1D0] px-4 py-2 font-poppins text-[#000E08] text-base not-italic font-normal leading-4" />
                <p className={`overflow-hidden mt-[30px] font-inter text-center text-sm not-italic font-medium leading-[14px] tracking-[0.1px] ${validPass? 'text-[#69235B]' : 'text-[#FF2D1B]'}`}>Confirm Password</p>
                <input onChange={HandleInputPass} value={confirmPass} type="password" className={`focus:outline-none w-full border-b px-4 py-2 font-poppins text-[#000E08] text-base not-italic font-normal leading-4 ${validPass? 'border-b-[#CDD1D0]' : 'border-b-[#FF2D1B]'}`} />
                {validPass ? "" : <p className="mt-[8px] self-end font-inter text-[#FF2D1B] text-xs not-italic font-thin leading-3">Passwords do not match</p> }
            </div>
            <button onClick={()=>router.push('/chatroom')} disabled={validPass && validMail && password?.length>0 && name?.length>0 && confirmPass?.length>0 ? false : true} className="mt-[118px] h-[54px] rounded-[10px] bg-[#ffc746] disabled:bg-[#FBDC94] w-[90%] md:w-[340px] font-kumbh text-[#69235B] disabled:text-[#EDA0A8] text-center text-xl not-italic font-medium leading-[normal]">Create an account</button>
        </div>
    );
}

export default SignUp;