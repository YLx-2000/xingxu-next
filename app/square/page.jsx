import SiteHeader from '@/components/nav/site-header';
import SquareGrid from '@/components/square/square-grid';

export default function SquarePage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/square" />
      <div className="mt-6">
        <SquareGrid />
      </div>
    </main>
  );
}
