import React from 'react';

interface DownloadCardProps {
  title: string;
  downloadUrl: string;
}

const DownloadSectionCard: React.FC<DownloadCardProps> = ({ title, downloadUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow shadowSprade p-8 text-center w-90 h-60 mx-auto content-center">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <a
        href={downloadUrl}
        download
      >
        <button className="primaryBtn">
        Download
        </button>
      </a>
    </div>
  );
};

export default DownloadSectionCard;
