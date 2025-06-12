import { Download } from 'lucide-react';
const ArchiveBtn = ({ label, href, className }: { label: string; href: string, className?: string }) => {
  return (
    <a
      href={href}
      download
      className={`flex justify-between items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text transition ${className}`}
    >
      {label}
      <Download size={18} />
    </a>
  );
};

export default ArchiveBtn
