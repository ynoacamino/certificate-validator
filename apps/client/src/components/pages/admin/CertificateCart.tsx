import Image from 'next/image';
import Link from '@/components/ui/link';

export function CertificateCart({
  image, title, name, lastName, id,
}: {
  image: string;
  title: string;
  name: string;
  lastName: string;
  id: string;
}) {
  return (
    <article className="w-full flex flex-col gap-2 text-lg justify-between">
      <Image
        src={image}
        alt={title}
        className="w-full max-w-xl h-auto my-4 rounded-md border border-black aspect-[4/3] object-cover"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">
            {title}
          </h1>
          <p className="flex gap-3">
            <span className="font-semibold">
              Otorgado:
            </span>
            <span>
              {name}
              {' '}
              {lastName}
            </span>
          </p>
        </div>
        <div className="w-full flex justify-between gap-2">
          <Link href={`/certificates/${id}`} className="border-2 border-accent flex-1">
            Ver
          </Link>
          <Link href={`/admin/certificates/edit/${id}`} className="border-2 border-accent flex-1">
            Editar
          </Link>
          <Link href={`/admin/certificates/delete/${id}`} className="border-2 border-accent flex-1">
            Eliminar
          </Link>
        </div>
      </div>

    </article>
  );
}
