import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-yellow-500 font-bold uppercase tracking-[4px] mb-4">
              WHO WE ARE
            </p>

            <h2 className="text-5xl font-extrabold text-blue-900 leading-tight">

              Maritime Technology &
              <br />
              Shipping Service Platform

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">

              KP Team provides maritime technology and shipping service
              <strong> PLATFORM.</strong>

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">

              We enhance <strong>corporate competitiveness</strong> by
              providing reliable outsourcing solutions for vessel owners,
              operators, charterers, and international principals operating
              throughout the Philippines.

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">

              Combining Korean maritime expertise with experienced Philippine
              operations, KP delivers professional port agency, owner's
              protective agency, crew change, technical services, husbandry,
              customs coordination, marine logistics, and operational support
              for vessels calling Philippine ports.

            </p>

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  24/7 Support
                </h3>

                <p className="text-gray-600 mt-2">
                  Fast operational response anytime.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  Nationwide Coverage
                </h3>

                <p className="text-gray-600 mt-2">
                  Major ports across the Philippines.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  Korean Expertise
                </h3>

                <p className="text-gray-600 mt-2">
                  Supporting Korean and international principals.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-900">
                  One-Stop Solution
                </h3>

                <p className="text-gray-600 mt-2">
                  Agency, crew change, technical & logistics.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <Image
              src="/images/office.jpg"
              alt="KP Global Shipping Office"
              width={700}
              height={600}
              className="rounded-3xl shadow-2xl object-cover w-full h-auto"
            />

          </div>

        </div>

      </div>
    </section>
  );
}