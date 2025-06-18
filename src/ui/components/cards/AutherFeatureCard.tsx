
export default function AuthorFeatureCard({ icon, title, description }:{icon:string, title:string, description:string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition h-[250px] max-w-[300px] flex flex-col justify-around">
      <div className="mb-3">
        <img src={icon} alt={title} className="h-14 w-14" />
      </div>
      <h4 className="font-semibold text-xl text-dark mb-4">{title}</h4>
      <p className="text-sm text-paragraph mt-1">{description}</p>
    </div>
  );
}
