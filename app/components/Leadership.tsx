import Image from "next/image";
export default function Leadership() {
  const leaders = [
  {
    name: "Charlie Park",
    position: "Chief Executive Officer",
    photo: "/images/charlie-park-2026.png",
  },
  {
    name: "JB Jang",
    position: "Korea Branch CEO",
    initials: "JB",
  },
  {
    name: "Sahlee Gutierrez",
    position: "General Manager",
    photo: "/images/sahlee c. gutierrez.jpg",
  },
];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900">
            Leadership Team
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Experienced Korean and Filipino maritime professionals.
          </p>
        </div>

        {/* Leadership Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">

          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-xl shadow-xl p-7 text-center hover:-translate-y-2 transition duration-300"
            >

              {/* Profile Image */}

              <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-4 border-yellow-400 shadow-lg">

  {leader.photo ? (
    <Image
      src={leader.photo}
      alt={leader.name}
      width={112}
      height={112}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-blue-900 flex items-center justify-center text-3xl font-bold text-yellow-400">
      {leader.initials}
    </div>
  )}

</div>

              {/* Name */}

              <h3 className="text-2xl font-bold text-blue-900 mt-5">
                {leader.name}
              </h3>

              {/* Position */}

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