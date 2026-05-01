'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import icon from '../../public/image/icon.png'
import Link from 'next/link'

const statuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

const Navbar = ({ statusFilter, setStatusFilter }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full z-50">
      <nav className="w-full h-[15vh] flex justify-between items-center px-4 max-w-[98%] md:max-w-[90%] m-auto">
        <div className="flex items-center">
          <Link href="/dashboard">
            <Image src={icon} alt="Logo" width={50} height={50} className="object-contain" />
          </Link>
        </div>

        <div className="hidden md:flex gap-[3.5rem] text-[#8B4513] font-bold">
          {statuses.map((status) => (
            <span
              key={status}
              onClick={() => setStatusFilter(status.toLowerCase())}
              className={`cursor-pointer hover:underline underline-offset-6 transition duration-200 ${
                statusFilter === status.toLowerCase() ? 'underline' : ''
              }`}
            >
              {status}
            </span>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#8B4513]"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-5 right-0 h-[65%] w-[50%] bg-[#faeee6] rounded-tl-2xl rounded-bl-2xl shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col items-start gap-6 text-[#8B4513] font-bold text-lg">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold self-end"
          >
            ✕
          </button>
          {statuses.map((status) => (
            <span
              key={status}
              onClick={() => {
                setStatusFilter(status.toLowerCase())
                setMenuOpen(false)
              }}
              className={`cursor-pointer hover:underline underline-offset-6 transition duration-200 ${
                statusFilter === status.toLowerCase() ? 'underline' : ''
              }`}
            >
              {status}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
