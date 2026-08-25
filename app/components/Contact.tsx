"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const requirements = String(form.get("requirements") ?? "");
    const subject = encodeURIComponent(`Quote request from ${company}`);
    const body = encodeURIComponent(
      `Company name: ${company}\nEmail address: ${email}\n\nVessel requirements:\n${requirements}`,
    );

    setStatus("Opening your email app with your quote request ready to send.");
    window.location.href = `mailto:agent@kp-smt.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
  <h3 className="text-2xl font-bold mb-6">
    KP GLOBAL SHIPPING INC.
  </h3>

  <p className="mb-4">
    📍 PKFC (Philippine and Korea Friendship Center)<br />
    DND-PVAO Complex,<br />
    Bayani Road, Western Bicutan,<br />
    Taguig City, Metro Manila 1630,<br />
    Philippines
  </p>

  <p className="mb-3">
    📞 +63 2 8801 4753
  </p>

  <p className="mb-3">
    📧 agent@kp-smt.com
  </p>

  <p className="mb-3">
    🕒 24 Hours / 7 Days Operations
    <a
  href="https://maps.google.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300"
>
  View Office Location
</a>
  </p>

  <p className="mt-6 text-blue-200">
    Serving vessels at major commercial, industrial, and offshore ports throughout the Philippines.
  </p>
</div>
          <div className="bg-white text-black rounded-xl p-8 shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Request a Quote
            </h3>

            <p className="mb-6 text-sm leading-6 text-gray-600">
              Tell us what your vessel needs and our operations team will respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="quote-company" className="mb-2 block text-sm font-semibold text-blue-950">
                  Company name
                </label>
                <input
                  id="quote-company"
                  name="company"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                  placeholder="Your company"
                  required
                />
              </div>

              <div>
                <label htmlFor="quote-email" className="mb-2 block text-sm font-semibold text-blue-950">
                  Email address
                </label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="quote-requirements" className="mb-2 block text-sm font-semibold text-blue-950">
                  Vessel requirements
                </label>
                <textarea
                  id="quote-requirements"
                  name="requirements"
                  className="w-full resize-y rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
                  rows={5}
                  placeholder="Vessel name, port, ETA, service required, and any relevant details..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-900 px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                Request a Quote
              </button>

              <p aria-live="polite" className="min-h-5 text-center text-sm text-gray-600">
                {status}
              </p>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
