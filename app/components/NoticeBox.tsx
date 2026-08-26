type NoticeBoxProps = {
  type?: "info" | "warning" | "success";
  title: string;
  children: React.ReactNode;
};

export default function NoticeBox({
  type = "info",
  title,
  children,
}: NoticeBoxProps) {

  const styles = {
    info: {
      border: "border-blue-300",
      bg: "bg-blue-50",
      title: "text-blue-900",
    },
    warning: {
      border: "border-yellow-400",
      bg: "bg-yellow-50",
      title: "text-yellow-900",
    },
    success: {
      border: "border-green-400",
      bg: "bg-green-50",
      title: "text-green-900",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`${style.bg} ${style.border} border-l-4 rounded-xl p-6 my-8`}
    >
      <h3 className={`${style.title} text-xl font-bold mb-3`}>
        {title}
      </h3>

      <div className="text-gray-700 leading-8">
        {children}
      </div>
    </div>
  );
}
