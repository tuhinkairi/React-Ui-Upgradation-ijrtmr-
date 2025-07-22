import { ArrowRight } from 'lucide-react';

export default function RecentConferenceCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
      <h3 className="text-center text-lg 2xl:text-xl capitalize font-semibold text-black mb-4">Recent Conferences</h3>

      <div className="text-sm 2xl:text-base  text-gray-800 space-y-1">
        <p className="font-semibold">NCSEM 2025</p>
        <p className='text-paragraph'>Recent Advances in Civil Engineering and Technology-2025</p>
        <p className='text-paragraph'>Last Date: 25&26 June 2025</p>
      </div>

      <div className="mt-6">
        <button className="w-full primaryBtn">
          Submit Inquiry
          <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
}
