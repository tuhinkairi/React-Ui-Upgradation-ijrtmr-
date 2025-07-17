import { Link } from "react-router-dom";

const ListingSection = ({data,title}:{data: {title:string, link:string}[],title:string}) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadowSprade borderPrimary p-6">
      <h2 className="text-lg xl:text-2xl 2xl:text-3xl capitalize font-semibold text-primary-text mb-4">{title}</h2>
      <ul className="space-y-3">
        {data.map((link, idx) => (
          <li key={idx}>
            <Link to={link.link} rel="noopener noreferrer"
              className="block w-full borderPrimaryHover text-gray-800 font-medium rounded-md py-2 px-4 transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingSection;
