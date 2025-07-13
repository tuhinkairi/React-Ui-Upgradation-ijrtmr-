
import { useCallback, useEffect, useState } from "react";
import type { ConferenceCardProps } from "../../../types/Api";
import ConferenceCard from "./ConferenceCard";
import conference_categories from "../../../lib/axios/api/conference";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { setConferenceList } from "../../../lib/store/Features/conferenceSlice";
import Loading from "../../components/Loading";
import Title2 from "../../other/Title2";
import { setLoading } from "../../../lib/store/Features/loadingSlice";

const ConferenceIndex =() => {
  const loading = useAppSelector((state)=> state.loadingScreen.loading)
  
  // Local state to store conference data
  const [conferenceData, setConferenceData] = useState<ConferenceCardProps[]>([]);
  const dispatch = useAppDispatch();
  // Get conference list from Redux store
  const conferenceState = useAppSelector((state) => state.conference.list);

  /**
   * Fetches conference data from the API and updates both local state and Redux store
   * If no data is found, sets empty arrays in both states
   */
  const fetchConference = useCallback(async () => {
    const data = await conference_categories();
    if (!data || data.length === 0) {
      console.error("No conference data found");
      setConferenceData([]);
      dispatch(setConferenceList([]))
      return;
    }
    setConferenceData(data);
    dispatch(setConferenceList(data))
  }, [dispatch]);

  /**
   * Effect hook to initialize conference data
   * If data exists in Redux store, uses that
   * Otherwise, fetches new data from API
   */
  useEffect(() => {
    const preFetch = async ()=>{
      dispatch(setLoading(true))
      if (conferenceState.length > 0) {
        setConferenceData(conferenceState);
        dispatch(setLoading(false))
        return;
      }
      await fetchConference();
      dispatch(setLoading(false))
    }
    preFetch()
  }, [fetchConference, conferenceState,dispatch]);

  return (
    <div className="max-w-6xl mx-auto py-4 space-y-4">
      {loading ? <Loading title="Conference"/> :
      conferenceData.length > 0 ? conferenceData.map((e, index) => (
        <ConferenceCard key={index} {...e} />
      )): <Title2>Opps Somthing Went Wrong</Title2>}
    </div>
  );
};

export default ConferenceIndex;
