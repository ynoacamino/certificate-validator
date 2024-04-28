import { AddCertificate } from '@/components/pages/admin/AddCertificate';
import { ListCertificates } from '@/components/pages/admin/ListCertificates';

export default function AdminPage() {
  return (
    <div className="w-full max-w-7xl px-6 my-10 flex flex-col gap-8">
      <AddCertificate />
      <ListCertificates />
    </div>
  );
}
