import { LinkedInLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import { Download } from 'lucide-react';
import { CopyButton } from '@/components/ui/CopyButton';
import { pb } from '@/lib/pocketbase';
import { Certificate, certificateDefault, CollectionsFields } from '@/types/certificate';
import { getImageUrl } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CertificatesPage() {
  const [certificate, setCertificate] = useState<Certificate>(certificateDefault);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.id) return;

    if (typeof params.id !== 'string') return;

    if (certificate.id) return;

    pb.searchUUID({ uuid: params.id })
      .then((res) => {
        if (res) {
          setCertificate(res as Certificate);
        }
      })
      .catch(() => {
        navigate('/certificates/404');
      });
  }, [params.id, certificate.id, navigate]);

  return (
    <div className="w-full flex flex-col items-start justify-start max-w-7xl px-6 gap-8 mt-10 ">
      <h1 className="text-3xl font-bold text-primary-title">
        {certificate[CollectionsFields.TITLE]}
      </h1>
      <div className="flex gap-8 w-full md:flex-row flex-col">
        <img
          src={certificate[CollectionsFields.IMAGE] ? getImageUrl({
            collectionId: certificate.collectionId,
            id: certificate[CollectionsFields.ID],
            url: certificate[CollectionsFields.IMAGE],
          }) : 'https://ynoa-uploader.ynoacamino.site/uploads/1726012375_bg.webp'}
          width={1000}
          height={1000}
          alt={certificate[CollectionsFields.TITLE]}
          className="rounded-lg flex-1 w-full md:max-w-md lg:max-w-lg xl:max-w-2xl drop-shadow-lg border-border border"
        />
        <div className="">
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
