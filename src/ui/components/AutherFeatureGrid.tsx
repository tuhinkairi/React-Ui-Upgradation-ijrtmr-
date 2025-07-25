import { Link } from 'react-router-dom';
import AuthorFeatureCard from './cards/AutherFeatureCard';
import { Archive, Book} from 'lucide-react';
import { GrStatusGood } from 'react-icons/gr';
import { MdOutlinePublish, MdPayments } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa6';
import Title2h2 from '../other/Title2h2';

const features = [
  {
    icon: "./feature/1.webp",
    title: 'Instruction for Authors',
    endpoint: "/instruction-for-author",
    description: 'High-level access to cluster health, features and issues.',
    logo:<FaUserTie  className='text-primary h-13 w-13 pl-3 pt-3'/>
    
  },
  {
    icon: "./feature/2.webp",
    title: 'Article Processing Charges',
    endpoint: "/article-processing-charges",
    description: 'Instance status and dependencies in one aggregated view.',
    logo:<MdPayments className='text-primary h-13 w-13 pl-3 pt-3'/>
  },
  {
    icon: "./feature/3.webp",
    title: 'Guidance for Editorial Management System',
    description: 'Stream combined Capsule logs across instances.',
    logo:<Book className='text-primary h-13 w-13 pl-3 pt-3'/>
  },
  {
    icon: "./feature/4.webp",
    title: 'Article Status',
    endpoint: "/paper-status",
    description: 'High-level access to cluster health, features and issues.',
    logo:<GrStatusGood className='text-primary h-13 w-13 pl-3 pt-3'/>
  },
  {
    icon: "./feature/5.webp",
    title: 'Online Article Submission',
    endpoint: "/journal-publishing-process",
    description: 'Instance status and dependencies in one aggregated view.',
    logo:<MdOutlinePublish className='text-primary h-13 w-13 pl-3 pt-3'/>
  },
  {
    icon: "./feature/6.webp",
    title: 'Archives',
    endpoint: "/archives",
    description: 'Easily configure Liveness and Ready probes for Capsules.',
    logo:<Archive className='text-primary h-13 w-13 pl-3 pt-3'/>
  },
];

export default function AuthorFeaturesGrid() {
  return (
    <div className="mt-8">
      {/* <h2 className="text-3xl font-semibold text-gray-900 mb-6">For Authors</h2> */}
      <Title2h2 className='mb-6'>For Authors</Title2h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
        {features.map((feature, idx) => (
          <Link to={feature?.endpoint??""}>
          <AuthorFeatureCard key={idx} {...feature} />
          </Link>
        ))}
      </div>
    </div>
  );
}
