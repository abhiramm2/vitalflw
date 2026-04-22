# VitalFlw Architecture & Stack Rules

## 1. Core Stack
* **Framework:** Next.js 14+ (App Router).
* **Language:** TypeScript (Strict mode enabled). Any `any` types should be flagged.
* **Database:** PostgreSQL (Hosted on Supabase).
* **ORM:** Prisma.
* **Authentication:** Clerk (Utilizing Clerk Organizations for Multi-Tenancy).

## 2. Routing Conventions
* `app/(marketing)/...`: Public-facing pages (Home, Pricing, About).
* `app/(auth)/...`: Clerk login/signup pages.
* `app/(dashboard)/...`: Protected routes for authenticated clinic staff.

## 3. Data Fetching & Mutations
* Prefer **React Server Components (RSC)** for data fetching to optimize performance.
* Use **Server Actions** (`"use server"`) for data mutations (e.g., creating a patient, generating a bill).
* Avoid creating heavy `api/` route handlers unless integrating with external webhooks (like Stripe or MSG91).

## 4. Multi-Tenancy (Critical)
* Every database query MUST be scoped to the user's `clinicId` (derived from Clerk Organizations).
* Data isolation is the highest priority. A user from Clinic A must never be able to query data from Clinic B.