import { leadership } from "../data/leadership";

export default function ExecutiveLeadership() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-yellow-500 font-bold">
            OUR PEOPLE
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            Executive Leadership
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Our experienced management and operations team is committed to delivering
            professional maritime services with integrity, efficiency and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mb-6">
                {person.initials}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {person.name}
              </h3>

              {person.koreanName && (
                <p className="text-gray-500 mt-1">{person.koreanName}</p>
              )}

              <p className="text-yellow-600 font-semibold mt-3">
                {person.position}
              </p>

              <p className="text-gray-600 mt-4 leading-7">
                {person.experience}
              </p>

              <div className="mt-6 inline-block rounded-full bg-blue-100 text-blue-900 px-4 py-1 text-sm font-semibold">
                {person.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}