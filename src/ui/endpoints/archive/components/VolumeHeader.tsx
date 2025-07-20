
import React from 'react';
import type { activeSection } from '../../../../types/UI';
import { useNavigate } from 'react-router-dom';

interface VolumeHeaderProps {
    active: activeSection;
    activePage?: {
        volume?: string;
        issue?: string;
        year?: string;
    } | null;
}

export const VolumeHeader: React.FC<VolumeHeaderProps> = ({ active, activePage }) => {
    const navigate = useNavigate();
    const getHeaderContent = () => {
        switch (active.active) {
            case "conference":
                if (!activePage) {
                    navigate('/conference');
                }
                return `Volume ${activePage?.volume}, Issue ${activePage?.issue} (${activePage?.year})`;
            case "archive":
                return `Volume ${1}, Issue ${4} (${4})`;
            case "issue":
                return `Volume ${1}, Issue ${4} (${4})`;
            case "thesis":
                return `Volume ${1}, Issue ${4} (${4})`;
            default:
                return "Archive Volumes";
        }
    };

    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold">{getHeaderContent()}</h1>
        </div>
    );
};