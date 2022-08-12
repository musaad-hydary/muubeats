import React from "react";

const Contact = () => {
    return (
        <div className = "pt-8 bg-[#f2f2f2]">
        <div name = "contact" className = "w-full h-screen bg-[#f2f2f2] flex justify-center items-center p-4">
            <form method = "POST" action = "https://getform.io/f/b955fc50-0382-4ab9-bea4-19fcec60d47f" className = "flex flex-col max-w-[600px] w-full">
                <div className = "pb-2">
                    <p className = "text-4xl font-bold inline border-b-4 border-[#303030] text-[#303030]">Contact</p>
                    <p className='text-[#303030] py-6 pb-2'>Submit the form below to send me a message!</p>

                </div>
                <input type="text" placeholder="Name" name="name" className = "bg-gray-200 appearance-none border-2 border-[#303030] rounded w-full py-3 px-4 text-[#303030] leading-tight focus:outline-none focus:bg-[#f2f2f2] focus:border-blue-600" required/>
                <input type="email" placeholder="Email" name="email" className = "bg-gray-200 my-4 appearance-none border-2 border-[#303030] rounded w-full py-3 px-4 text-[#303030] leading-tight focus:outline-none focus:bg-[#f2f2f2] focus:border-blue-600" required/>
                <textarea name="message" rows="10" placeholder ="Message" className = "rounded-lg bg-gray-200 appearance-none border-2 border-[#303030] w-full py-4 px-4 text-[#303030] leading-tight focus:outline-none focus:bg-[#f2f2f2] focus:border-blue-600" required />
                <button className = "bg-blue-600 rounded-lg text-white border-2 hover:bg-blue-700 hover:border-blue-700 transition ease-in px-4 py-3 mt-4 mx-auto flex items-center">Let's Collaborate!</button>
            </form>
        </div>
        </div>
    )
}

export default Contact