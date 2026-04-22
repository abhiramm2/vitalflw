# VitalFlw

![VitalFlw](https://img.shields.io/badge/Status-Development-blue) ![Next.js](https://img.shields.io/badge/Next.js-14+-black) ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)

VitalFlw is a modern, high-performance, multi-tenant Clinic Management Software (SaaS) built to streamline operations for small to mid-sized medical practices.

## 🚀 Tech Stack

* **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
* **Database:** PostgreSQL (Hosted on [Supabase](https://supabase.com/))
* **ORM:** [Prisma](https://www.prisma.io/)
* **Authentication & Multi-Tenancy:** [Clerk](https://clerk.com/)
* **Deployment:** [Vercel](https://vercel.com/) (CI/CD Pipeline)

## ✨ Core Features

* **Multi-Tenant Architecture:** Complete data isolation between different clinics using Clerk Organizations and Prisma.
* **Role-Based Access Control (RBAC):** Distinct workflows for Clinic Admins, Doctors, Receptionists, and Pharmacists.
* **Electronic Medical Records (EMR):** Secure, centralized patient histories and radiological scans.
* **Smart Scheduling:** Real-time queue management and appointment booking.
* **Digital Prescriptions:** One-click generation and secure sharing of prescriptions.
* **Billing & Invoicing:** Automated GST-compliant invoicing integrated with the inventory system.

## 📂 Project Structure

```text
vitalflw/
├── .antigravity/       # Agentic AI Context (Design rules, Schema, Architecture)
├── app/                # Next.js App Router (Frontend UI & Server Actions)
│   ├── (auth)/         # Clerk Login/Signup pages
│   ├── (dashboard)/    # Protected SaaS interface
│   └── (marketing)/    # Public landing page
├── components/         # Reusable React components (shadcn/ui)
├── lib/                # Utility functions, Prisma client setup
├── prisma/             # Database schema and migrations
└── public/             # Static assets