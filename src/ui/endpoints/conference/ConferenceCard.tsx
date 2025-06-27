import React from 'react';
import type { ConferenceCardProps } from '../../../types/Api';
import PrimaryBtn from '../../components/Btns/PrimaryBtn';



const ConferenceCard: React.FC<ConferenceCardProps> = ({
    acronym,
    title,
    organizer,
    date,
    articleLink,
}) => {
    return (
        <div className="flex justify-between items-start border rounded-lg p-6 shadow-sm bg-white w-full">
            <div>
                <h2 className="text-2xl font-semibold">{acronym}</h2>
                <p className="text-lg font-medium mt-2">{title}</p>
                <p className="mt-2">
                    <span className="font-medium">Organized By :</span> {organizer}
                </p>
                <p className="mt-1">
                    <span className="font-medium">Conference Date :</span> {date}
                </p>
            </div>

            <a
                href={articleLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <PrimaryBtn>

                    View Article
                </PrimaryBtn>
            </a>
        </div>
    );
};

export default ConferenceCard;
