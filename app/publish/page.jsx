import SiteHeader from '@/components/nav/site-header';
import PublishForm from '@/components/publish/publish-form';

export default function PublishPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/publish" />
      <div className="mt-6">
        <PublishForm />
      </div>
    </main>
  );
}
