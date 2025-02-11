import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    attendees: number;
    names: string[];
    companyName: string;
    specialAccomodations: boolean | null;
    readyToRock: boolean;
    stepOneComplete: boolean;
    stepTwoComplete: boolean;
}

const initialState: FormState = {
    attendees: 0,
    names: [],
    companyName: "",
    specialAccomodations: null,
    readyToRock: false,
    stepOneComplete: false,
    stepTwoComplete: false
};

const formSlice = createSlice({
    name: "form",
    initialState,   
    reducers: {
        setAttendees: (state, action: PayloadAction<number>) => {
            state.attendees = action.payload;
            state.names = Array(action.payload).fill("");
        },
        setNames: (state, action: PayloadAction<string[]>) => {
            state.names = action.payload;
        },
        setCompanyName: (state, action: PayloadAction<string>) => {
            state.companyName = action.payload;
        },
        setSpecialAccomodations: (state, action: PayloadAction<boolean|null>) => {
            state.specialAccomodations = action.payload;
        },
        setReadyToRock: (state, action: PayloadAction<boolean>) => {
            state.readyToRock = action.payload;
        },
        setStepOneComplete: (state, action: PayloadAction<boolean>) => {
            state.stepOneComplete = action.payload;
        },
        setStepTwoComplete: (state, action: PayloadAction<boolean>) => {
            state.stepTwoComplete = action.payload;
        },
        resetForm:()=> initialState
    },
});

export const { setAttendees, setNames, setCompanyName, setSpecialAccomodations, setReadyToRock, setStepOneComplete, setStepTwoComplete, resetForm } = formSlice.actions;
export default formSlice.reducer;