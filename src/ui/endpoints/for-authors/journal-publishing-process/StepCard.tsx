import React from 'react';

interface StepCardProps {
  step: number;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow shadowSprade border border-gray-100 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-lg">
          {step}. {title}
        </h4>
        <div className="text-primary text-xl">{icon}</div>
      </div>
      <p className="text-sm text-gray-600 leading-7">{description}</p>
    </div>
  );
};

export default StepCard;
