export default function TailwindPage() {
  return (
    <div className="justify-items-center">
      <div className="max-w-[200px] md:max-w-[400px] lg:max-w-[800px] bg-cyan-500 shadow-md rounded-2xl p-8 duration-300 hover:scale-105">
        <h3 className="text-3xl font-semibold text-white">Tailwind Beispiel</h3>
        <p className="text-cyan-200 mt-2">
          Dies ist ein Beispieltext. Dies ist ein Beispieltext. Dies ist ein
          Beispieltext. Dies ist ein Beispieltext. Dies ist ein Beispieltext.
          Dies ist ein Beispieltext.
        </p>
      </div>
      <div className="max-w-[200px] md:max-w-[300px] lg:max-w-[600px] mt-8 shadow-md border-2 border-cyan-700 rounded-2xl p-8 duration-300 hover:-translate-y-2">
        <p className="text-cyan-800 mt-2">Hier steht noch mehr Text.</p>
      </div>
    </div>
  );
}
