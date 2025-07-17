const VerificationSection = () => {
  return (
    <section className="w-full py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CrossRef Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-6 py-8 flex flex-col items-start justify-center space-y-6">
          <img
            src="/verifySection/image2.png"
            alt="DOI CrossRef"
            className="w-48 h-auto object-contain"  
          />
          <p className="text-gray-600 leading-relaxed xl:text-xl">
            CrossRef DOI is assigned to research Article published in our journal. 
            IJSREAT DOI prefix is <span className="font-semibold">10.59256/ijsreat</span>
          </p>
        </div>

        {/* Turnitin Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg px-6 py-8 flex flex-col items-start justify-start space-y-6">
          <img
            src="/verifySection/image1.png"
            alt="Turnitin"
            className="w-48 h-auto object-contain"
          />
          <p className="text-gray-600 leading-relaxed xl:text-xl">
            Plagiarism is checked by the leading plagiarism checker
          </p>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
