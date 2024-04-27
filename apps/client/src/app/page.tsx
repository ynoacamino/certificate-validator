export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-center justify-start my-20 flex-1">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="uppercase text-primary-title text-7xl font-bold w-full max-w-2xl text-center">
          Comprueba tu certificado
        </h1>
        <p className="text-xl text-center w-full max-w-xl">
          Ingresa el codigo de tu certificado para verificar su autenticidad.
        </p>
      </div>
      <div className="flex gap-4 w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="9a8650b91e8f"
          className="bg-accent rounded-lg p-2 text-5xl w-full max-w-3xl text-center placeholder:text-primary/30"
        />
        {/* <Button size="icon" className="w-16 h-16">
          <CornerDownRight className="text-primary-foreground" />
        </Button> */}
      </div>
    </main>
  );
}
