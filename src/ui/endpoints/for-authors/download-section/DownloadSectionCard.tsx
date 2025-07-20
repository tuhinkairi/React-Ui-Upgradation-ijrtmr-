import React from 'react';
import { Link } from 'react-router-dom';

interface DownloadCardProps {
  title: string;
  downloadUrl: string;
}

const DownloadSectionCard: React.FC<DownloadCardProps> = ({ title, downloadUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow shadowSprade p-8 text-center w-90 h-60 mx-auto content-center">
      <h3 className="text-xl xl:text-2xl font-semibold mb-6">{title}</h3>
      <Link
        to={downloadUrl}
        download={downloadUrl.split("/")[-1]} 
        target='_blank'
      >
        <button className="primaryBtn">
        Download
        </button>
      </Link>
    </div>
  );
};

export default DownloadSectionCard;
