import Title2 from '../other/Title2';
import AuthorFeatureCard from './cards/AutherFeatureCard';

const features = [
  {
    icon: "./feature/1.webp",
    title: 'Instruction for Authors',
    description: 'High-level access to cluster health, features and issues.',
  },
  {
    icon: "./feature/2.webp",
    title: 'Article Processing Charges',
    description: 'Instance status and dependencies in one aggregated view.',
  },
  {
    icon: "./feature/3.webp",
    title: 'Guidance for Editorial Management System',
    description: 'Stream combined Capsule logs across instances.',
  },
  {
    icon: "./feature/4.webp",
    title: 'Article Status',
    description: 'High-level access to cluster health, features and issues.',
  },
  {
    icon: "./feature/5.webp",
    title: 'Online Article Submission',
    description: 'Instance status and dependencies in one aggregated view.',
  },
  {
    icon: "./feature/6.webp",
    title: 'Archives',
    description: 'Easily configure Liveness and Ready probes for Capsules.',
  },
];

export default function AuthorFeaturesGrid() {
  return (
    <div className="mt-8">
      {/* <h2 className="text-3xl font-semibold text-gray-900 mb-6">For Authors</h2> */}
      <Title2 className='mb-6'>For Authors</Title2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
        {features.map((feature, idx) => (
          <AuthorFeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  );
}
