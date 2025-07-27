import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../lib/store/store";
import type { ConferenceArticleProps } from "../types/Api";
import conference_categories from "../lib/axios/api/conference";
import { setActiveConference } from "../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../lib/utils/conference/conferenceFunctions";
import { setCurrentPage } from "../lib/store/Features/paginationSlice";


interface UseConferenceDataProps {
  url: string;
  pageNumber: number;
  conferenceVolumes: ConferenceArticleProps[];
  setConferenceVolumes: (volumes: ConferenceArticleProps[]) => void;
}

export const useConferenceData = ({ 
  url, 
  pageNumber, 
  conferenceVolumes, 
  setConferenceVolumes 
}: UseConferenceDataProps) => {
  const dispatch = useAppDispatch();
  const activeConferencePage = useAppSelector((state) => state.conference.active);
  const trackPage = useAppSelector((state) => state.pagination.current_page);

  const fetchConferenceData = useCallback(async () => {
    try {
      if (!activeConferencePage?.id) {
        const response = await conference_categories();
        const conference = response.filter(
          item => item.title.localeCompare(url.split("/").slice(-1)[0])
        )[0];
        
        if (conference) {
          dispatch(setActiveConference(conference));
        }
      } else {
        const params = {
          id: activeConferencePage.id,
          page: pageNumber,
          per_page: 5,
        };
        
        if (conferenceVolumes.length === 0 || trackPage !== pageNumber) {
          await getConferenceDetails(params, setConferenceVolumes, dispatch);
          dispatch(setCurrentPage(pageNumber));
        }
      }
    } catch (err) {
      console.error('Error fetching conference data:', err);
    }
  }, [activeConferencePage, pageNumber, dispatch, url, trackPage, conferenceVolumes, setConferenceVolumes]);

  return { fetchConferenceData };
};