// components/ArchiveSection.tsx

import { useState } from "react";

const volumes = [
  { year: 2025, label: "Volume 6" },
  { year: 2024, label: "Volume 5" },
  { year: 2023, label: "Volume 4" },
  { year: 2022, label: "Volume 3" },
  { year: 2021, label: "Volume 2" },
  { year: 2020, label: "Volume 1" },
];

export default function ArchiveSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {volumes.map((volume, index) => (
          <div key={index} className="relative border rounded-md">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
            >
              <span>
                {volume.label} {volume.year}
              </span>
              <span className="transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="bg-white p-4 border-t text-sm absolute w-full z-10 shadow-md rounded-md">
                {/* Placeholder dropdown content */}
                <ul className="list-disc pl-4">
                  <li>Issue 1 – January</li>
                  <li>Issue 2 – April</li>
                  <li>Issue 3 – July</li>
                  <li>Issue 4 – October</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
