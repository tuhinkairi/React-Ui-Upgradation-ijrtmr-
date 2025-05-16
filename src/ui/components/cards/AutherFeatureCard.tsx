
export default function AuthorFeatureCard({ icon, title, description }:{icon:string, title:string, description:string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-5   shadow-sm hover:shadow-md transition">
      <div className="mb-3">
        <img src={icon} alt={title} className="h-10 w-10" />
      </div>
      <h4 className="font-semibold text-base text-dark mb-4">{title}</h4>
      <p className="text-sm text-paragraph mt-1">{description}</p>
    </div>
  );
}
