interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-yellow-500 font-bold text-3xl tracking-wide mb-3">
        {label}
      </p>

      <h2 className="text-5xl font-extrabold text-blue-900">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-9">
          {description}
        </p>
      )}
    </div>
  );
}