import { useState } from 'react';
import { SubmitButton } from '@/components/pages/index/SubmitButton';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { pb } from '@/lib/pocketbase';
import { CollectionsFields } from '@/types/certificate';
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  uuid: z
    .string()
    .min(4, {
      message: 'El código debe tener al menos 4 caracteres',
    })
    .max(50, {
      message: 'El código debe tener menos de 50 caracteres',
    }),
});

export default function Home() {
  const [errorStyle, setErrorStyle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uuid: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    pb.searchUUID({ uuid: values.uuid })
      .then((res) => {
        if (res) {
          navigate(`/certificates/${res[CollectionsFields.ID]}`);
        } else {
          throw new Error('Certificado no encontrado');
        }
      })
      .catch(() => {
        setErrorStyle('animate-shake animate-thrice animate-duration-200 animate-ease-out bg-red-300 dark:bg-red-700/20 text-red-200');
        setErrorMessage('Certificado no encontrado');
        setTimeout(() => {
          setErrorStyle('');
          setErrorMessage('');
        }, 800);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col items-center justify-start my-20 flex-1 px-6">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className={cn('uppercase text-primary-title text-5xl md:text-7xl font-extrabold w-full max-w-3xl text-center')}>
          Comprueba tu certificado
        </h1>
        <p className="text-lg md:text-xl text-center w-full max-w-xl">
          Ingresa el codigo de tu certificado para verificar su autenticidad.
        </p>
      </div>
      <Form
        {...form}
      >
        <form
          className="flex gap-2 w-full mt-10 mb-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="uuid"
            render={({ field }) => (
              <FormItem className="mb-6 w-full">
                <FormLabel className="sr-only">Codigo</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    id="uuid"
                    required
                    autoComplete="off"
                    placeholder="d4367598-82b3-4f95"
                    className={cn('bg-accent rounded-lg p-2 text-2xl md:text-5xl w-full max-w-3xl text-center placeholder:text-primary/30 h-14 md:h-20 transition-all', errorStyle)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton loading={loading} />
        </form>
      </Form>
      <span className="text-xl text-red-800 dark:text-red-400">
        {errorMessage && errorMessage}
      </span>
    </div>
  );
}
