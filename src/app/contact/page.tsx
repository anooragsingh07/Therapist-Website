import ContactForm from "@/components/ContactForm";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <div className="mb-4">
        <p className="mb-1"><strong>Phone:</strong> <a href="tel:3235550192" className="text-blue-600 hover:underline">(323) 555-0192</a></p>
        <p className="mb-1"><strong>Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-blue-600 hover:underline">serena@blakepsychology.com</a></p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Session Fees</h2>
        <ul className="list-disc list-inside">
          <li>$200 / individual session</li>
          <li>$240 / couples session</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
        <ContactForm />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <ul className="space-y-4">
          {faqs.map((faq) => (
            <li key={faq.question}>
              <strong>{faq.question}</strong>
              <div className="text-gray-700">{faq.answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 