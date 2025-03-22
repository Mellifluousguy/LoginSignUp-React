import React from 'react'
import { Link } from 'react-router-dom'

const landingPage = () => {
    return (
        <div className="md:max-w-[375px] max-w-screen h-lvh border-2 flex text-heading px-[20px] flex-col justify-end border-gray-300 w-full bg-[#F7F8F9]">
            <h1 className="text-[28px] opacity-100 font-medium ">Welcome to PopX</h1>
            <p className="opacity-60 text-justify w-60 mb-[29px] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <Link to={"/register"}>
                <button className="w-full py-[11px] rounded-md mb-[10px] font-medium text-white bg-[#6C25FF]">
                    Create Account
                </button>
            </Link>
            <Link to={"/login"}>
                <button className="w-full py-[11px] rounded-md font-medium mb-[41px] bg-[#6C25FF4B]">
                    Already Registered? Login
                </button>
            </Link>
        </div>
    )
}

export default landingPage