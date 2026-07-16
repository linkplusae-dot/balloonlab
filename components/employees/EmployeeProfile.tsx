"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  IdCard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { EmployeeRecord } from "@/lib/employees/data";
import styles from "@/app/employee/[id]/employee-profile.module.css";

type EmployeeProfileProps = {
  employee: EmployeeRecord;
};

const details = [
  { key: "employeeId", label: "Employee ID", icon: IdCard },
  { key: "company", label: "Company", icon: Building2 },
  { key: "email", label: "Work Email", icon: Mail },
  { key: "phone", label: "Phone", icon: Phone },
  { key: "location", label: "Office Location", icon: MapPin },
] as const;

export function EmployeeProfile({ employee }: EmployeeProfileProps) {
  const reduceMotion = useReducedMotion();
  const [shared, setShared] = useState(false);

  const shareProfile = async () => {
    const shareData = {
      title: `${employee.name} — ${employee.role} at Balloon Lab`,
      text: `Verified Balloon Lab employee profile for ${employee.name}.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        window.setTimeout(() => setShared(false), 2200);
      }
    } catch {
      // The user may dismiss the native share sheet.
    }
  };

  const enter = (delay: number, x = 0) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 54, x, rotateX: 12, scale: 0.94 },
    animate: { opacity: 1, y: 0, x: 0, rotateX: 0, scale: 1 },
    transition: { type: "spring" as const, stiffness: 62, damping: 18, delay },
  });

  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glowPink} aria-hidden="true" />
      <div className={styles.glowBlue} aria-hidden="true" />

      <section className={styles.profileShell} aria-labelledby="employee-name">
        <motion.aside {...enter(0.14, -65)} className={styles.identityCard}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <div className={styles.cardImage}>
            <Image
              src={employee.cardImage}
              alt={`Balloon Lab employee ID card for ${employee.name}`}
              fill
              preload
              sizes="(max-width: 760px) 92vw, 430px"
            />
          </div>
          <span className={styles.cardSeal}><Image src="/logo-transparent.png" alt="" width={108} height={135} /></span>
        </motion.aside>

        <motion.article {...enter(0.22, 65)} className={styles.profileCard}>
          <div className={styles.profileAura} aria-hidden="true" />
          <div className={styles.statusRow}>
            <span className={styles.activeBadge}><CheckCircle2 size={17} /> {employee.status}</span>
            <span className={styles.verifiedBadge}><ShieldCheck size={17} /> Verified Balloon Lab Employee</span>
          </div>

          <header className={styles.profileHeading}>
            <p><Sparkles size={15} /> Employee profile</p>
            <h1 id="employee-name">{employee.name}</h1>
            <strong>{employee.role}</strong>
          </header>

          <div className={styles.details}>
            {details.map(({ key, label, icon: Icon }, index) => {
              const value = employee[key];
              return (
                <motion.div
                  key={key}
                  className={styles.detailRow}
                  initial={reduceMotion ? false : { opacity: 0, x: 28, rotateY: -7 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.38 + index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className={styles.detailLabel}><Icon size={20} /><b>{label}</b></span>
                  {key === "email" ? <a href={`mailto:${value}`}>{value}</a> : key === "phone" ? <a href={`tel:${value}`}>{value}</a> : <span>{value}</span>}
                </motion.div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={shareProfile}><Share2 size={19} /> {shared ? "Link Copied" : "Share Profile"}</button>
            <a href={`mailto:${employee.email}`}><Mail size={19} /> Email</a>
            <a href={`${employee.whatsapp}?text=${encodeURIComponent(`Hello ${employee.name}, I found your verified Balloon Lab employee profile.`)}`} target="_blank" rel="noreferrer"><MessageCircle size={19} /> WhatsApp</a>
          </div>

          <p className={styles.verificationNote}>
            <BadgeCheck size={19} />
            This digital profile confirms employment status only when opened from the official <b>balloonlab.ae</b> domain.
          </p>
        </motion.article>
      </section>
    </main>
  );
}
