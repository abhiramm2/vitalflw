"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  CalendarDays,
  Pill,
  LineChart,
  Clock,
  Users,
  ShieldCheck,
  ShieldHalf
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Grainient from "@/components/ui/grainient";
import SpotlightCard from "@/components/ui/spotlight-card";
import styles from "./page.module.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROLES = [
  {
    id: "Doctor",
    icon: Stethoscope,
    label: "Doctor",
    desc: "Digital EMR, e-prescriptions, and full patient history — all from one view.",
    accent: "#26A9A3",
  },
  {
    id: "Receptionist",
    icon: CalendarDays,
    label: "Receptionist",
    desc: "Appointment scheduling, patient check-in, and queue management — simplified.",
    accent: "#76C893",
  },
  {
    id: "Pharmacist",
    icon: Pill,
    label: "Pharmacist",
    desc: "Real-time prescription fulfillment linked directly to the doctor's orders.",
    accent: "#0F4C5C",
  },
  {
    id: "Admin",
    icon: LineChart,
    label: "Administrator",
    desc: "Clinic-wide analytics, staff oversight, and performance reporting.",
    accent: "#F26419",
  },
];

const BENEFITS = [
  {
    icon: Clock,
    title: "Hours back every day",
    desc: "Automated prescription routing, appointment reminders, and digital records eliminate the manual work that eats into your team's time.",
  },
  {
    icon: Users,
    title: "Nothing falls through",
    desc: "Real-time updates across every role mean your receptionist, doctor, and pharmacist are always working from the same information.",
  },
  {
    icon: ShieldCheck,
    title: "Patients feel the difference",
    desc: "Faster check-ins, accurate dispensing, and proactive follow-ups translate directly into a better patient experience.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "VitalFlw has completely changed how we manage patient flow. The connection between our reception and pharmacy alone saves us over an hour every single day.",
    name: "Dr. Sarah Mitchell",
    role: "Medical Director, City Health Clinic",
    initials: "SM",
  },
  {
    quote:
      "As a lead pharmacist, having prescriptions arrive digitally and in real time — linked directly to our inventory — has eliminated so many dispensing errors.",
    name: "James Carter",
    role: "Lead Pharmacist, Medicare Plus",
    initials: "JC",
  },
];

// ─── 3D Tilt hook ─────────────────────────────────────────────────────────────

