const quickLinks = ["Home", "Designs",  "How It Works", "Gallery", "Contact"];
const occasions = ["Birthdays", "Love", "Kids", "Events", "Corporate", "Gifts"];

const Icon = ({ type }: { type: "instagram" | "tiktok" | "whatsapp" | "linkedin" }) => {
  const labels = { instagram: "Instagram", tiktok: "TikTok", whatsapp: "WhatsApp", linkedin: "LinkedIn" };
  return <a href="#" aria-label={labels[type]} className="social-button"><span className="text-xs font-extrabold">{type === "instagram" ? "◎" : type === "tiktok" ? "♪" : type === "whatsapp" ? "◔" : "in"}</span></a>;
};

export function Footer() {
  return (
    <footer className="premium-footer relative overflow-hidden rounded-t-[2.5rem] px-5 pb-28 pt-16 sm:rounded-t-[4rem] sm:px-8 sm:pb-10 sm:pt-20">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#00B8FF]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F72585]/15 blur-3xl" />
      <div className="footer-balloon footer-balloon-one" /><div className="footer-balloon footer-balloon-two" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1.35fr_.8fr_.8fr_1.2fr]">
          <div className="footer-card">
            <a href="#home" className="inline-flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#00B8FF] via-[#005BFF] to-[#7B2CFF] text-xl text-white shadow-lg">◉</span><span className="text-xl font-extrabold tracking-[-.04em] text-[#06143D]">Balloon <span className="text-[#005BFF]">Lab</span></span></a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#526182]">Personalized photo balloons crafted for birthdays, events, surprises, and unforgettable moments across the UAE.</p>
            <p className="mt-6 bg-gradient-to-r from-[#F72585] to-[#7B2CFF] bg-clip-text text-sm font-bold uppercase tracking-[.22em] text-transparent">Floating Memories</p>
          </div>
          <div className="footer-card"><h2>Quick Links</h2><ul>{quickLinks.map((item) => <li key={item}><a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a></li>)}</ul></div>
          <div className="footer-card"><h2>Occasions</h2><ul>{occasions.map((item) => <li key={item}><a href="#occasions">{item}</a></li>)}</ul></div>
          <div className="footer-card">
            <h2>Let’s create some joy</h2>
            <div className="mt-5 grid gap-2.5 text-sm text-[#526182]"><p><b className="text-[#06143D]">Cal</b> · +971-561315511</p><p><b className="text-[#06143D]">Social accounts:</b> · @balloonlabae</p>
            <p><b className="text-[#06143D]">Location</b> Office 26th, Floor 20th , Al Wahda Commercial Tower P.O box 25025 Abu Dhabi, UAE</p></div>
            <a href="#create" className="premium-cta mt-6 flex w-full justify-center">Start Your Balloon <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-5 rounded-[1.75rem] border border-white/70 bg-white/45 px-6 py-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-sm font-semibold text-[#06143D]">© 2026 Balloon Lab. All rights reserved.</p><p className="mt-1 text-xs text-[#697695]">Personalized photo balloons in UAE</p></div>
          <div className="flex gap-2"><Icon type="instagram" /><Icon type="tiktok" /><Icon type="whatsapp" /><Icon type="linkedin" /></div>
        </div>
      </div>
    </footer>
  );
}
