"use client";

import Image from "next/image";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { useCallback, useEffect } from "react";
import styles from "./FounderLinkedInBadge.module.css";

const founderLinkedInUrl =
  "https://ae.linkedin.com/in/mubarak-obaid-al-dhaheri-95bb74420";

declare global {
  interface Window {
    LIRenderAll?: () => void;
  }
}

export function FounderLinkedInBadge() {
  const renderLinkedInBadge = useCallback(() => {
    window.LIRenderAll?.();
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(renderLinkedInBadge);
    return () => window.cancelAnimationFrame(frame);
  }, [renderLinkedInBadge]);

  return (
    <section className={styles.section} aria-labelledby="founder-linkedin-title">
      <div className={styles.card}>
        <article className={styles.profile}>
          <div className={styles.portrait}>
            <Image
              src="/mubarak-obaid-al-dhaheri-founder-balloon-lab-uae.webp"
              alt="Mubarak Obaid Al Dhaheri, Founder and CEO of Balloon Lab"
              fill
              loading="lazy"
              sizes="(max-width: 640px) 72vw, (max-width: 1000px) 240px, 260px"
              className={styles.portraitImage}
            />
          </div>

          <div className={styles.profileCopy}>
            <p className={styles.kicker}>Founder profile</p>
            <h2 id="founder-linkedin-title">Mubarak Obaid Al Dhaheri</h2>
            <p className={styles.role}>Founder &amp; CEO, Balloon Lab</p>
            <p className={styles.bio}>
              Mubarak Obaid Al Dhaheri is the Founder &amp; CEO of Balloon Lab, a UAE-based
              personalized gifting brand focused on creating premium balloon experiences for
              birthdays, events, celebrations, and memorable moments.
            </p>
          </div>
        </article>

        <aside className={styles.linkedInPanel} aria-labelledby="connect-founder-title">
          <p className={styles.kicker}>Official LinkedIn profile</p>
          <h3 id="connect-founder-title">Connect with our Founder</h3>

          <div className={styles.badgeViewport} suppressHydrationWarning>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="mubarak-obaid-al-dhaheri-95bb74420" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://ae.linkedin.com/in/mubarak-obaid-al-dhaheri-95bb74420?trk=profile-badge">Mubarak Obaid Al Dhaheri</a></div>
          </div>

          <a
            className={styles.linkedInButton}
            href={founderLinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile <ExternalLink size={17} aria-hidden="true" />
          </a>
        </aside>
      </div>

      <Script
        id="linkedin-profile-badge-script"
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        async
        defer
        type="text/javascript"
        onLoad={renderLinkedInBadge}
        onReady={renderLinkedInBadge}
      />
    </section>
  );
}
