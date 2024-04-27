import IEEETitle from '../logos/IEEETitle';

export default function Footer() {
  return (
    <footer className="w-full border-t border-section pt-6 flex justify-center items-start">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl mb-6 gap-x-10 gap-y-14 px-6">
        <div className="w-full flex justify-center lg:justify-start">
          <IEEETitle className="w-full max-w-[300px] h-auto" />
        </div>
        <div className="w-full max-w-3xl flex justify-between items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center" />
      </div>
    </footer>
  );
}
