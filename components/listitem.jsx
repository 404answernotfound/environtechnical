export default function ListItem({ title, paragraph, link }) {
  return (
    <div className="w-full aspect-video mb-6">
      <a
        className="block rounded-xl border border-[#003566] bg-gray-900 p-8 shadow-xl h-64"
        href={link}
      >
        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-sm text-gray-300">
          {paragraph}
        </p>
      </a>
    </div>
  );
}
