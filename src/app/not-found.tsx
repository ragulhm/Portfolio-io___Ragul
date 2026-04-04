import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-[10rem] font-bold gradient-text leading-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-purple-500/10 -z-10" />
        </div>
        <p className="text-xl text-white/50">
          Oops! This page doesn&apos;t exist in this dimension.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:shadow-[0_0_30px_hsl(271_91%_72%/0.4)] transition-all duration-300 hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
