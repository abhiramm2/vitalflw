"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/logo.svg" alt="VitalFlw" width={32} height={32} className={styles.logo} />
              <span className={styles.brandName}>VitalFlw</span>
            </Link>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>Sign in to your account to continue</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>Username</label>
              <input 
                type="text" 
                id="username" 
                className={styles.input} 
                placeholder="Enter your username" 
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  className={styles.input} 
                  placeholder="Enter your password" 
                  required
                />
                <button 
                  type="button" 
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.forgotPassword}>
              <Link href="#" className={styles.link}>Forgot password?</Link>
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account? <Link href="#" className={styles.link}>Contact sales</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
