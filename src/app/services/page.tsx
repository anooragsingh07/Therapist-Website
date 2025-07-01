import Image from "next/image";
import { ExclamationCircleIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Personalized strategies to help you manage anxiety, reduce stress, and regain a sense of calm and control in your daily life.",
    image: "/service-anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Support for couples and individuals to strengthen communication, resolve conflicts, and build healthier, more fulfilling relationships.",
    image: "/service-relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Compassionate care and evidence-based therapies to help you heal from past trauma and move forward with resilience.",
    image: "/service-trauma.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-therapistGreen">How I Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-therapistBlue border-2 border-therapistGreen rounded-2xl p-4 flex flex-col items-center shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={320}
              height={200}
              className="rounded-lg mb-4 object-cover"
            />
            <h2 className="text-xl font-bold text-therapistGreen mb-2 text-center">{service.title}</h2>
            <p className="text-therapistGreen text-center mb-4">{service.description}</p>
            <button className="border border-therapistGreen text-therapistGreen px-6 py-2 rounded transition hover:bg-therapistGreen hover:text-white font-semibold">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
} 