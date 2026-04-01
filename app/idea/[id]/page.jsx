import { notFound } from 'next/navigation';
import DetailContent from '@/components/detail/detail-content';
import SiteHeader from '@/components/nav/site-header';
import { ideas } from '@/data/ideas';

export default function IdeaDetailPage({ params }) {
  const idea = ideas.find((item) => item.id === params.id);

  if (!idea) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/idea/3" />
      <div className="mt-6">
        <DetailContent idea={idea} />
      </div>
    </main>
  );
}
