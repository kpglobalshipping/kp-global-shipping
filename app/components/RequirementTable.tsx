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
    <section className="my-12 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">

      <h2 className="flex items-center gap-3 bg-blue-900 px-8 py-5 text-2xl font-bold text-white">
        <span className="text-3xl">📋</span>
{title}
      </h2>

      <div className="overflow-x-auto p-6">

        <table className="w-full overflow-hidden rounded-xl border border-gray-200">

          <thead className="bg-blue-900 text-white">

            <tr>

              <th className="w-3/4">
  Document
</th>

<th className="w-1/4 text-center">
  Requirement
</th>

            </tr>

          </thead>

          <tbody>

            {requirements.map((item, index) => (

              <tr
  key={index}
  className="border-t border-gray-200 even:bg-[#E0EAF4] hover:bg-blue-50 transition-colors"
>
              

                <td className="w-3/4 px-6 py-4 text-gray-800">
  {item.document}
</td>

<td className="w-1/4 px-6 py-4 text-center font-semibold text-blue-900">
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
