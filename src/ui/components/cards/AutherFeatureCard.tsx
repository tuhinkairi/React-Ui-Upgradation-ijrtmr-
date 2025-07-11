
export default function AuthorFeatureCard({ icon, title, description}:{icon:string, title:string, description:string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition  max-w-[300px]   justify-around">
      <div className="mb-3 xl:h-1/2">
        <img src={icon} alt={title} className="h-14 w-14" />
      </div>
      <h4 className="font-semibold text-xl text-dark mb-4">{title}</h4>
      <p className="text-sm text-paragraph mt-1 md:hidden">{description}</p>
    </div>
  );
}
