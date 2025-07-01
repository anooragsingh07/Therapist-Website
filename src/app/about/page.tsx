import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-therapistBlue rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-12 shadow-lg">
      <div className="flex-shrink-0">
        <Image
          src="/dr-blake.jpg"
          alt="Dr. Serena Blake portrait"
          width={200}
          height={200}
          className="rounded-2xl border-4 border-therapistGreen shadow-lg mb-4 md:mb-0"
          priority
        />
        <div className="bg-white text-therapistGreen font-semibold text-center rounded-full px-4 py-2 mt-2 shadow inline-block">
          ⭐ Top Rated | 8+ Years Experience
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-therapistGreen mb-2">Hi, I'm Dr. Serena Blake</h1>
        <p className="mb-4 text-lg text-therapistGreen">
          With <span className="font-bold">8 years of dedicated experience</span> and over 500 client sessions, I blend evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care. My goal is to help you overcome anxiety, strengthen relationships, and heal from trauma in a safe, supportive space.
        </p>
        <ul className="mb-4 list-disc list-inside text-therapistGreen">
          <li><span className="font-semibold">In-person:</span> Tue & Thu, 10 AM–6 PM</li>
          <li><span className="font-semibold">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM</li>
        </ul>
        <p className="text-therapistGreen">Whether you meet in my Maplewood Drive office or connect virtually, I'm committed to helping you thrive.</p>
      </div>
    </section>
  );
} 