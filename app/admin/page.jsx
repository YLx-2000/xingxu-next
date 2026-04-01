import AdminDashboard from '@/components/admin/admin-dashboard';
import SiteHeader from '@/components/nav/site-header';

export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/admin" />
      <div className="mt-6">
        <AdminDashboard />
      </div>
    </main>
  );
}
