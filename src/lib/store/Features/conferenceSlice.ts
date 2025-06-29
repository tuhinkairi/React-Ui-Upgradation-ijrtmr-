import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice} from '@reduxjs/toolkit';
import type { ConferenceCardProps } from '../../../types/Api';

interface ConferenceState {
  list: ConferenceCardProps[];
  active: ConferenceCardProps | null;
}

const initialState: ConferenceState = {
  list: [],
  active: null,
};

const conferenceSlice = createSlice({
  name: 'conference',
  initialState,
  reducers: {
    setConferenceList: (state, action: PayloadAction<ConferenceCardProps[]>) => {
      state.list = action.payload;
    },
    setActiveConference: (state, action: PayloadAction<ConferenceCardProps>) => {
      state.active = action.payload;
    },
    clearActiveConference: (state) => {
      state.active = null;
    },
  },
});

export const {
  setConferenceList,
  setActiveConference,
  clearActiveConference,
} = conferenceSlice.actions;

export default conferenceSlice;
