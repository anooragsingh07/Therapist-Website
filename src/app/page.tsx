import Image from "next/image";

export default function HomePage() {
  return (
    <section className="text-center py-16">
      <div className="flex justify-center mb-6">
        <Image
          src="/dr-blake.jpg"
          alt="Dr. Serena Blake portrait placeholder"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-200 shadow-lg"
          priority
        />
      </div>
      <h1 className="text-4xl font-extrabold mb-4">Dr. Serena Blake, PsyD</h1>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Licensed Clinical Psychologist in Los Angeles, CA<br/>
        Compassionate, evidence-based care for anxiety, relationships, and trauma recovery.
      </p>
      <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Book a Session</a>
    </section>
  );
}
