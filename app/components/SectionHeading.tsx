type SectionHeadingProps = {
  icon: string;
  title: string;
};

export default function SectionHeading({
  icon,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mt-16 mb-8 border-b border-gray-200 pb-3">

      <h2 className="flex items-center gap-3 text-3xl font-bold text-blue-900">

        <span className="text-4xl">
          {icon}
        </span>

        {title}

      </h2>

    </div>
  );
}
