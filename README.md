# 🍦 Ice Cream Admin Dashboard

A modern **Admin Dashboard** built with **Next.js 15 + Sanity CMS** to manage customer orders for an ice cream store.
This dashboard allows admins to **view, update, filter, and delete orders** in real-time.

---

## 🚀 Features

### 🔐 Admin Authentication

* Simple password-based login system
* Redirects to dashboard on successful login

### 📦 Order Management

* View all customer orders
* Expand each order to see full details:

  * Customer name
  * Address
  * Order items
  * Total price
  * Created date

### 🔄 Order Status Control

* Update order status:

  * Pending
  * Processing
  * Shipped
  * Delivered
  * Cancelled

### 🗑 Delete Orders

* Remove orders permanently with confirmation

### 🔍 Filter Orders

* Filter orders by status using navbar:

  * All / Pending / Processing / Shipped / Delivered / Cancelled

### 💰 Total Price Calculation

* Automatically calculates total price of each order

### 📱 Responsive Design

* Fully responsive UI (mobile + desktop)
* Sidebar menu for mobile devices

---

## 🛠 Tech Stack

* **Next.js 15 (App Router)**
* **React**
* **Tailwind CSS**
* **Sanity CMS**
* **Next Image Optimization**

---

## 📁 Project Structure

```
src/
│
├── app/
│   ├── page.js                # Admin Login Page
│   ├── dashboard/page.js     # Dashboard Page
│   ├── layout.js             # Root Layout
│   └── api/                  # API routes (update/delete orders)
│
├── components/
│   ├── adminLogin.js         # Login Component
│   ├── dashboard.js          # Orders UI
│   ├── navbar.js             # Filter Navigation
│   └── total.js              # Total Price Component
│
├── sanity/
│   ├── lib/
│   │   ├── client.ts         # Sanity Client
│   │   ├── image.ts          # Image Builder
│   │   └── live.ts           # Live Data Config
│   │
│   ├── schemaTypes/
│   │   └── index.ts          # Schema Registration
│   │
│   ├── items.js              # Product Schema
│   ├── order.js              # Order Schema
│   ├── reviews.js            # Review Schema
│   └── env.ts                # Environment Config
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ice-cream-admin-dashboard.git
cd ice-cream-admin-dashboard
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-03

SANITY_API_TOKEN=your_sanity_token
```

> ⚠️ Use an **Editor token** for write access (update/delete).

---

### 4️⃣ Run the project

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🔌 API Routes

### Update Order Status

```
POST /api/update-order
```

**Body:**

```json
{
  "orderId": "string",
  "status": "processing"
}
```

---

### Delete Order

```
POST /api/delete-order
```

**Body:**

```json
{
  "orderId": "string"
}
```

---

## 🧠 Sanity Schema Overview

### 📦 Order Schema

* name
* address
* cartItems[]

  * title
  * price
  * quantity
  * image
* status
* createdAt

---

### 🍨 Item Schema

* title
* slug
* image
* description
* price
* category
* available

---

### ⭐ Review Schema

* name
* rating
* message

---

## ⚠️ Important Notes

* ❌ Do NOT expose Sanity token with `NEXT_PUBLIC_`
* ✅ Always use server-side API routes for:

  * Updating orders
  * Deleting orders
* ⚠️ Current login system is basic (not secure for production)

---

## 🔒 Future Improvements

* Secure authentication (JWT / NextAuth)
* Role-based admin system
* Real-time updates (Sanity Live API)
* Order analytics dashboard
* Payment integration tracking

---

## 🎯 Use Case

Perfect for:

* Small food businesses
* Ice cream shops
* E-commerce admin panels
* Learning full-stack development with Next.js + Sanity

---

## 👨‍💻 Author

**Adeel Arshad**

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
