import Image from "next/image";
import { leadership } from "../data/leadership";

export default function ExecutiveLeadership() {
  return (
    <section className="py-20 bg-[#E0EAF4]/90">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-yellow-500 font-bold">
            OUR PEOPLE
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-4">
            People Behind the Operation
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Our experienced team works together to provide reliable,
            responsive, and professional maritime services throughout
            the Philippines.
          </p>

        </div>

        {/* People Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {leadership.map((person) => (

            <div
              key={person.name}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* =========================
                  PHOTO - UPPER HALF
              ========================== */}

              {/* Photo */}

<div className="flex justify-center pt-6 px-6">

  {person.photo ? (

    <div className="relative w-[180px] h-[215px] overflow-hidden rounded-xl bg-blue-900 shadow-md">

      <Image
        src={person.photo}
        alt={person.name}
        fill
        sizes="190px"
        className="object-cover object-[center_15%]"
      />

    </div>

  ) : (

    <div className="w-[190px] h-[190px] rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-md">

      <span className="text-6xl font-extrabold">
        {person.initials}
      </span>

    </div>

  )}

</div>

              {/* =========================
                  INFORMATION - LOWER HALF
              ========================== */}

              <div className="min-h-[235px] flex flex-col text-center">

                {/* Name */}

                <div className="px-6 pt-6">

                  <h3 className="text-2xl font-bold text-blue-900">
                    {person.name}
                  </h3>

                  {/* Korean Name */}

                  {person.koreanName && (
                    <p className="text-gray-500 text-sm mt-1">
                      {person.koreanName}
                    </p>
                  )}

                </div>

                {/* Position */}

                <div className="px-6 mt-3">

                  <p className="text-yellow-600 font-bold text-lg">
                    {person.position}
                  </p>

                </div>

                {/* Experience + Department */}

                <div className="mt-auto px-6 pb-6 pt-5">

                  <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-4">

                    {/* Experience */}

                    <div>

                      <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                        Experience
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {person.experience}
                      </p>

                    </div>

                    {/* Department */}

                    <div>

                      <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                        Department
                      </p>

                      <p className="mt-1 text-sm font-semibold text-blue-900">
                        {person.category}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}