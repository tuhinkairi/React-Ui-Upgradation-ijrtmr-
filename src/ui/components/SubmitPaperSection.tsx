const SubmitPaperSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#FFF4EF] my-12 mt-8 pl-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary-text mb-4">Submit your Paper</h2>
        <p className="text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. 
          Lacinia purus ac amet pellentesque aliquam enim.
        </p>
        <button className="w-full md:w-auto primaryBtn">
          Submit Paper
        </button>
      </div>

      {/* Image Section */}
        <img
          src="/submitSection.png" // place your image in public/images/
          alt="Submit Paper"
          className="w-full max-w-1/2"
        />
    </section>
  );
};

export default SubmitPaperSection;
