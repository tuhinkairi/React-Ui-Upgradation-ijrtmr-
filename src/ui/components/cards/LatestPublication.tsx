import { Link } from "react-router-dom";

const publications = [
  {
    title: 'Effect of Blood Cancer in Human',
    id: '197',
    ink: "/archives/paper-details?paperid=197&papertitle=Effect-of-Blood-Cancer-in-Human"
  },
  {
    title: 'Smart Delivery Bot: An Autonomous Indoor Delivery System Using Embedded Technology',
    id: '198',
    ink: "/archives/paper-details?paperid=198&papertitle=Smart-Delivery-Bot%3A-An-Autonomous-Indoor-Delivery-System-Using-Embedded-Technology"
  },
  {
    title: 'A Comparative Study of Machine Learning and Deep Learning Approaches For Hotel Booking Cancellation Prediction',
    id: '199',
    ink: "/archives/paper-details?paperid=199&papertitle=A-Comparative-Study-of-Machine-Learning-and-Deep-Learning-Approaches-For-Hotel-Booking-Cancellation-Prediction"
  },
];

export default function LatestPublication() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
      <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">Latest Publication</h2>

      {publications.map((pub, index) => (
        <div key={index} className="space-y-2">
          <Link to={pub.ink}>
            <h3 className="text-sm 2xl:text-base text-gray-800">{pub.title}</h3>
            <h3 className="text-sm 2xl:text-base font-medium text-orange-500">Paper ID : {pub.id}</h3>
            {index !== publications.length - 1 && (
              <hr className="border-gray-300 mt-2" />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
