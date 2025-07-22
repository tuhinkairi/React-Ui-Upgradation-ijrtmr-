import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
const ArchiveBtn = ({ label, href, className, icon}: { label:string | React.ReactNode; href: string, className?: string, icon?:boolean | false }) => {
  return (
    <Link
      to={href}
      target='_blank'
      download
      className={`flex justify-between items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text transition ${className} `}
    >
      {label}
      {!icon && <Download size={18} />}
    </Link>
  );
};

export default ArchiveBtn
