'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChatRoom = () =>{
    const router = useRouter();
    const [lang, setLang] = useState('english');
    const [page, setPage] = useState(1);

    return (
        <div className="flex flex-col items-center bg-[#F8F8FF] min-h-[100vh]">

            {/* Header Section */}
            <div className="flex items-center justify-between w-full bg-white p-5">
                <div className="flex items-center">
                    <img onClick={()=>router.back()} src="/backArrow.svg" alt="arrow" className="cursor-pointer w-[24px]" />
                    <div className="relative ml-[12px] md:ml-[20px]">
                        <img src="/avatar.svg" alt="avatar" className="w-[44px] h-[44px]" />
                        <div className="absolute bottom-1 right-1 w-[8px] h-[8px] rounded-full bg-[#2BEF83]"></div>
                    </div>
                    <div className="flex flex-col gap-[6px] ml-[12px] md:ml-[20px]">
                        <p className="font-raleway text-[#69235B] text-base not-italic font-medium leading-4">Arya</p>
                        <p className="font-inter text-[#797C7B] text-xs not-italic font-thin leading-3">Vedic AI Bot</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={()=>{lang==='english'?setLang('hindi'):setLang('english')}} className="font-mukta text-base not-italic font-[275] leading-4 flex items-center">
                        <p className={lang==='english' ? 'text-[#FBBC04]' : 'text-[#FBDC94]'}>A</p>
                        <p className="text-[#FBDC94]">/</p>
                        <p className={lang==='hindi' ? 'text-[#FBBC04]' : 'text-[#FBDC94]'}>क</p>
                    </button>
                    <button onClick={()=>{page===1?setPage(2):setPage(1)}} className="font-mukta text-base not-italic font-[275] leading-4 flex items-center">
                        <p className={page===1 ? 'text-[#FBBC04]' : 'text-[#FBDC94]'}>1</p>
                        <p className="text-[#FBDC94]">/</p>
                        <p className={page===2 ? 'text-[#FBBC04]' : 'text-[#FBDC94]'}>2</p>
                    </button>
                </div>
            </div>

            {/* Main Section - page 1*/}
            {page===1 ? 
                <div className="mt-[25px] flex flex-col items-center w-[90%] mb-[180px]">
                    <div className="self-start flex items-start gap-2">
                        <img src="/avatar.svg" alt="avatar" className="w-[40px] h-[40px]"/>
                        <p className={`p-4 max-w-[80%] md:max-w-[60%] rounded-xl rounded-tl-none bg-[#69235B] text-white text-xs not-italic font-normal leading-4 tracking-[0.12px] font-inter`}>
                            🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns. 
                            <br/><br/>
                            Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.
                        </p>
                    </div>
                    <p className="mt-[28px] flex items-center gap-2 font-kumbh text-[#69235B] text-base not-italic font-normal leading-[normal] tracking-[0.24px]">
                        <img src="/thuder.svg" alt="thuder" />
                        You can ask queries like:
                    </p>
                    <p className="w-[252px] mt-[12px] p-4 bg-[#FBBC04] rounded-xl font-inter text-[#69235B] text-xs not-italic font-normal leading-[normal] tracking-[0.18px]">What is the mantra in Rigveda 10.2.3?</p>
                    <p className="w-[252px] mt-[6px] p-4 bg-[#FBBC04] rounded-xl font-inter text-[#69235B] text-xs not-italic font-normal leading-[normal] tracking-[0.18px]">What are the prescribed Vedic remedies for snake bites?</p>
                    <p className="w-[252px] mt-[6px] p-4 bg-[#FBBC04] rounded-xl font-inter text-[#69235B] text-xs not-italic font-normal leading-[normal] tracking-[0.18px]">Can you tell me the significance of the Gayatri Mantra?</p>
                    <p className="mt-[35px] flex items-center gap-2 font-abeezee text-[#69235B] text-[13px] not-italic font-normal leading-[normal] tracking-[0.195px]">
                        <img src="/warning.svg" alt="warning" />
                        Limitation: May struggle with complex queries.
                    </p>
                    <div className="self-start mt-[40px] flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <img src="/avatar.svg" alt="avatar" className="w-[40px] h-[40px]"/>
                            <p className={`p-4 max-w-[80%] md:max-w-[60%] rounded-xl rounded-tl-none bg-[#69235B] text-white text-xs not-italic font-normal leading-4 tracking-[0.12px]`}>Let your curiosity guide you; wishing you blessings and enlightenment 🕉️</p>
                        </div>
                        <p className="self-end md:self-auto md:ml-[170px] mt-[8px] font-inter text-[#797C7B] text-right text-[10px] not-italic font-thin leading-[10px]">09:25 AM</p>
                    </div>
                </div>
            : "" }

            {/* Main Section - page 2*/}
            {page===2 ? 
                <div className="mt-[25px] flex flex-col items-center w-[90%] mb-[180px]">
                    <p className="font-raleway text-[#69235B] text-right text-xs not-italic font-medium leading-3">Today</p>
                    <p className="self-end mt-[25px] p-4 bg-[#FBBC04] rounded-xl rounded-tr-none font-inter text-white text-right text-xs not-italic font-normal leading-3 tracking-[0.12px]">Hello! How are you?</p>
                    <p className="self-end mt-[8px] font-inter text-[#797C7B] text-right text-[10px] not-italic font-thin leading-[10px]">09:25 AM</p>
                    <div className="self-start mt-[45px] flex flex-col items-end">
                        <div className="flex items-center gap-2">
                            <img src="/avatar.svg" alt="avatar" className="w-[40px] h-[40px]"/>
                            <p className={`p-4 rounded-xl rounded-tl-none bg-[#69235B] text-white text-xs not-italic font-normal leading-4 tracking-[0.12px] ${lang==='english'?'font-inter':'font-mukta'}`}>
                                {lang==="english" ?  "Hello ! Nazrul How are you?" : "अपनेपन यथासंभव धीर-धीरे अपने समय"}
                            </p>
                        </div>
                        <p className="self-end mt-[8px] font-inter text-[#797C7B] text-right text-[10px] not-italic font-thin leading-[10px]">09:25 AM</p>
                    </div>
                    <p className="self-end mt-[56px] p-4 bg-[#FBBC04] rounded-xl rounded-tr-none font-inter text-white text-right text-xs not-italic font-normal leading-3 tracking-[0.12px]">You did your job well!</p>
                    <p className="self-end mt-[8px] font-inter text-[#797C7B] text-right text-[10px] not-italic font-thin leading-[10px]">09:25 AM</p>
                    <div className="self-start mt-[45px] flex flex-col">
                        <div className="flex items-center gap-2">
                            <img src="/avatar.svg" alt="avatar" className="w-[40px] h-[40px]"/>
                            <p className={`p-4 rounded-xl rounded-tl-none bg-[#69235B] text-white text-xs not-italic font-normal leading-4 tracking-[0.12px] ${lang==='english'?'font-inter':'font-mukta'}`}>
                                {lang==="english" ?  "Have a great working week!!" : "हमारे लेकर वर्गाकार करता। होना त्याग"}
                            </p>
                        </div>
                        <p className={`mt-[10px] self-start ml-[44px] p-4 rounded-xl rounded-tl-none bg-[#69235B] text-white text-xs not-italic font-normal leading-4 tracking-[0.12px] ${lang==='english'?'font-inter':'font-mukta'}`}>
                            {lang==="english" ?  "Hope you like it" : "क्योंकि विकास करता"}
                        </p>
                        <p className="self-end mt-[8px] font-inter text-[#797C7B] text-right text-[10px] not-italic font-thin leading-[10px]">09:25 AM</p>
                    </div>
                </div>
            : "" }

            {/* Input Section */}
            <div className="w-full fixed bottom-0 bg-[#F8F8FF] pb-8 pt-2">
                <div className="mx-auto w-[90%] md:w-[70%] max-w-[800px] flex items-center bg-white rounded-[30px] p-4 px-7 shadow-[5px_4px_20px_0px_rgba(0,0,0,0.13)]">
                    <input type="text" className="w-[95%] focus:outline-none pr-4 py-2 font-inter text-black placeholder:text-[#A1A1A1] text-[13px] not-italic font-normal leading-[normal] " placeholder="Write your message"/>
                    <img src="/send.svg" alt="send" className="cursor-pointer" />
                    <img src="/microphone.svg" alt="mic" className="cursor-pointer" />
                </div>
            </div>

        </div>
    );
}

export default ChatRoom;