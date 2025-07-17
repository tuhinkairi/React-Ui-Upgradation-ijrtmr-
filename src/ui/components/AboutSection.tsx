import Title2 from "../other/Title2";

export default function AboutSection() {
  return (
    <section className="gap-4 mx-6 lg:mx-auto lg:ml-16 lg:mr-4 xl:mr-16 ">
      <div className=" mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image Placeholder */}
        <div className="md:w-1/2 flex items-center justify-start">
          <img src="./aboutHome.png" className="max-h-[400px]" alt="about image" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          {/* <h2 className="text-3xl font-semibold text-primaryText mb-4">Welcome to IJSREAT</h2> */}
          <Title2>Welcome to IJSREAT</Title2>
          <p className="text-secondaryText mb-4 text-sm xl:text-base 2xl:text-2xl leading-relaxed mt-6">
            International Journal of Scientific Research in Engineering & Technology is (e-ISSN: 2583-1240) Bi-monthly, international peer-reviewed, open-access and multidisciplinary online journal published for the enhancement of research in various disciplines of Science, Engineering &Technologies.
          </p>
          <p className="text-secondaryText text-sm xl:text-base 2xl:text-2xl leading-relaxed">
            International journal for publishing new ideas founded by academicians, educationists,
            engineers, and corporate people. The research results and fundamental advancement are all
            aspects of Innovative Research in Science, Engineering &amp; Technology, various engineering
            disciplines, etc. IJSREAT is a scholarly, open, accessible, Peer Review Journal that helps an
            academic person and student community. IJSREAT provides the academic community and
            industry for submitting original research and applications related to Various Engineering
            disciplines and Innovative Technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
