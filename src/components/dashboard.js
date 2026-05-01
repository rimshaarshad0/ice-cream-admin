'use client'
import React, { useState } from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import TotalPrice from './total'
import Navbar from './navbar'

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [openOrderId, setOpenOrderId] = useState(null)

  React.useEffect(() => {
    const fetchOrders = async () => {
      const data = await client.fetch(`
        *[_type == "order"] | order(createdAt desc) {
          _id,
          name,
          address,
          status,
          createdAt,
          cartItems[] {
            title,
            price,
            quantity,
            "imageUrl": image.asset->url
          }
        }
      `)
      setOrders(data)
    }

    fetchOrders()
  }, [])

  const toggleDetails = (id) => {
    setOpenOrderId(prev => (prev === id ? null : id))
  }

  const handleStatusChange = async (orderId, newStatus) => {
  try {
    await client.patch(orderId).set({ status: newStatus }).commit()

    setOrders(prev =>
      prev.map(order =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    )
  } catch (error) {
    console.error('Failed to update status:', error)
  }
}

const [statusFilter, setStatusFilter] = useState('all')

const filteredOrders = statusFilter === 'all'
  ? orders
  : orders.filter((order) => order.status?.toLowerCase() === statusFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] text-[#8B4513]">
      <Navbar statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      <h1 className="font_style text-[2rem] md:text-[3rem] tracking-widest font-extrabold mb-4 md:mb-8 text-center text-[#8B4513] mt-[-0.5rem] md:mt-4">All Orders</h1>

      <div className="max-w-5xl mx-auto px-2 md:px-4 space-y-4 pb-10">
        {filteredOrders.map(order => (
          <div key={order._id} className="bg-[#faeee6] hover:bg-gradient-to-br from-white to-[#c1a089] p-2 md:p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-102 group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-lg font-bold">{order.name}</h2>
                <p className="text-[#91572d] text-sm ">Status: {order.status}</p>
              </div>
              <div className='text-sm md:text-[1rem] hidden md:block'>{new Date(order.createdAt).toLocaleString()}</div>
              <button
                onClick={() => toggleDetails(order._id)}
                className="mt-2 md:mt-0 bg-[#8B4513] text-white px-4 py-1 rounded hover:bg-[#6e3610] transition"
              >
                {openOrderId === order._id ? 'Hide Details' : 'Show Details'}
              </button>
            </div>

            {openOrderId === order._id && (
              <div className="mt-4 border-t pt-4 space-y-1 md:space-y-3">
                <div className='flex justify-between'>
                    <p className="text-sm"><strong className='font-semibold'>Name:</strong> {order.name}</p>
                    <button
                        onClick={async () => {
                            if (confirm('Are you sure you want to delete this order?')) {
                                await client.delete(order._id)
                                setOrders((prev) => prev.filter((o) => o._id !== order._id))
                                setOpenOrderId(null)
                            }
                        }}
                        className="shake-on-hover text-[#8B4513] hover:text-red-500 font-semibold text-[1.5rem] flex items-center gap-1 pr-6"
                    >
                        🗑
                    </button>
                </div>
                <p className="text-sm mt-[-0.5rem] md:mt-[-1rem]"><strong className='font-semibold'>Address:</strong> {order.address}</p>
                <select value={order.status ?? ''} onChange={(e) => handleStatusChange(order._id, e.target.value)} className="text-[#91572d] text-sm bg-transparent border border-[#c4a489] rounded px-2 py-1">
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                </select>

                <h3 className="font-semibold mt-2">Order Items:</h3>
                <ul className="space-y-1 md:space-y-2">
                  {order.cartItems.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-white to-[#c1a089] md:bg-[#faeee6] md:from-[] md:to-[] p-3 md:p-4 rounded-lg m-1 md:m-2">
                      <p className='font-semibold'>{item.title}</p>
                      <p className='text-[#91572d] text-sm '>Price: Rs. {item.price} × {item.quantity}</p>
                      {item.imageUrl && (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="w-16 h-16 object-cover mt-1"
                        />
                      )}
                    </div>
                  ))}
                </ul>
                <TotalPrice items={order.cartItems} />
                <p className="text-sm">Created At: {new Date(order.createdAt).toLocaleString()}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
