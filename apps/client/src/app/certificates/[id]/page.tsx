import Image from 'next/image';
import { LinkedInLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import { Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CertificatesPage({ params }: { params: { id: string } }) {
  return (
    <div className="w-full flex flex-col items-start justify-start max-w-7xl px-6 gap-8 mt-10">
      <h1 className="text-3xl font-bold text-primary-title">
        JavaScript (Basic) Certificate
      </h1>
      <div className="flex gap-8">
        <Image
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1714197941/sutlbzbawrwux1eiyt9c.png"
          width={1000}
          height={1000}
          alt="JavaScript (Basic) Certificate"
          className="rounded-lg w-full max-w-2xl"
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
              value="https://ceertificateValidator.ieeeUnsa.com/9a8650b91e8f650b91e8f650b91e8f"
              disabled
            />
            <Button size="icon">
              <Copy />
            </Button>
          </div>
          <div className="w-full flex items-center justify-end my-6">
            <Button className="flex gap-4">
              <Download />
              <span>
                Descargar
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
