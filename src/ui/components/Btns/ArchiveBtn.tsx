import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
const ArchiveBtn = ({ label, href, className, icon}: { label:string | React.ReactNode; href: string, className?: string, icon?:boolean | false }) => {
  return (
    <Link
      to={href}
      target='_blank'
      download
      className={`flex justify-between items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-b from-primary to-primary-hover hover:from-[#d6d0fa] hover:to-[#d6d0fa] hover:text-primary-text transition ${className} `}
    >
      {label}
      {!icon && <Download size={18} />}
    </Link>
  );
};

export default ArchiveBtn
