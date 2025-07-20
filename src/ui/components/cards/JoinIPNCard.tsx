import React from 'react';

const JoinIPNCard: React.FC = () => {
  return (
    <div className="max-w-xs mx-auto  rounded-md shadow-[0px_15px_60px_2px_rgba(0,0,0,0.08)] p-6 bg-white">
      <h3 className="text-lg font-semibold  text-center">Join Our IPN</h3>
      <p className="text-base font-medium text-[#333333] mt-2">IJIRT Partner Network</p>
      <p className="text-sm xl:text-base 2xl:text-lg text-paragraph mt-2">
        Submit your research paper and those of your network (friends, colleagues, or peers) through your IPN account, and receive <span className="font-semibold">800 INR</span> for each paper that gets published.
      </p>
      <button
        className="mt-6 w-full primaryBtn"
      >
        Join Now →
      </button>
    </div>
  );
};

export default JoinIPNCard;
