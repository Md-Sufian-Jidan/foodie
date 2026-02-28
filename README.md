<div align="center">

<img src="https://img.shields.io/badge/MealMate-Food%20Delivery-orange?style=for-the-badge&logo=food&logoColor=white" alt="MealMate" />

# 🍽️ MealMate

### A Modern Multi-Vendor Food Delivery Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

<br />

**MealMate** connects hungry customers with the best local food providers — seamlessly, beautifully, and in real time.

<br />

[🚀 Live Demo](https://mealmate-lemon.vercel.app) · [📡 API](https://foodie-server-seven.vercel.app) · [🐛 Report Bug](https://github.com/Md-Sufian-Jidan/foodie/issues) · [💡 Request Feature](https://github.com/Md-Sufian-Jidan/foodie/issues)

</div>

---

## 🎬 Demo Video

> Watch MealMate in action — from browsing meals to real-time order tracking.

<!-- Replace the URL below with your actual video link after uploading -->
[![MealMate Demo Video](https://drive.google.com/drive/folders/1BFsTe_Faip6CwDFOBLNyxfHM_T7Fbntd?usp=sharing)](https://drive.google.com/drive/folders/1BFsTe_Faip6CwDFOBLNyxfHM_T7Fbntd?usp=sharing)

<!-- > 📌 *Add your video link above once uploaded. You can also embed it using the syntax below:*
> ```md
> [![Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
> ``` -->

---

## 📸 Preview

| Customer View | Provider Dashboard | Admin Panel |
|:---:|:---:|:---:|
| Browse & order meals | Manage menu & orders | Full platform control |

---

## ✨ Features at a Glance

<table>
<tr>
<td width="33%" valign="top">

### 👤 Customers
- 🔍 Browse & search meals with advanced filters
- 🛒 Smart cart management
- 📦 Real-time order tracking
- ⭐ Reviews & ratings system
- 👤 Profile management
- 📱 Fully responsive design

</td>
<td width="33%" valign="top">

### 🏪 Providers
- 🏪 Restaurant profile customization
- 🍽️ Full meal management (add, edit, delete)
- 📊 Dashboard analytics
- 📋 Order acceptance & status updates
- ⭐ Review monitoring
- 💰 Revenue tracking & earnings overview

</td>
<td width="33%" valign="top">

### 👑 Admins
- 👥 Manage all customers & providers
- 📦 Platform-wide order oversight
- 🏷️ Meal category management
- 📊 Analytics dashboard
- 🔒 Role-based access control

</td>
</tr>
</table>

---

## 🔄 Order Lifecycle

```
PENDING  ──▶  ACCEPTED  ──▶  COOKING  ──▶  ON THE WAY  ──▶  DELIVERED
   │
   └──▶  CANCELLED  (only before acceptance)
```

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| shadcn/ui + Radix UI | Accessible UI components |
| Zustand | Lightweight state management |
| TanStack Form + Zod | Forms & validation |
| Better Auth | Authentication & sessions |
| Recharts | Data visualization |
| Lucide React | Icon library |

### ⚙️ Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| PostgreSQL | Relational database |
| Prisma ORM | Type-safe DB access |
| REST API | Communication layer |
| Better Auth (JWT) | Auth & authorization |

---

## 🔑 Test Credentials

> Use these to explore all three roles in the live demo.

| Role | Email | Password |
|------|-------|----------|
| 👑 Admin | `admin@foodie.com` | `Admin@1234` |
| 🏪 Provider | `superprovider@gmail.com` | `superprovider@com` |
| 👤 Customer | `supercustomer@gmail.com` | `supercustomer@com` |

---

## 🔒 Roles & Permissions

| Feature | 👤 Customer | 🏪 Provider | 👑 Admin |
|---------|:-----------:|:-----------:|:--------:|
| Browse Meals | ✅ | ✅ | ✅ |
| Place Orders | ✅ | ❌ | ❌ |
| Manage Restaurant | ❌ | ✅ | ❌ |
| Manage Meals | ❌ | ✅ | ❌ |
| Accept Orders | ❌ | ✅ | ❌ |
| View All Orders | ❌ | Own Only | ✅ |
| User Management | ❌ | ❌ | ✅ |
| Category Management | ❌ | ❌ | ✅ |

---

## 📁 Project Structure

```
mealmate/
├── 🎨 app/
│   ├── (commonLayout)/       # Public-facing pages
│   ├── (dashboardLayout)/    # Role-based dashboards
│   └── api/                  # API routes
├── 🧩 components/            # Reusable UI components
├── ⚡ actions/               # Server actions
├── 🔌 services/              # API service layer
├── 🗃️ store/                 # Zustand state stores
├── 📐 types/                 # TypeScript type definitions
└── 🔧 lib/                   # Utility functions

assaignment-4-server/
├── 📦 src/
│   ├── app/modules/          # Feature modules
│   ├── middleware/           # Express middlewares
│   ├── routes/               # API route definitions
│   ├── helper/               # Helper functions
│   ├── shared/               # Shared utilities
│   └── types/                # Server-side types
└── 🗄️ prisma/schema/         # Database schema
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js `18+`
- PostgreSQL
- npm / yarn / pnpm

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Md-Sufian-Jidan/foodie.git
cd foodie
```

### 2️⃣ Backend Setup

```bash
cd assaignment-4-server
npm install

# Configure environment
cp .env.example .env
# → Fill in your DATABASE_URL and other secrets

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npm run seed

# Start the dev server
npm run dev
# Server runs at: http://localhost:8080
```

### 3️⃣ Frontend Setup

```bash
cd ../food-hub-client
npm install

# Configure environment
cp .env.example .env.local
# → Set NEXT_PUBLIC_API_URL=http://localhost:8080

# Start the dev server
npm run dev
# App runs at: http://localhost:3000
```

---

## ⚙️ Environment Variables

### Frontend — `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Backend — `.env`

```env
DATABASE_URL=postgresql://user:password@localhost:5432/mealmate
# Add your auth secrets and other config here
```

---

## 📜 Available Scripts

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

Both frontend and backend are deployed on **Vercel**.

```bash
# Frontend
vercel --prod

# Backend
cd assaignment-4-server
vercel --prod
```

| Service | URL |
|---------|-----|
| 🌐 Frontend | https://mealmate-lemon.vercel.app |
| 📡 Backend API | https://foodie-server-seven.vercel.app |

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **[Md Abu Sufian Jidan](https://github.com/Md-Sufian-Jidan)**

⭐ If you found this project helpful, please consider giving it a star!

[![GitHub stars](https://img.shields.io/github/stars/Md-Sufian-Jidan/foodie?style=social)](https://github.com/Md-Sufian-Jidan/foodie/stargazers)

> ⚠️ *This is a portfolio/assignment project demonstrating full-stack development capabilities.*

</div>