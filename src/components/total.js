"use client"
import React from 'react'

const TotalPrice = ({ items }) => {
  const getTotal = () =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

  return <div className="font-semibold mt-2">Total: Rs. {getTotal()}</div>
}

export default TotalPrice