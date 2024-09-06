import { LinkedInLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import { Download } from 'lucide-react';
import { CopyButton } from '@/components/ui/CopyButton';
import { pb } from '@/lib/pocketbase';
import { CollectionsFields } from '@/types/certificate';
import { getImageUrl } from '@/lib/utils';

export const revalidate = 0;

const getCertificate = async ({ id }: { id: string }) => pb.searchUUID({ uuid: id });

export default async function CertificatesPage({ params }: { params: { id: string } }) {
  const certificate = await getCertificate({ id: params.id });

  return (
    <div className="w-full flex flex-col items-start justify-start max-w-7xl px-6 gap-8 mt-10">
      <h1 className="text-3xl font-bold text-primary-title">
        {certificate[CollectionsFields.TITLE]}
      </h1>
      <div className="flex gap-8 w-full md:flex-row flex-col">
        <img
          src={getImageUrl({
            collectionId: certificate.collectionId,
            id: certificate[CollectionsFields.ID],
            url: certificate[CollectionsFields.IMAGE],
          })}
          width={1000}
          height={1000}
          alt={certificate[CollectionsFields.TITLE]}
          className="rounded-lg w-full md:max-w-md lg:max-w-lg xl:max-w-2xl drop-shadow-lg border-border border"
        />
        <div className="w-full">
          <h1 className="font-bold text-2xl text-primary-title">
            Comparte tu certificado
          </h1>
          <p className="text-lg">
            Compate tu certficado para llegar a mas personas y creecer.
          </p>
          <div className="flex gap-4 my-4">
            <LinkedInLogoIcon className="w-8 h-8 hover:text-primary-title hover:cursor-pointer" />
            <TwitterLogoIcon className="w-8 h-8 hover:text-primary-title hover:cursor-pointer" />
            <DiscordLogoIcon className="w-8 h-8 hover:text-primary-title hover:cursor-pointer" />
          </div>
          <CopyButton id={certificate[CollectionsFields.ID]} />
          <div className="w-full flex items-center justify-end my-6">
            <a
              className="flex gap-4 px-4 py-3 bg-primary-title hover:bg-primary-title-hover rounded-md text-lg text-primary-foreground font-semibold hover:cursor-pointer"
              href={certificate[CollectionsFields.IMAGE]}
              download={certificate[CollectionsFields.IMAGE]}
              target="_blank"
            >
              <Download />
              <span>
                Descargar
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
