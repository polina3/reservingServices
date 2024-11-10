import { configureStore } from '@reduxjs/toolkit';
import recordReducer from './record/record.slice';

export const store = configureStore({
    reducer: {
        record: recordReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;