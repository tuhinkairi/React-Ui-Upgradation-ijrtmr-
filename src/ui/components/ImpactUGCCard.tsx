import {LucideBookMarked, ShieldCheck } from 'lucide-react';
import React from 'react';

const ImpactUGCCard: React.FC = () => {
  return (
    <div className="bg-primary text-white rounded-md p-6 w-full max-w-xs shadow-md space-y-6 mt-5">
      {/* Impact Factor */}
      <div className="flex items-center space-x-4  justify-center">
        <div className="text-xl mt-1"><LucideBookMarked /></div>
        <div>
          <p className="text-sm font-semibold">Impact Factor</p>
          <p className="text-base font-medium">8.01 (Year 2024)</p>
        </div>
      </div>

      <hr className="border-divider" />

      {/* UGC Approved */}
      <div className="flex items-center space-x-4  justify-center">
        <div className="text-xl mt-1"><ShieldCheck/></div>
        <div>
          <p className="text-sm font-semibold">UGC Approved</p>
          <p className="text-base font-medium">Journal no 47859</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactUGCCard;
