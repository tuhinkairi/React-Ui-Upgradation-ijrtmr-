// components/ArchiveSection.tsx

import { useState } from "react";
import { Link } from "react-router-dom";

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
              <div className="absolute w-full z-10 border-t shadow-lg rounded-2xl border-2 bg-peach-100 mt-2">
                <div className="p-4 space-y-2">
                  <Link to="volumn" className="block hover:bg-peach-200 px-3 py-2 rounded-md transition-colors">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Issue 1 – January
                    </div>
                  </Link>
                  <Link to="volumn" className="block hover:bg-peach-200 px-3 py-2 rounded-md transition-colors">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Issue 2 – April
                    </div>
                  </Link>
                  <Link to="volumn" className="block hover:bg-peach-200 px-3 py-2 rounded-md transition-colors">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Issue 3 – July
                    </div>
                  </Link>
                  <Link to="volumn" className="block hover:bg-peach-200 px-3 py-2 rounded-md transition-colors">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Issue 4 – October
                    </div>
                  </Link>
                </div>
              </div>
            )}          </div>
        ))}
      </div>
    </div>
  );
}
