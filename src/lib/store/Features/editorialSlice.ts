import { createSlice } from '@reduxjs/toolkit'
import type { EditorialMember } from '../../../types/Api'

interface EditorialState {
    editorialMembers: EditorialMember[]
    currentMember: EditorialMember | null
}

const initialState: EditorialState = {
    editorialMembers: [],
    currentMember: null
}

const editorialSlice = createSlice({
    name: 'editorial',
    initialState,
    reducers: {
        setEditorialMembers: (state, action) => {
            state.editorialMembers = action.payload
        },
        updateEditorialMember: (state, action) => {
            const index = state.editorialMembers.findIndex(
                member => member.member_id === action.payload.member_id
            )
            if (index !== -1) {
                state.editorialMembers[index] = action.payload
            }
        },
        setCurrentMember: (state, action) => {
            state.currentMember = action.payload
        }
    }
})

export const { setEditorialMembers, updateEditorialMember, setCurrentMember } = editorialSlice.actions
export default editorialSlice