export default function Leadership() {
  const leaders = [
    {
      name: "Charlie Park",
      position: "Chief Executive Officer",
    },
    {
      name: "JB Jang",
      position: "Korea Branch CEO",
    },
    {
      name: "Sahlee Gutierrez",
      position: "General Manager",
    },
    {
      name: "Lezel Bersamin",
      position: "Operations Manager",
    },
  ];

  return (
    <section id="about"className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Leadership Team
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Experienced Korean and Filipino maritime professionals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-xl shadow-xl p-8 text-center hover:-translate-y-2 transition"
            >

              <div className="w-28 h-28 rounded-full bg-blue-100 mx-auto flex items-center justify-center text-5xl">
                👤
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mt-6">
                {leader.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {leader.position}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}