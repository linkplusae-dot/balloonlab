import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollReveal } from "./components/ScrollReveal";
import { ScrollLogoJourney } from "./components/ScrollLogoJourney";
import { OccasionCylinderCarousel } from "@/components/designs/OccasionCylinderCarousel";
import { KhalifaFundPartnership } from "@/components/partners/KhalifaFundPartnership";
import { occasionCategories } from "@/lib/content/designs";
import { absoluteUrl, createPageMetadata } from "@/lib/seo/site";
import { FaWhatsapp } from "react-icons/fa6";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Personalized Photo Balloons UAE",
    description: "Create custom photo balloons for birthdays, love, newborns, events, corporate gifts and surprises with Balloon Lab in Abu Dhabi, UAE.",
    path: "/",
    keywords: ["personalized photo balloons UAE", "custom photo balloons Abu Dhabi", "photo balloon gifts", "personalized balloons UAE", "Balloon Lab UAE"],
  }),
  title: { absolute: "Personalized Photo Balloons UAE | Balloon Lab" },
};

const FAQS = [
  ["How do I send my photo?", "Start your order on WhatsApp and send the clearest original photo available. We review it before the design moves into production."],
  ["How long does a personalized balloon order take?", "Preparation time depends on the selected design, image review, quantity and delivery location. We confirm the timeline before your order proceeds."],
  ["Where does Balloon Lab deliver?", "Balloon Lab serves customers in the UAE. Delivery or collection availability for your location is confirmed during the order conversation."],
  ["Can I customize the colours, name and message?", "Yes. Your selected design can be personalized with a photo, name or short message, colour direction, ribbon and finishing details."],
];

