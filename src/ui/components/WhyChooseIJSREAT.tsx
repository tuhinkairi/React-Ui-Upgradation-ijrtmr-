// components/WhyChooseIJSREAT.tsx

import { CheckCircle } from 'lucide-react'; // Optional: replace with custom SVG

const reasons = [
  "Strict Plagiarism Policy",
  "Good Impact Factor",
  "Peer Reviewed Journal",
  "Open Access Journal",
  "Reputed Editorial Board",
  "Rapid/Fast Track Publication",
  "Fully Archived Journal",
  "High Visibility & Indexing",
  "High Impact Factor Journal",
  "Response Will Be Given Within 12 Hours.",
];

export default function WhyChooseIJSREAT() {
  return (
    <section className="bg-white py-12 pt-8  px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/feature/features3.png"
            alt="Why choose IJSREAT"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Textual content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">
            Why choose the IJSREAT journal?
          </h2>
          <ul className="space-y-4">
            {reasons.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 text-base">
                <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
