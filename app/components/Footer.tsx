import { FaPaypal } from "react-icons/fa";
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className='bg-black  text-white px-8 py-10 mt-8'>
        <div className="max-w-7xl mx-auto flex flex-col md:flex justify-between">
            <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-3 gap-x-10 gap-y-2 text-sm font-extralight">
            <div>
                <p>Banner / Signages</p>
                <p>Calling Card / Business Cards</p>
                <p>Corporate Give Aways</p>
            </div>
            <div>
                <p>ID / ID Lace</p>
                <p>Invitation</p>
                <p>Stickers and Labels</p>
            </div>
            <div>
                <p>Marketing Materials</p>
                <p>Temporay Plate Number</p>
                <p>Wall Mural</p>
            </div>
        </div>
    </div>

    <div className="mt-10 ">
        <h4 className="text-lg semi-bold mb-4">Follow Us</h4>
    <div className="flex space-x-4 text-2xl">
        <a href="https://www.facebook.com/photo/?fbid=1237045431770415&set=a.469292898545676">
            <FaFacebook height={40} width={40} className="bg-[#1877F2] rounded-full"/>
        </a>
        <a href="#">
            <FaSquareInstagram  height={40} width={40} className="bg-pink-300 text-pink-500 rounded-full"/>
        </a>
        </div>
    </div>
</div>
{/* div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center text-sm"> */}
{/* Bottom */}
<div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center text-sm">
    <p>© 2025, Burnbox Printing.</p>
    <FaPaypal  height={60} width={60} className="bg-blue-600 h-10 rounded-full w-10"/>
</div>
    </footer>
  )
}

export default Footer