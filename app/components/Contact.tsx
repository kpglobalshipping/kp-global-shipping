export default function Contact() {
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
          <div className="bg-white text-black rounded-xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Request a Quote
            </h3>

            <input
              className="w-full border p-3 rounded mb-4"
              placeholder="Company Name"
            />

            <input
              className="w-full border p-3 rounded mb-4"
              placeholder="Email Address"
            />

            <textarea
              className="w-full border p-3 rounded mb-4"
              rows={5}
              placeholder="Tell us about your vessel requirements..."
            />

            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700">
              Send Inquiry
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}