import { setLoading } from '../../store/Features/loadingSlice';
import type { activeSection } from '../../../types/UI';
import type { ConferenceArticleProps } from '../../../types/Api';
import type { Dispatch } from '@reduxjs/toolkit';

interface HandleActiveStateProps {
  active: activeSection;
  setConferenceVolumes: (volumes: ConferenceArticleProps[]) => void;
  setArchiveVolumes:(volume:object)=>void //add the type
  setIssueVolumes:(volume:object)=>void //add the type
  setThesisVolumes:(volume:object)=>void //add the type

  fetchConferenceData: () => Promise<void>;
  fetchArchiveData: () => Promise<void>;
  fetchThesisData: () => Promise<void>;
  fetchIssueData: () => Promise<void>;
  dispatch: Dispatch;
}

export const handleActiveState = async ({
  active,
  setConferenceVolumes,
  setArchiveVolumes,
  setIssueVolumes,
  setThesisVolumes,
  fetchConferenceData,
  fetchArchiveData,
  fetchIssueData,
  fetchThesisData,
  dispatch
}: HandleActiveStateProps) => {
  dispatch(setLoading(true));

  try {
    switch (active.active) {
      case 'conference':
        await fetchConferenceData();
        break;
      case 'archive':
        await fetchArchiveData()
        break
      case 'issue':
        await fetchIssueData()
        break
      case 'thesis':
        await fetchThesisData()
        break
      default:
        setConferenceVolumes([]);
        setArchiveVolumes([]);
        setIssueVolumes([]);
        setThesisVolumes([]);
        break;
    }
  } catch (error) {
    console.error('Error handling active state:', error);
  } finally {
    dispatch(setLoading(false));
  }
};