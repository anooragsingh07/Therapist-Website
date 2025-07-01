"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: { [key: string]: string } = {};
    if (!form.name) errs.name = "Name is required.";
    if (!form.email) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email.";
    if (!form.message) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  if (submitted)
    return <div className="p-4 bg-green-100 text-green-800 rounded">Thank you! Your message has been sent.</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1" htmlFor="name">Name</label>
        <input
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="email">Email</label>
        <input
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="message">Message</label>
        <textarea
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
} 