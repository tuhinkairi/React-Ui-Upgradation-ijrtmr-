import { Link } from "react-router-dom";

const SubmitPaperSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#FFF4EF] my-12 mt-8 pl-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary-text mb-4">Ready to Publish your Research?</h2>
        <p className="text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
          Join our network of esteemed researchers and experience the IJSREAT advantage - where efficiency meets excellence in academic publishing.
        </p>
        <Link target="_black" to="https://editorial.fdrpjournals.org/login?journal=2">
        <button className="w-full md:w-auto primaryBtn">
          Submit Paper
        </button>
        </Link>
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
