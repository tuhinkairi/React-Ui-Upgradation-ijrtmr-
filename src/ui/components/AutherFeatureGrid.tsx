import AuthorFeatureCard from './cards/AutherFeatureCard';

const features = [
  {
    icon: "./feature/1.png",
    title: 'Instruction for Authors',
    description: 'High-level access to cluster health, features and issues.',
  },
  {
    icon: "./feature/2.png",
    title: 'Article Processing Charges',
    description: 'Instance status and dependencies in one aggregated view.',
  },
  {
    icon: "./feature/3.png",
    title: 'Guidance for Editorial Management System',
    description: 'Stream combined Capsule logs across instances.',
  },
  {
    icon: "./feature/4.png",
    title: 'Article Status',
    description: 'High-level access to cluster health, features and issues.',
  },
  {
    icon: "./feature/5.png",
    title: 'Online Article Submission',
    description: 'Instance status and dependencies in one aggregated view.',
  },
  {
    icon: "./feature/6.png",
    title: 'Archives',
    description: 'Easily configure Liveness and Ready probes for Capsules.',
  },
];

export default function AuthorFeaturesGrid() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">For Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <AuthorFeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  );
}
