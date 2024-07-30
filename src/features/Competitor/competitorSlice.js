import { createSlice } from "@reduxjs/toolkit";
import competitors from '../../assets/Compotitors.json'
console.log(competitors)

const initialState = {
    competitors: JSON.parse(window.localStorage.getItem('competitors')) || competitors,
    currentCompetitor: null,
    voteCount: 0
}

const competitorSlice = createSlice({
    name: 'competitors',
    initialState,
    reducers: {
        addCompetitor: (state, actions) => {
            state.currentCompetitor = actions.payload;
        } ,
        inCreaseVote: (state) => {
            state.voteCount = state.voteCount + 1;
        },
        decreaseVote: (state) => {
            state.voteCount = state.voteCount - 1;
        },
        addVoteToCompetitor: (state, action) => {
            let compIndex = state.competitors.findIndex((value) => value.Id == action.payload);
            state.competitors[compIndex].NumberofVotes = Number(state.competitors[compIndex].NumberofVotes) + Number(state.voteCount);
            // local storage 
            window.localStorage.setItem('competitors', JSON.stringify(state.competitors));
        },
        resetState: (state) => {
            state.currentCompetitor = null;
            state.voteCount = 0;
        }
    }
});

export default competitorSlice.reducer;

export const { addCompetitor, resetState, inCreaseVote, decreaseVote, addVoteToCompetitor} = competitorSlice.actions;

