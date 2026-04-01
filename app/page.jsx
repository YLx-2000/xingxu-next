import HeroSection from '@/components/home/hero-section';
import SiteHeader from '@/components/nav/site-header';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/" />
      <div className="mt-6">
        <HeroSection />
      </div>
      <footer className="mt-8 rounded-[24px] border border-white/80 bg-white/80 px-6 py-5 text-center text-sm text-slate-500 shadow-soft">
        星叙 1.0 内测演示版
      </footer>
    </main>
  );
}
