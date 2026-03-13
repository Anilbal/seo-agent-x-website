import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-100 h-100 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-87.5 h-87.5 bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <h1 className="font-bricolage text-[120px] md:text-[180px] font-extrabold leading-none tracking-tighter text-white/50 select-none">
        404
      </h1>

      <div className="relative z-10">
        <h2 className="font-bricolage text-3xl md:text-4xl font-bold text-white mb-4">
          Lost in the digital void?
        </h2>
        <p className="font-jakarta text-[#80809b] text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Even our
          SEO agents couldn't find it.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#09090f] font-jakarta font-semibold text-sm transition-all hover:bg-white/90 hover:scale-[0.98] active:scale-95"
        >
          Return to home
        </Link>
      </div>

      <div className="mt-16 flex items-center gap-2 opacity-50">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[#3a3a52] font-jakarta text-xs uppercase tracking-widest">
          SEO Agent X — 404 Status
        </span>
      </div>
    </div>
  );
}
