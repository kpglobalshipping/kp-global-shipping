import Image from "next/image";

export default function Gallery() {
  const photos = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Operations Gallery
        </h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

        <p className="text-center text-gray-600 mt-6">
          A glimpse of the maritime services we provide across the Philippines.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={photo}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}