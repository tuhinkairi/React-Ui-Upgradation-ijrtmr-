
const publications = [
  {
    title: 'NLP Approaches for Bidirectional Translation Between Genderless and Gender-Defined Languages.',
    id: 'FIF1234567',
  },
  {
    title: 'Aquatic Habitat Flooded With Pathogenic Microbes Showing Diverse Antibiotic Resistance',
    id: 'FIF1234567',
  },
  {
    title: 'Aquatic Habitat Flooded With Pathogenic Microbes Showing Diverse Antibiotic Resistance',
    id: 'FIF1234567',
  },
];

export default function LatestPublication() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
      <h3 className="text-center text-lg font-semibold text-dark">Latest Publication</h3>

      {publications.map((pub, index) => (
        <div key={index} className="space-y-2">
          <p className="text-sm text-gray-800">{pub.title}</p>
          <p className="text-sm font-medium text-orange-500">Paper ID : {pub.id}</p>
          {index !== publications.length - 1 && (
            <hr className="border-gray-300 mt-2" />
          )}
        </div>
      ))}
    </div>
  );
}
