import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto">
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
      <h1 className="text-3xl font-bold mb-4">About Dr. Serena Blake</h1>
      <p className="mb-4 text-lg">
        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
      </p>
      <ul className="mb-4 list-disc list-inside">
        <li><strong>Experience:</strong> 8 years of practice, 500+ sessions</li>
      </ul>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Office Hours</h2>
        <ul className="list-disc list-inside">
          <li><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</li>
          <li><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</li>
        </ul>
      </div>
    </section>
  );
} 