import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-therapistBg overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt="Background sky"
        fill
        className="object-cover object-center opacity-80 -z-10"
        priority
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
          Professional Counseling for Healing and Growth
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6 font-medium drop-shadow">
          Begin your journey today towards greater peace, stronger relationships, and lasting well-being.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-therapistGreen px-8 py-3 rounded-lg font-bold shadow hover:bg-therapistBlue hover:text-therapistGreen transition text-lg"
        >
          Start Healing Today
        </a>
      </div>
    </section>
  );
}
