// VitalFlw Core Prisma Schema (Draft)

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Clinic {
  id        String    @id @default(cuid()) // Maps to Clerk Organization ID
  name      String
  address   String?
  phone     String?
  users     User[]
  patients  Patient[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model User {
  id        String   @id // Maps to Clerk User ID
  email     String   @unique
  role      String   @default("STAFF") // "ADMIN", "DOCTOR", "RECEPTIONIST"
  clinicId  String
  clinic    Clinic   @relation(fields: [clinicId], references: [id])
  createdAt DateTime @default(now())
}

model Patient {
  id        String   @id @default(cuid())
  clinicId  String
  clinic    Clinic   @relation(fields: [clinicId], references: [id])
  firstName String
  lastName  String
  phone     String
  dob       DateTime?
  gender    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([clinicId])
}