
const Onboarding = () => {
    return (
        <div className="mb-[50px] flex flex-col items-center bg-[#69235B] min-h-[100vh]">
            <img src="/heroBanner.png" alt="" className="h-[304px] min-w-[100vw] md:min-w-[380px]"/>
            <div className="top-[283px] absolute flex items-center justify-center rounded-md bg-[#CBCBFF] w-[191.25px] h-[30.375px]">
                <p className="font-inter text-[#69235B] text-center text-base not-italic font-medium leading-[14px] tracking-[0.1px]">Arya, AI Acharya</p>
            </div>
            <div className="mt-[37px] flex flex-col items-center w-[80%] mx-auto">
                <p className="inline flex-wrap font-inter text-white text-[32px] not-italic font-semibold leading-[normal]">
                    Discover the timeless wisdom of
                    <span className="text-[#FFC746] flex-wrap ml-2">the Vedas.</span>
                </p>
                <p className="mt-5 inline flex-wrap font-inter text-white text-base not-italic font-light leading-[26px]">
                    Sign up and
                    <span className="text-[#FFC746] flex-wrap ml-2">journey through ancient knowledge with Arya 🌟</span>
                </p>
            </div>
            <div className="mt-[25px] flex items-center gap-[20px]">
                <div className="flex items-center justify-center border w-[48px] h-[48px] rounded-full">
                    <img src="/facebookLogo.svg" alt="fb" />
                </div>
                <div className="flex items-center justify-center border w-[48px] h-[48px] rounded-full">
                    <img src="/googleLogo.svg" alt="fb" />
                </div>
                <div className="flex items-center justify-center border w-[48px] h-[48px] rounded-full">
                    <img src="/appleLogo.svg" alt="fb" />
                </div>
            </div>
            <div className="mt-[15px] flex items-center gap-[15px] w-[90%]">
                <hr className="h-[1px] w-[43%] bg-[#CDD1D0] opacity-[0.25]"/>
                <p className="font-inter text-white text-center text-sm not-italic font-thin leading-[14px] tracking-[0.1px]">OR</p>
                <hr className="h-[1px] w-[43%] bg-[#CDD1D0] opacity-[0.25]"/>
            </div>
            <button className="mt-[15px] h-[54px] rounded-[10px] bg-[#ffc746] hover:bg-[#FBDC94] w-[90%] md:w-[340px] font-kumbh text-[#69235B] text-center text-xl not-italic font-medium leading-[normal]">Sign up with mail</button>
            <button className="mt-[25px] flex items-center gap-2 font-kumbh text-white text-xl not-italic font-normal leading-[14px] tracking-[0.1px]">
                Existing account?
                <p className="text-[#fbbc04]">Log in</p>
            </button>
        </div>
    );
}

export default Onboarding;
