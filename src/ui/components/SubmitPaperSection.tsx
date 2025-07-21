import { Link } from "react-router-dom";

const SubmitPaperSection = () => {
  return (
    <section className="grid grid-rows-2 sm:flex flex-col sm:flex-row items-center justify-between bg-[#FFF4EF] my-12 mt-8 sm:pl-6 lg:pl-16 gap-2 ">
      {/* Text Section */}
      <div className="sm:w-1/2 text-center sm:text-left px-4 sm:px-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary-text mb-4">Ready to Publish your Research?</h2>
        <p className="text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
          Join our network of esteemed researchers and experience the IJSREAT advantage - where efficiency meets excellence in academic publishing.
        </p>
        <Link target="_black" to="https://editorial.fdrpjournals.org/login?journal=2">
          <button className="w-fit max-w-1/3 sm:max-w-1/2 md:w-auto primaryBtn whitespace-nowrap">
            Submit Paper
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="sm:max-w-1/2 flex items-center justify-center max-h-90 overflow-hidden">
        <img
          src="/submitSection.webp" // place your image in public/images/
          alt="Submit Paper"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default SubmitPaperSection;
