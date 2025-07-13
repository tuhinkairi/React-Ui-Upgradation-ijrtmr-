import React from 'react';
import type { ConferenceCardProps } from '../../../types/Api';
import PrimaryBtn from '../../components/Btns/PrimaryBtn';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../lib/store/store';
import { setActiveConference } from '../../../lib/store/Features/conferenceSlice';



const ConferenceCard: React.FC<ConferenceCardProps> = (conference) => {
    const {
        id, issue,volume,year ,name, conference_date, organised_by, title
    } = conference;
    const dispatch = useAppDispatch();
    const setActiveData = () => {
        dispatch(setActiveConference(conference))
    }
    return (
        <div className="flex justify-between items-start border rounded-lg p-6 shadow-sm bg-white w-full">
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-semibold">{name}</h2>

                    <NavLink onClick={setActiveData}
                        to={"/conference/paperlist?id="+id+"&year="+year+"&volume="+volume+"&issue="+issue+"&name="+name}
                        rel="noopener noreferrer"
                        className="sm:hidden"
                    >
                        <PrimaryBtn>
                            View Article
                        </PrimaryBtn>
                    </NavLink>
                </div>
                <p className="text-lg font-medium mt-2">{title}</p>
                <p className="mt-2">
                    <span className="font-medium">Organized By :</span> {organised_by}
                </p>
                <p className="mt-1">
                    <span className="font-medium">Conference Date :</span> {conference_date}
                </p>
            </div>

            <NavLink onClick={setActiveData}
                to={"/conference/paperlist?id="+id+"&year="+year+"&volume="+volume+"&issue="+issue+"&name="+name}
                rel="noopener noreferrer"
                className="hidden sm:inline-block"

            >
                <PrimaryBtn>
                    View Article
                </PrimaryBtn>
            </NavLink>
        </div>
    );
};

export default ConferenceCard;
