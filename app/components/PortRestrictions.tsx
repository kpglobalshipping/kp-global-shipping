type PortRestrictionsProps = {
  restrictions: string[];
};

export default function PortRestrictions({
  restrictions,
}: PortRestrictionsProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Port Restrictions
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Important Operational Information
          </h2>

        </div>

        <div className="space-y-5">

          {restrictions.map((restriction, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <p className="text-gray-700">
                ⚠️ {restriction}
              </p>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}