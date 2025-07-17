import { ArrowRight } from 'lucide-react';

export default function RecentConferenceCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
      <h3 className="text-center text-lg xl:text-2xl 2xl:text-3xl capitalize font-semibold text-black mb-4">Recent Conferences</h3>

      <div className="text-sm xl:text-base 2xl:text-2xl text-gray-800 space-y-1">
        <p className="font-semibold">NCSEM 2024</p>
        <p className='text-paragraph'>National Conference on Sustainable Engineering and Management - 2024</p>
        <p className='text-paragraph'>Last Date: 15th March 2024</p>
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
