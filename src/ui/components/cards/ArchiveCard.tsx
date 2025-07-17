import { ArrowRight } from 'lucide-react'; // Optional: if using lucide icons
import { NavLink } from 'react-router-dom';

const archives = [
  'Volume 11, Issue 7 Dec, 2024',
  'Volume 10, Issue 7 Dec, 2023',
  'Volume 9, Issue 7 Dec, 2022',
  'Volume 8, Issue 7 Dec, 2021',
  'Volume 7, Issue 7 Dec, 2020',
];

export default function ArchiveCard() {
  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
      <h3 className="text-center text-lg xl:text-2xl 2xl:text-3xl capitalize font-semibold text-black mb-4">Archive</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm xl:text-base 2xl:text-2xl">
        {archives.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>

      <div className="mt-6">
        <NavLink to="/archives">
        <button className="w-full primaryBtn">
          View More
          <ArrowRight size={16} />
        </button>
        </NavLink>
      </div>
    </div>
  );
}
