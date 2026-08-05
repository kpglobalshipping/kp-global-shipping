type Requirement = {
  document: string;
  requirement: string;
};

type RequirementTableProps = {
  title: string;
  requirements: Requirement[];
};

export default function RequirementTable({
  title,
  requirements,
}: RequirementTableProps) {
  return (
    <section className="my-10">

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        {title}
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">

          <thead className="bg-blue-900 text-white">

            <tr>

              <th className="px-6 py-4 text-left">
                Document
              </th>

              <th className="px-6 py-4 text-left">
                Requirement
              </th>

            </tr>

          </thead>

          <tbody>

            {requirements.map((item, index) => (

              <tr
                key={index}
                className="border-t border-gray-200 even:bg-gray-50"
              >

                <td className="px-6 py-4 font-medium">
                  {item.document}
                </td>

                <td className="px-6 py-4">
                  {item.requirement}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}