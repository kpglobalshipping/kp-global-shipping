export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          About KP Global Shipping
        </h2>

        <div className="grid md:grid-cols-2 gap-14">

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Company Overview
            </h3>

            <p className="text-gray-700 leading-8">
              KP Global Shipping Inc. is a trusted Philippine shipping agency
              providing comprehensive marine services to ship owners,
              operators, charterers and managers worldwide.
            </p>

            <p className="text-gray-700 leading-8 mt-6">
              Our expertise includes Port Agency, Protective Agency,
              Crew Change, Husbandry Services, Ship Spares Handling,
              Logistics Coordination, Marine Repairs and Vessel Support
              throughout the Philippines.
            </p>
          </div>

          <div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Mission
              </h3>

              <p className="text-gray-700">
                To provide reliable, efficient and professional maritime
                services while maintaining the highest standards of
                integrity, safety and customer satisfaction.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Vision
              </h3>

              <p className="text-gray-700">
                To become the preferred shipping agency in the Philippines,
                recognized for operational excellence, innovation and
                long-term partnerships.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Core Values
              </h3>

              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                <li>✔ Integrity</li>
                <li>✔ Reliability</li>
                <li>✔ Professionalism</li>
                <li>✔ Teamwork</li>
                <li>✔ Customer Focus</li>
                <li>✔ Safety</li>
              </ul>
            </div>

          </div>

        </div>

</div>
    </section>
  );
}