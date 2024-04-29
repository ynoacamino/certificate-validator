import Image from 'next/image';
import { LinkedInLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import { Download } from 'lucide-react';
import { Certificate } from '@/types/certificate';
import { SERVER_URL } from '@/data/globalConfig';
import { CopyButton } from '@/components/ui/CopyButton';

export const revalidate = 0;

const getCertificate = async ({ id }: { id: string }): Promise<Certificate> => {
  const response = await fetch(`${SERVER_URL}/certificate/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data as Certificate;
};

export default async function CertificatesPage({ params }: { params: { id: string } }) {
  const certificate = await getCertificate({ id: params.id });

  return (
    <div className="w-full flex flex-col items-start justify-start max-w-7xl px-6 gap-8 mt-10">
      <h1 className="text-3xl font-bold text-primary-title">
        {certificate.title}
      </h1>
      <div className="flex gap-8 w-full md:flex-row flex-col">
        <Image
          src={certificate.image}
          width={1000}
          height={1000}
          alt={certificate.title}
          className="rounded-lg w-full md:max-w-md lg:max-w-lg xl:max-w-2xl"
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
          <div className="w-full flex gap-2 mt-10">
            <input
              type="text"
              className="bg-accent rounded-lg p-2 w-full max-w-3xl placeholder:text-primary/30"
              value={`https://certificate-validator-sigma.vercel.app/certificates/${certificate.id}`}
              disabled
            />
            <CopyButton value={`https://certificate-validator-sigma.vercel.app/certificates/${certificate.id}`} />
          </div>
          <div className="w-full flex items-center justify-end my-6">
            <a
              className="flex gap-4 px-4 py-3 bg-primary-title hover:bg-primary-title-hover rounded-md text-lg text-primary-foreground font-semibold hover:cursor-pointer"
              href={certificate.image}
              download={certificate.image}
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
