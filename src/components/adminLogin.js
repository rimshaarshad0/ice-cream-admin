'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    const adminPassword = 'rim123' 

    if (password === adminPassword) {
      router.push('/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#faeee6] shadow-lg rounded-xl p-4 md:p-8 w-full max-w-md mt-10">
        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full border border-[#8B4513] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-[#8B4513] hover:bg-[#91572d] text-white py-2 rounded transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}