function useTilt() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return { rotateX, rotateY, onMove, onLeave };
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [activeRole, setActiveRole] = useState("Doctor");
  const [scrolled, setScrolled] = useState(false);
  const tilt = useTilt();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.page}>

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <div className={styles.navWrapper}>
        <motion.header
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`${styles.navBar} ${scrolled ? styles.navBarScrolled : styles.navBarTop}`}
        >
          <div className={styles.navLogoGroup}>
            <Image
              src="/logo.svg"
              alt="VitalFlw"
              width={28}
              height={28}
              className={styles.navLogoImg}
              priority
            />
            <span className={`${styles.navBrandName} ${scrolled ? styles.navBrandNameScrolled : styles.navBrandNameTop}`}>
              VitalFlw
            </span>
          </div>

          <nav className={`${styles.navLinks} ${scrolled ? styles.navLinksScrolled : styles.navLinksTop}`}>
            {["Features", "Pricing", "Docs"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : styles.navLinkTop}`}
                >
                  {item}
                </motion.div>
              </Link>
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link href="/login" className={styles.btnNavGhost}>
              Member Login
              <ArrowRight className={styles.btnArrow} style={{ width: "0.875rem", height: "0.875rem" }} />
            </Link>
          </motion.div>
        </motion.header>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        {/* Animated gradient background */}
        <div className={styles.heroGrainWrapper}>
          <Grainient
            color1="#E2E8F0"
            color2="#F8FAFC"
            color3="#CCFBF1"
            timeSpeed={0.12}
            warpStrength={0.4}
            warpFrequency={2.5}
            warpAmplitude={70}
            grainAmount={0.03}
            contrast={1.1}
            saturation={0.5}
            zoom={1.2}
          />
        </div>

        {/* Soft radial glows */}
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />

        <div className={styles.heroInner}>

          {/* Left: copy */}
          <motion.div
            className={styles.heroCopy}
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className={styles.heroBadge}
            >
              <span className={styles.heroBadgeDot} />
              Built alongside practicing clinicians
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className={styles.heroH1}
            >
              The clinic platform
              <br />
              <span className={styles.heroH1Accent}>built for the people</span>
              <br />
              running it.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className={styles.heroParagraph}
            >
              VitalFlw unifies your doctors, receptionists, and pharmacists in one system — so every patient visit runs without a handoff gap.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className={styles.heroCtas}
            >
              <button className={styles.btnHeroPrimary}>
                Start 10-Day Free Trial
                <ArrowRight className={styles.btnArrow} style={{ width: "1rem", height: "1rem" }} />
              </button>
              <button className={styles.btnGhost}>
                See how it works
              </button>
            </motion.div>
          </motion.div>

          {/* Right: browser mockup */}
          <motion.div
            className={styles.heroMockupWrapper}
            initial={{ opacity: 0, y: 44, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
            onMouseMove={tilt.onMove}
            onMouseLeave={tilt.onLeave}
            style={{ perspective: 1100 }}
          >
            <motion.div
              style={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <BrowserMockup activeRole="Doctor" />
            </motion.div>
            <div className={styles.heroMockupGlow} />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className={styles.scrollCue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={() => {
            animate(window.scrollY, window.innerHeight, {
              duration: 1.2,
              ease: [0.32, 0.72, 0, 1], // Custom graceful easing
              onUpdate: (latest) => window.scrollTo(0, latest),
            });
          }}
        >
          <span className={styles.scrollCueLabel}>Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className={styles.scrollCueLine}
          />
        </motion.div>
      </section>

      {/* ── Trust band ─────────────────────────────────────────────────────── */}
      <section className={styles.trustBand}>
        <div className={styles.trustInner}>
          <div className={styles.trustHeadingBlock}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.eyebrow}
            >
              The Clinical Advantage
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={styles.trustH2}
            >
              Built by practitioners,
              <br />
              for practitioners.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.trustSubtext}
            >
              Every feature in VitalFlw was refined through direct feedback from clinic floors, ensuring we solve the real-world friction that slows down patient care.
            </motion.p>
          </div>

          <div className={styles.trustCardsGrid}>
            {[
              {
                icon: ShieldCheck,
                title: "Data Security First",
                desc: "Enterprise-grade encryption and HIPAA-ready protocols keeping patient data safe.",
              },
              {
                icon: Users,
                title: "Multi-Role Sync",
                desc: "Seamless handoffs between receptionists, doctors, and pharmacy staff in real-time.",
              },
              {
                icon: Clock,
                title: "Real Workflows",
                desc: "Designed to match how clinics actually operate, eliminating manual data entry gaps.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={styles.trustCard}
              >
                <div className={styles.trustCardIconWrap}>
                  <Icon className={styles.trustCardIcon} />
                </div>
                <h3 className={styles.trustCardTitle}>{title}</h3>
                <p className={styles.trustCardDesc}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roles section ──────────────────────────────────────────────────── */}
      <section className={styles.roles} id="features">
        <div className={styles.rolesInner}>

          <div className={styles.rolesHeadingBlock}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.eyebrow}
            >
              One Platform, Every Role
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={styles.rolesH2}
            >
              Every member of your team
              <br />
              has exactly what they need.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.rolesSubtext}
            >
              No more juggling disconnected tools. VitalFlw keeps your entire clinic staff in sync — from the consultation room to the pharmacy counter.
            </motion.p>
          </div>

          {/* Role tab pills */}
          <div className={styles.roleTabs}>
            {ROLES.map((role, idx) => (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                onClick={() => setActiveRole(role.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${styles.roleTabBtn} ${activeRole === role.id ? styles.roleTabBtnActive : styles.roleTabBtnInactive}`}
                style={activeRole === role.id ? { backgroundColor: role.accent } : {}}
              >
                <role.icon className={styles.roleTabIcon} />
                {role.label}
              </motion.button>
            ))}
          </div>

          {/* Role description */}
          <div className={styles.roleDescContainer}>
            <AnimatePresence mode="wait">
              {ROLES.filter((r) => r.id === activeRole).map((role) => (
                <motion.p
                  key={role.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className={styles.roleDescText}
                >
                  {role.desc}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>

          {/* Browser mockup with role animation */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className={styles.rolesMockupWrapper}
          >
            <BrowserMockup activeRole={activeRole} />
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ───────────────────────────────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsHeadingBlock}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.eyebrow}
            >
              Why VitalFlw
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={styles.benefitsH2}
            >
              Less overhead. Better care.
            </motion.h2>
          </div>

          <div className={styles.benefitsGrid}>
            {BENEFITS.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard
                  className={styles.benefitCard}
                  spotlightColor="rgba(38, 169, 163, 0.07)"
                >
                  <div className={styles.benefitIconWrap}>
                    <b.icon className={styles.benefitIconInner} />
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                    <p className={styles.benefitText}>{b.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialGlow1} />
        <div className={styles.testimonialGlow2} />
        <div className={styles.testimonialGlow3} />

        <div className={styles.testimonialsInner}>
          <div className={styles.testimonialHeader}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.testimonialEyebrow}
            >
              Trusted by the Best
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={styles.testimonialH2}
            >
              Real feedback.
              <br />
              Real clinics.
            </motion.h2>
          </div>

          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialCardContent}>
                  <div className={styles.quoteIconWrap}>
                    <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017C12.4647 13 12.017 12.5523 12.017 12V9C12.017 7.34315 13.3601 6 15.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6738 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM5.01695 21L5.01695 18C5.01695 16.8954 5.91238 16 7.01695 16H10.017C10.5692 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5692 8 10.017 8H7.01695C6.46467 8 6.01695 8.44772 6.01695 9V12C6.01695 12.5523 5.56923 13 5.01695 13H4.01695C3.46467 13 3.01695 12.5523 3.01695 12V9C3.01695 7.34315 4.3601 6 6.01695 6H10.017C11.6738 6 13.017 7.34315 13.017 9V15C13.017 16.6569 11.6738 18 10.017 18H7.01695C6.46467 18 6.01695 18.4477 6.01695 19V21H5.01695Z" />
                    </svg>
                  </div>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={styles.starIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.368 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <p className={styles.testimonialQuote}>{t.quote}</p>
                </div>
                <div className={styles.testimonialFooter}>
                  <div className={styles.testimonialAvatar}>{t.initials}</div>
                  <div className={styles.testimonialAuthorInfo}>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaGradientTop} />
        <div className={styles.ctaGlowOrb} />

        <div className={styles.ctaInner}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaEyebrow}
          >
            Get Started Today
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className={styles.ctaH2}
          >
            Your clinic deserves
            <br />
            better tools.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className={styles.ctaText}
          >
            Start your 10-day free trial and see how VitalFlw transforms day-to-day operations for your entire clinic team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className={styles.ctaButtons}
            style={{ flexDirection: "column" }}
          >
            <button className={styles.btnCtaPrimary} style={{ marginBottom: "2rem" }}>
              Start Free Trial
              <ArrowRight className={styles.btnArrow} style={{ width: "1rem", height: "1rem" }} />
            </button>
            <p className={styles.ctaDisclaimer}><ShieldCheck style={{ width: "1rem", height: "1rem", verticalAlign: "middle", marginRight: "0.5rem", marginBottom: "3px", color: "#26A9A3" }} />10 days free. No credit card needed.</p>
          </motion.div>
        </div>
      </section >

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      < footer className={styles.footer} >
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerLogoRow}>
              <Image
                src="/logo.svg"
                alt="VitalFlw"
                width={24}
                height={24}
                className={styles.footerLogo}
              />
              <span className={styles.footerBrandName}>VitalFlw</span>
            </div>
            <p className={styles.footerTagline}>
              The clinic management platform for modern medical practices.
            </p>
            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} VitalFlw. All rights reserved.
            </p>
          </div>

          {[
            { heading: "Product", links: ["Features", "Pricing", "Docs"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className={styles.footerColHeading}>{col.heading}</h4>
              <ul className={styles.footerLinks}>
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className={styles.footerLink}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer >
    </div >
  );
}

// ─── Browser Mockup ───────────────────────────────────────────────────────────

function BrowserMockup({ activeRole }: { activeRole: string }) {
  return (
    <div className={styles.mockup}>
      {/* Chrome bar */}
      <div className={styles.mockupChrome}>
        <div className={styles.mockupDots}>
          <div className={`${styles.mockupDot} ${styles.mockupDotRed}`} />
          <div className={`${styles.mockupDot} ${styles.mockupDotAmber}`} />
          <div className={`${styles.mockupDot} ${styles.mockupDotGreen}`} />
        </div>
        <div className={styles.mockupUrlBar}>
          <div className={styles.mockupUrlDot} />
          <div className={styles.mockupUrlText} />
        </div>
      </div>

      {/* App shell */}
      <div className={styles.mockupShell}>
        {/* Sidebar */}
        <div className={styles.mockupSidebar}>
          <div className={styles.mockupSidebarLogo} />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={i === 0 ? styles.mockupSidebarIconActive : styles.mockupSidebarIcon}
            />
          ))}
        </div>

        {/* Dynamic content */}
        <div className={styles.mockupContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className={styles.mockupContentPane}
            >
              {activeRole === "Doctor" && <DoctorView />}
              {activeRole === "Receptionist" && <ReceptionistView />}
              {activeRole === "Pharmacist" && <PharmacistView />}
              {activeRole === "Admin" && <AdminView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Role views ───────────────────────────────────────────────────────────────

function DoctorView() {
  return (
    <>
      {/* Top stat cards */}
      <div className={styles.doctorStats} style={{ height: "22%" }}>
        <div className={styles.doctorStatPrimary}>
          <div className={styles.doctorStatIconPrimary} />
          <div>
            <div className={styles.doctorStatLabelPrimary} />
            <div className={styles.doctorStatValuePrimary} />
          </div>
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.doctorStatDefault}>
            <div className={styles.doctorStatIconDefault} />
            <div>
              <div className={styles.doctorStatLabelDefault} />
              <div className={styles.doctorStatValueDefault} />
            </div>
          </div>
        ))}
      </div>

      {/* Main body */}
      <div className={styles.doctorBody}>
        <div className={styles.doctorPanel}>
          <div className={styles.doctorTabs}>
            {["History", "Notes", "Rx"].map((t, i) => (
              <div
                key={t}
                className={styles.doctorHistoryLine}
                style={{
                  height: "1rem",
                  width: "auto",
                  padding: "0 0.5rem",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: i === 0 ? "#26A9A3" : "#f1f5f9",
                  fontSize: "7px",
                  color: i === 0 ? "white" : "#94a3b8",
                  fontWeight: 600,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div className={styles.doctorHistory}>
            {[85, 72, 90, 64, 78].map((w, i) => (
              <div key={i} className={styles.doctorHistoryLine} style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>

        <div className={styles.doctorSidepanel}>
          <div className={styles.doctorPatientList}>
            <div className={styles.doctorPatientLabel} />
            {[...Array(3)].map((_, i) => (
              <div key={i} className={styles.doctorPatientItem}>
                <div className={styles.doctorPatientAvatar} />
                <div className={styles.doctorPatientLine} />
              </div>
            ))}
          </div>
          <div className={styles.doctorRxBtn} />
        </div>
      </div>
    </>
  );
}

function ReceptionistView() {
  const slots = [
    { filled: true, color: "#26A9A3" },
    { filled: true, color: "#76C893" },
    { filled: false, color: "" },
    { filled: true, color: "#26A9A3" },
    { filled: false, color: "" },
    { filled: true, color: "#76C893" },
  ];

  return (
    <>
      <div className={styles.receptionistHeader} style={{ height: "15%" }}>
        <div className={styles.receptionistSearch}>
          <div className={styles.receptionistSearchDot} />
          <div className={styles.receptionistSearchBar} />
        </div>
        <div className={styles.receptionistAddBtn} />
      </div>

      <div className={styles.receptionistBody}>
        <div className={styles.receptionistCalendar}>
          <div className={styles.receptionistDaysRow}>
            {["M", "T", "W", "T", "F"].map((d, i) => (
              <div
                key={d + i}
                className={styles.receptionistDay}
                style={{ backgroundColor: i === 2 ? "#26A9A3" : "#f1f5f9" }}
              />
            ))}
          </div>
          {slots.map((slot, i) => (
            <div key={i} className={styles.receptionistSlotRow} style={{ height: "13%" }}>
              <div className={styles.receptionistSlotTime} />
              {slot.filled ? (
                <div
                  className={styles.receptionistSlotFilled}
                  style={{ backgroundColor: slot.color + "22", borderLeft: `2px solid ${slot.color}` }}
                >
                  <div className={styles.receptionistSlotLine} style={{ backgroundColor: slot.color + "88" }} />
                </div>
              ) : (
                <div className={styles.receptionistSlotEmpty} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.receptionistQueue}>
          <div className={styles.receptionistQueueLabel} />
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.receptionistQueueItem}>
              <div className={styles.receptionistQueueAvatar} />
              <div className={styles.receptionistQueueInfo}>
                <div className={styles.receptionistQueueName} />
                <div className={styles.receptionistQueueSubrole} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function PharmacistView() {
  const drugs = [
    { stock: "high" }, { stock: "med" }, { stock: "low" },
    { stock: "high" }, { stock: "med" }, { stock: "low" },
  ];
  const stockColor = (s: string) =>
    s === "high" ? "#4ade80" : s === "med" ? "#fbbf24" : "#f87171";
  const stockWidth = (s: string) =>
    s === "high" ? "75%" : s === "med" ? "42%" : "14%";

  return (
    <>
      <div className={styles.pharmacistHeader} style={{ height: "14%" }}>
        <div className={styles.pharmacistSearch}>
          <div className={styles.pharmacistSearchDot} />
          <div className={styles.pharmacistSearchBar} />
        </div>
        {["All", "Pending", "Filled"].map((t, i) => (
          <div
            key={t}
            className={styles.pharmacistHeader}
            style={{
              backgroundColor: i === 1 ? "#0F4C5C" : "white",
              border: i === 1 ? "none" : "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              padding: "0 0.75rem",
              fontSize: "8px",
              fontWeight: 600,
              color: i === 1 ? "white" : "#94a3b8",
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexShrink: 0,
            }}
          >
            {t}
          </div>
        ))}
      </div>

      <div className={styles.pharmacistGrid}>
        {drugs.map((drug, i) => (
          <div key={i} className={styles.pharmacistCard}>
            <div className={styles.pharmacistCardHeader}>
              <div className={styles.pharmacistDrugIcon} />
              <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: stockColor(drug.stock) }} />
            </div>
            <div className={styles.pharmacistDrugName} />
            <div className={styles.pharmacistStockBar}>
              <div
                className={styles.pharmacistStockFill}
                style={{ width: stockWidth(drug.stock), backgroundColor: stockColor(drug.stock) }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AdminView() {
  const bars = [52, 68, 44, 88, 60, 92, 74];

  return (
    <>
      <div className={styles.adminKpis} style={{ height: "24%" }}>
        {[
          { accent: true },
          { accent: false },
          { accent: false },
          { accent: false },
        ].map((kpi, i) => (
          <div
            key={i}
            className={styles.adminKpi}
            style={{
              backgroundColor: kpi.accent ? "#FFF4EE" : "white",
              borderColor: kpi.accent ? "#F26419" + "44" : "#e2e8f0",
            }}
          >
            <div style={{ width: "1rem", height: "1rem", borderRadius: "0.25rem", backgroundColor: kpi.accent ? "#F26419" + "33" : "#f1f5f9" }} />
            <div>
              <div className={styles.adminKpiLabel} />
              <div style={{ height: "0.75rem", width: "2rem", borderRadius: "0.25rem", backgroundColor: kpi.accent ? "#F26419" + "66" : "#e2e8f0" }} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.adminBody}>
        <div className={styles.adminChart}>
          <div className={styles.adminChartLabel} />
          <div className={styles.adminBars}>
            {bars.map((h, i) => (
              <div
                key={i}
                className={styles.adminBar}
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 5 ? "#F26419" : "#26A9A3" + "55",
                }}
              />
            ))}
          </div>
        </div>

        <div className={styles.adminList}>
          <div className={styles.adminListLabel} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.adminListItem}>
              <div
                className={styles.adminListDot}
                style={{
                  backgroundColor: ["#26A9A3", "#76C893", "#F26419", "#26A9A3", "#76C893"][i] + "77",
                }}
              />
              <div className={styles.adminListLine} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
