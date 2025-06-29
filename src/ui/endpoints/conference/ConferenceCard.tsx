import React from 'react';
import type { ConferenceCardProps } from '../../../types/Api';
import PrimaryBtn from '../../components/Btns/PrimaryBtn';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../lib/store/store';
import { setActiveConference } from '../../../lib/store/Features/conferenceSlice';



const ConferenceCard: React.FC<ConferenceCardProps> = (conference) => {
    const {
        name, conference_date, organised_by, title
    } = conference;
    const dispatch = useAppDispatch();
    const setActiveData = () => {
        dispatch(setActiveConference(conference))
    }
    return (
        <div className="flex justify-between items-start border rounded-lg p-6 shadow-sm bg-white w-full">
            <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-lg font-medium mt-2">{title}</p>
                <p className="mt-2">
                    <span className="font-medium">Organized By :</span> {organised_by}
                </p>
                <p className="mt-1">
                    <span className="font-medium">Conference Date :</span> {conference_date}
                </p>
            </div>

            <NavLink onClick={setActiveData}
                to={"/conference/" + title.replace(/\s+/g, '-').toLowerCase()}
                rel="noopener noreferrer"
            >
                <PrimaryBtn>
                    View Article
                </PrimaryBtn>
            </NavLink>
        </div>
    );
};

export default ConferenceCard;
