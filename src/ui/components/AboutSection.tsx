export default function AboutSection() {
  return (
    <section className="gap-4 mx-auto ml-16 mr-4 xl:mr-16">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Placeholder */}
        <div className="md:w-1/2 flex items-center justify-start">
          <img src="./aboutHome.png" className="max-h-[400px]" alt="about image" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-primaryText mb-4">Behind the Brand</h2>
          <p className="text-secondaryText mb-4 text-sm leading-relaxed">
            International Journal of Scientific Research in Engineering & Technology is (e-ISSN: 2583–1240) Bi-monthly, international peer-reviewed, open-access and multidisciplinary online journal published for the enhancement of research in various disciplines of Science, Engineering & Technologies.
          </p>
          <p className="text-secondaryText text-sm leading-relaxed">
            Publishing an article in a Peer-Reviewed Journal is critical for developing a cohesive and acknowledged knowledge network. It immediately reflects the authors and the institutions that support them’s work excellence. Articles that have been peer-reviewed support and represent the scientific process. As a result, it is critical to agree on required ethical conduct norms.
          </p>
        </div>
      </div>
    </section>
  );
}
