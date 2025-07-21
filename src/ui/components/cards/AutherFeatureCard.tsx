import type React from "react";

export default function AuthorFeatureCard({ logo ,icon, title, description }: {logo?:React.ReactNode, icon: string, title: string, description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition  max-w-[300px] xl:max-w-90 2xl:max-w-[600px] justify-around h-full">
      <div className="mb-3 xl:h-1/2 ">
        {logo ? logo :<img loading='lazy'
          src={icon} alt={title} className="h-14 w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20" />}
      </div>
      <h4 className="font-semibold text-xl 2xl:text-lg  text-dark mb-4">{title}</h4>
      <p className="text-sm 2xl:text-base text-paragraph mt-1 md:hidden">{description}</p>
    </div>
  );
}
