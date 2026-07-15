import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Images } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="seo-not-found">
        <div className="seo-not-found-orb" aria-hidden="true"><span /></div>
        <p>404 · This memory floated away</p>
        <h1>We couldn’t find that page.</h1>
        <span>Return to Balloon Lab or explore personalized photo balloon ideas for your next UAE celebration.</span>
        <div>
          <Link href="/"><Home size={18} aria-hidden="true" /> Back to home</Link>
          <Link href="/gallery"><Images size={18} aria-hidden="true" /> View gallery <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
