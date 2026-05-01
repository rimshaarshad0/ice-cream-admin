import React from 'react'
import { client } from '@/sanity/lib/client'
import OrdersPage from '@/components/dashboard'

export default async function Orders() {
  const orders = await client.fetch(`
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
        image {
            asset->{
                _id,
                url,
                _ref
            }
        },
        "imageUrl": image.asset->url
        }
    }
  `)

  return (
    <div>
        <OrdersPage/>
    </div>
  )
}