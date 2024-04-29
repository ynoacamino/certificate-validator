/* eslint-disable @next/next/no-img-element */

'use client';

import { useRef, useState } from 'react';
import { SquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ImageLabel } from '@/components/pages/admin/ImageLabel';
import { UuidLabel } from '@/components/pages/admin/UuidLabel';
import { Button } from '@/components/ui/button';
import { SERVER_URL } from '@/data/globalConfig';
import { useToast } from '@/components/ui/use-toast';
import Link from '@/components/ui/link';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1714246399/oyh3ypqzf6qemkvwhcp3.png';

export function AddCertificate() {
  const [image, setImage] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const uuidRef = useRef<{ clear:() => void }>(null);
  const { toast } = useToast();
  const route = useRouter();

  const handdleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const lastName = data.get('lastName') as string;
    const title = data.get('title') as string;
    const id = data.get('uuid') as string;

    const formData = new FormData();
    formData.append('file', image as File);
    formData.append('name', name);
    formData.append('lastName', lastName);
    formData.append('title', title);
    formData.append('id', id);

    const response = await fetch(`${SERVER_URL}/certificate/create`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      toast({
        title: 'Certificado creado',
        description: 'El certificado se ha creado correctamente',
        variant: 'default',
        action: <Link href={`/certificates/${id}`} className="border-2 border-accent">Ver</Link>,
      });
      formRef.current?.reset();
      uuidRef.current?.clear();
      setImage(null);
    } else {
      toast({
        title: 'Error al crear el certificado',
        description: 'Ha ocurrido un error al crear el certificado',
        variant: 'destructive',
      });
    }

    route.refresh();
  };

  return (
    <div className="w-full grid lg:grid-cols-2 gap-8 ">
      <form className="flex flex-col w-full gap-4" onSubmit={handdleSubmit} ref={formRef}>
        <h1 className="text-3xl font-bold text-primary-title">
          Crear certificado
        </h1>
        <label className="flex flex-col">
          <span>Nombres:</span>
          <input name="name" required className="bg-accent p-2 rounded-md" type="text" placeholder="Yenaro Joel" />
        </label>
        <label className="flex flex-col">
          <span>Apellidos:</span>
          <input name="lastName" required className="bg-accent p-2 rounded-md" type="text" placeholder="Noa Camino" />
        </label>
        <label className="flex flex-col">
          <span>
            Titulo del certificado:
          </span>
          <input name="title" required className="bg-accent p-2 rounded-md" type="text" placeholder="JavaScript (Basic) Certificate" />
        </label>
        <UuidLabel ref={uuidRef} />
        <ImageLabel setImage={setImage} required />
        <div className="w-full flex items-center justify-end">
          <Button type="submit" className="flex gap-2">
            <SquarePlusIcon />
            <span>
              Crear
            </span>
          </Button>
        </div>
      </form>
      <img
        src={image ? URL.createObjectURL(image) : DEFAULT_IMAGE}
        alt="certificate"
        className="w-full lg:max-w-xl h-auto my-4 rounded-md border border-black"
      />
    </div>
  );
}
