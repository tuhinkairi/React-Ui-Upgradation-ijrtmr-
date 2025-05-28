import { ArrowRight } from 'lucide-react'; // Optional: if using lucide icons

const archives = [
  'Volume 11, Issue 7 Dec, 2024',
  'Volume 10, Issue 7 Dec, 2023',
  'Volume 9, Issue 7 Dec, 2022',
  'Volume 8, Issue 7 Dec, 2021',
  'Volume 7, Issue 7 Dec, 2020',
];

export default function ArchiveCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
      <h3 className="text-center text-lg font-semibold text-black mb-4">Archive</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm">
        {archives.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>

      <div className="mt-6">
        <button className="w-full primaryBtn">
          View More
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
