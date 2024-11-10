import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Irecord } from '../../type';

const initialState: Irecord = {
    employee: null,
    servicesId: null,
    timeSlot: null,
} as const satisfies Irecord

const recordSlice = createSlice({
    name: 'record',
    initialState,
    reducers: {
        setEmployee: (state, action: PayloadAction<number>) => {
            state.employee = action.payload;
        },

        setServicesId: (state, action: PayloadAction<number>)=>{
            state.servicesId = action.payload
        },
        setTimeSlot: (state, action: PayloadAction<number>)=>{
            state.timeSlot = action.payload
        },
        resetRecord: (state) => {
            Object.assign(state, initialState);
        },
        changeRecord: (_, action: PayloadAction<Irecord>) => {
            return { ...action.payload };
        },
    }
})

export const {
    changeRecord,
    resetRecord,
    setEmployee,
    setServicesId,
    setTimeSlot,
} = recordSlice.actions  ;

export default recordSlice.reducer;