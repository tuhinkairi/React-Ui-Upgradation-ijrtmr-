import {
ShieldCheck,
  Download,  Eye,
  LockIcon,
} from 'lucide-react';
import { FaGears } from 'react-icons/fa6';
import { MdHighQuality, MdOutlineSupport, MdSecurity } from 'react-icons/md';
import Title2h2 from '../other/Title2h2';

const benefits = [
  {
    icon: <LockIcon size={26} className="text-[#FF8C42]" />,
    title: 'Access',
    description: 'Give a global audience immediate and easy access to your research increasing the visibility of your work.',
  },
  {
    icon: <FaGears size={26} className="text-[#FF8C42]" />,
    title: 'Impact',
    description: 'Reach new audiences and policy makers; demonstrate the real-world application and impact of your work.',
  },
  {
    icon: <ShieldCheck size={26} className="text-[#FF8C42]" />,
    title: 'Compliance',
    description: 'Easily comply with funder, institution or employer mandates.',
  },
  {
    icon: <MdHighQuality size={26} className="text-[#FF8C42]" />,
    title: 'Quality',
    description: 'Manuscripts are rigorously peer-reviewed and many of our journals are listed in the DOAJ.',
  },
  {
    icon: <Download size={26} className="text-[#FF8C42]" />,
    title: 'Flexibility',
    description: 'Your work can be reused in a variety of ways under Creative Commons Attribution 4.0 License (CC BY 4.0).',
  },
  {
    icon: <MdSecurity size={26} className="text-[#FF8C42]" />,
    title: 'Security',
    description: 'All article content is digitally and permanently preserved.',
  },
  {
    icon: <Eye size={26} className="text-[#FF8C42]" />,
    title: 'Visibility',
    description: 'Content is tagged and enhanced metadata ensures your work is indexed in discovery systems.',
  },
  {
    icon: <MdOutlineSupport size={26} className="text-[#FF8C42]" />,
    title: 'Support',
    description: 'Our editors and support team are here to guide you through the publishing process.',
  },
];

export default function OpenAccessBenefitsGrid() {
  return (
    <section className='_openaccessbenefits '>
    {/* <h2 className="text-3xl font-semibold text-gray-900 mb-6">Benefits to Publishing with us</h2> */}
    <Title2h2 className='mb-6'>Benefits to Publishing with us</Title2h2>
    <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 ">
      {benefits.map(({ icon, title, description }, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md p-3 sm:p-6 space-y-4 hover:bg-[#fae0d0] cursor-pointer transition-all">
          <div className="w-6 h-6 2xl:scale-125 bg-gradient-to-b from-primary  to-orange-600 text-transparent bg-clip-text">{icon}</div>
          <h3 className="font-semibold text-lg 2xl:text-lg ">{title}</h3>
          <p className="text-paragraph text-sm 2xl:text-base">{description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}