function GlassNote({ className, icon, title, text }: { className: string; icon: string; title: string; text: string }) {
  return <div className={`hero-note ${className}`}><span>{icon}</span><div><strong>{title}</strong><small>{text}</small></div></div>;
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${absoluteUrl("/")}#webpage`,
            url: absoluteUrl("/"),
            name: "Personalized Photo Balloons UAE | Balloon Lab",
            description: "Custom photo balloons for birthdays, love, newborns, events, corporate gifts and surprises in the UAE.",
            isPartOf: { "@id": `${absoluteUrl("/")}#website` },
            about: { "@id": `${absoluteUrl("/")}#organization` },
            inLanguage: "en-AE",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          },
        ]}
      />
      <Header />
      <ScrollLogoJourney />
      <main id="home" className="reference-main">
        <section className="reference-hero">
          <div className="hero-aura aura-one"/><div className="hero-aura aura-two"/>
          <div className="hero-copy">
            <span className="made-in">Made in the UAE <b>🇦🇪</b></span>
            <h1>Personalized Photo Balloons,<br/><em>Beautifully Floating</em></h1>
            <p>Custom photo balloons for birthdays, love moments,<br className="desktop-break"/> kids, events, and unforgettable surprises.</p>
            <div className="hero-actions">
              <a id="create" href="#contact" className="primary-hero-button">Start Your Balloon <span>→</span></a>
              <a href="#designs" className="secondary-hero-button">View Designs</a>
            </div>
            <GlassNote className="delivery-note" icon="●" title="Fast UAE Delivery" text="Order today, delivered with love"/>
          </div>

          <div className="hero-stage" aria-label="Balloon Lab camera balloon display">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="main-balloon-wrap"><Image src="/logo.png" alt="Balloon Lab blue balloon and camera-lens logo" width={1000} height={1000} preload sizes="(max-width: 900px) 72vw, 48vw" /></div>
            <div className="photo-balloon photo-balloon-left"><div className="city-photo">🇦🇪</div><i/></div>
            <div className="photo-balloon photo-balloon-right"><div className="family-photo">♥</div><i/></div>
            <div className="stage-platform"><div/><span>Memories Made</span></div>
            <GlassNote className="personal-note" icon="♙" title="Personalized" text="Made uniquely for you"/>
            <GlassNote className="print-note" icon="◇" title="Premium Print" text="Vibrant. Durable. Unforgettable."/>
            <span className="bubble bubble-one"/><span className="bubble bubble-two"/><span className="bubble bubble-three"/>
          </div>
        </section>
        <section id="how-it-works" className="home-section how-section">
          <ScrollReveal className="section-heading"><span>Simple magic</span><h2>From your camera roll<br/>to a floating memory.</h2><p>Three easy steps. One unforgettable surprise.</p><Link href="/how-it-works">See the complete ordering process →</Link></ScrollReveal>
          <div className="steps-grid">
            {[['01','Upload your photo','Choose the memory you want to make float.'],['02','Make it yours','Pick colors, ribbons, message and finishing details.'],['03','We create & deliver','Handcrafted with care and delivered across the UAE.']].map((step, i) => <ScrollReveal key={step[0]} effect={i===0?'left':i===2?'right':'rise'} className="step-card"><b>{step[0]}</b><div className="step-orb"><span>{i===0?'↥':i===1?'✦':'✓'}</span></div><h3>{step[1]}</h3><p>{step[2]}</p></ScrollReveal>)}
          </div>
        </section>

        <section id="occasions" className="home-section occasions-section">
          <ScrollReveal className="section-heading"><span>Made for every moment</span><h2>There’s always a reason<br/>to make it personal.</h2></ScrollReveal>
          <ScrollReveal effect="scale"><OccasionCylinderCarousel occasions={occasionCategories}/></ScrollReveal>
        </section>

        <section id="gallery" className="home-section gallery-section">
          <div className="gallery-copy"><ScrollReveal effect="left"><span className="section-label">Photo balloon inspiration</span><h2>Photos belong<br/>on more than screens.</h2><p>Explore personalized photo balloon ideas for birthdays, couples, children, events and corporate gifting in the UAE.</p><Link href="/gallery" className="primary-hero-button">View Photo Gallery <span>→</span></Link></ScrollReveal></div>
          <ScrollReveal effect="right" className="gallery-visual"><Image src="/balloon-gallery.png" alt="Personalized photo balloons for love, family and children" width={1536} height={1024}/><div className="gallery-float-card"><b>100%</b><span>Personalized for you</span></div></ScrollReveal>
        </section>

        <section id="why" className="home-section why-section">
          <ScrollReveal className="section-heading"><span>The Balloon Lab difference</span><h2>Thoughtful by design.<br/>Unforgettable by nature.</h2></ScrollReveal>
          <div className="why-grid">{[['✦','Premium Finish','Glossy, vivid and beautifully presented.'],['◉','Photo-Perfect Print','Crisp detail and colors that feel alive.'],['♡','Made With Care','Crafted by hand for your special moment.'],['⌁','UAE-Wide Delivery','Reliable delivery, wherever you celebrate.']].map((x,i)=><ScrollReveal effect="scale" className="why-card" key={x[1]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><i>0{i+1}</i></ScrollReveal>)}</div>
        </section>

        <KhalifaFundPartnership />

        <section id="designs" className="home-section customize-section">
          <ScrollReveal effect="left" className="customize-visual"><div className="custom-balloon"><Image src="/logo-transparent.png" alt="Custom Balloon Lab balloon" width={1080} height={1350}/></div><span className="color-dot dot-pink"/><span className="color-dot dot-blue"/><span className="color-dot dot-purple"/></ScrollReveal>
          <ScrollReveal effect="right" className="customize-copy"><span className="section-label">Made uniquely yours</span><h2>Every detail,<br/>your way.</h2><p>Build a balloon that feels completely personal—from the photo and palette to the message and final ribbon.</p><div className="option-list">{['Your favorite photo','Custom name or message','Color palette & confetti','Ribbon & gift presentation'].map((x)=><div key={x}><i>✓</i>{x}</div>)}</div><a href="#contact" className="primary-hero-button">Start Customizing <span>→</span></a></ScrollReveal>
        </section>

        <section className="home-section reaction-section">
          <ScrollReveal className="section-heading"><span>Customer reactions</span><h2>The moment they see it<br/>is why we do it.</h2></ScrollReveal>
          <div className="testimonial-grid">{[['“The print quality was incredible. My sister cried before she even opened the rest of her gifts.”','Mariam A.','Dubai'],['“It was the centerpiece of our daughter’s birthday. Everyone asked where we got it.”','Noor K.','Abu Dhabi'],['“Beautifully packed, delivered on time, and even better than the photos.”','Layla R.','Sharjah']].map((t,i)=><ScrollReveal effect={i===0?'left':i===2?'right':'rise'} className="testimonial-card" key={t[1]}><div className="stars">★★★★★</div><blockquote>{t[0]}</blockquote><div><span>{t[1][0]}</span><p><b>{t[1]}</b><small>{t[2]}</small></p></div></ScrollReveal>)}</div>
        </section>

        <section className="home-section faq-section">
          <ScrollReveal effect="left" className="faq-intro"><span className="section-label">Questions, answered</span><h2>Everything you need<br/>to know.</h2><p>Still curious? Message us on WhatsApp and we’ll help you create the perfect balloon.</p></ScrollReveal>
          <ScrollReveal effect="right" className="faq-list">{FAQS.map((q,i)=><details key={q[0]} open={i===0}><summary>{q[0]}<span>+</span></summary><p>{q[1]}</p></details>)}</ScrollReveal>
        </section>

        <section id="contact" className="whatsapp-section"><ScrollReveal effect="scale"><span>Ready to make a memory float?</span><h2>Send us your photo.<br/>We’ll handle the magic.</h2><p>Start your personalized balloon order on WhatsApp today.</p><a href="https://wa.me/971561315511" className="whatsapp-button"><FaWhatsapp aria-hidden="true" /> Start on WhatsApp <b>→</b></a></ScrollReveal><div className="cta-bubble cta-bubble-one"/><div className="cta-bubble cta-bubble-two"/></section>
      </main>
      <Footer />
    </>
  );
}
