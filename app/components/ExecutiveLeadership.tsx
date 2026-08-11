import Image from "next/image";
import { leadership } from "../data/leadership";

export default function ExecutiveLeadership() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-500 font-bold">
            OUR PEOPLE
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            People Behind the Operation
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Our experienced team works together to provide reliable,
            responsive, and professional maritime services throughout
            the Philippines.
          </p>

        </div>

        {/* People */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {leadership.map((person) => (

            <div
              key={person.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Photo or Initials */}

              <div className="flex justify-center mb-6">

                {person.photo ? (

                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={140}
                    height={140}
                    className="w-[140px] h-[140px] rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                  />

                ) : (

                  <div className="w-[140px] h-[140px] rounded-full bg-blue-900 border-4 border-yellow-400 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                    {person.initials}
                  </div>

                )}

              </div>

              {/* Name */}

              <h3 className="text-2xl font-bold text-blue-900">
                {person.name}
              </h3>

              {/* Korean Name */}

              {person.koreanName && (
                <p className="text-gray-500 mt-2">
                  {person.koreanName}
                </p>
              )}

              {/* Position */}

              <p className="text-yellow-600 font-bold text-lg mt-3">
                {person.position}
              </p>

              {/* Experience */}

              <p className="text-gray-600 mt-5 leading-7">
                {person.experience}
              </p>

              {/* Category */}

              <div className="mt-6 inline-block rounded-full bg-blue-100 text-blue-900 px-4 py-2 text-sm font-semibold">
                {person.category}
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}