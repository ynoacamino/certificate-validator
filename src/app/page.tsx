'use client';

import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
import { SubmitButton } from '@/components/pages/index/SubmitButton';
import { cn } from '@/lib/utils';
import { searchUuid } from '@/actions/index';

export default function Home() {
  const [state, formAction] = useFormState(searchUuid, {
    error: '',
  });

  const [errorStyle, setErrorStyle] = useState('');

  useEffect(() => {
    if (state.error) {
      setErrorStyle('animate-shake animate-thrice animate-duration-200 animate-ease-out bg-red-300 dark:bg-red-700/20 text-red-200');
      setTimeout(() => {
        setErrorStyle('');
      }, 500);
    }
  }, [state]);

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
      <form
        className="flex gap-2 w-full mt-10 mb-4"
        action={formAction}
      >
        <input
          type="text"
          name="uuid"
          id="uuid"
          required
          autoComplete="off"
          placeholder="d4367598-82b3-4f95"
          className={cn('bg-accent rounded-lg p-2 text-2xl md:text-5xl w-full max-w-3xl text-center placeholder:text-primary/30 h-14 md:h-20 transition-all', errorStyle)}
        />
        <SubmitButton />
      </form>
      <span className="text-xl text-red-800 dark:text-red-400">
        {state.error && (state.error)}
      </span>
    </div>
  );
}
