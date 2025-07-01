import { ExclamationCircleIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Personalized strategies to help you manage anxiety, reduce stress, and regain a sense of calm and control in your daily life.",
    icon: ExclamationCircleIcon,
  },
  {
    title: "Relationship Counseling",
    description:
      "Support for couples and individuals to strengthen communication, resolve conflicts, and build healthier, more fulfilling relationships.",
    icon: HeartIcon,
  },
  {
    title: "Trauma Recovery",
    description:
      "Compassionate care and evidence-based therapies to help you heal from past trauma and move forward with resilience.",
    icon: SparklesIcon,
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Services & Specialties</h1>
      <div className="grid gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border bg-white p-6 shadow hover:shadow-md transition flex items-start gap-4"
          >
            <service.icon className="h-10 w-10 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 