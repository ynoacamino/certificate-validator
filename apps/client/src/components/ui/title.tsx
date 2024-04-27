export function Title({
  title, subtitle,
}: { title: string, subtitle: string }) {
  return (
    <div className="mt-20 mb-40">
      <h1 className="text-6xl text-primary-title font-extrabold text-center uppercase">
        {title}
      </h1>
      <p className="text-xl text-center mt-5 w-full max-w-xl">
        {subtitle}
      </p>
    </div>
  );
}
