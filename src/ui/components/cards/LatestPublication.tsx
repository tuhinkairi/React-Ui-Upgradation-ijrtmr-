import { Link } from "react-router-dom";

const publications = [
  {
    title: 'Fiber-Reinforced Rebar for Improved Slab Construction Efficiency and Strength',
    id: '191',
    ink: "/archives/paper-details?paperid=191&papertitle=Fiber-Reinforced-Rebar-for-Improved-Slab-Construction-Efficiency-and-Strength"
  },
  {
    title: 'DC Motor Plant Modeling and Closed-Loop Performance Evaluation with PID Controller',
    id: '192',
    ink: "/archives/paper-details?paperid=192&papertitle=DC-Motor-Plant-Modeling-and-Closed-Loop-Performance-Evaluation-with-PID-Controller"
  },
  {
    title: 'Stress Detection through Heart Rate Variability and Live Facial Expression Analysis',
    id: '194',
    ink: "/archives/paper-details?paperid=194&papertitle=Stress-Detection-through-Heart-Rate-Variability-and-Live-Facial-Expression-Analysis"
  },
];

export default function LatestPublication() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
      <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">Latest Publication</h2>

      {publications.map((pub, index) => (
        <div key={index} className="space-y-2">
          <Link to={pub.ink}>
            <h3 className="text-sm 2xl:text-base text-gray-800">{pub.title}</h3>
            <h3 className="text-sm 2xl:text-base font-medium text-primary">Paper ID : {pub.id}</h3>
            {index !== publications.length - 1 && (
              <hr className="border-gray-300 mt-2" />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
