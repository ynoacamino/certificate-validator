export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start my-20 flex-1 px-6">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="uppercase text-red-500 text-5xl md:text-7xl font-extrabold w-full max-w-3xl text-center ">
          Pagina no encontrada
        </h1>
        <p className="text-lg md:text-xl text-center w-full max-w-xl">
          La pagina que buscas no existe o ha sido eliminada.
        </p>
      </div>
    </div>
  );
}
