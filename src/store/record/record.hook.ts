import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';  
import { 
    changeRecord, 
    resetRecord, 
    setEmployee, 
    setServicesId, 
    setTimeSlot 
} from './record.slice';
import { Irecord } from '../../type';

export const useStoreRecord = () => {
    const dispatch = useDispatch();
    const record = useSelector((state: RootState) => state.record);

    return { 
        record,
        employee: record.employee,
        servicesId: record.servicesId,
        timeSlot: record.timeSlot,

        // Методы для изменения состояния
        setEmployee: (employeeId: number) => {
            dispatch(setEmployee(employeeId));
        },

        setServicesId: (serviceId: number) => {
            dispatch(setServicesId(serviceId));
        },

        setTimeSlot: (timeSlot: number) => {
            dispatch(setTimeSlot(timeSlot));
        },

        resetRecord: () => {
            dispatch(resetRecord());
        },

        changeRecord: (newRecord: Irecord) => {
            dispatch(changeRecord(newRecord));
        }
    };
};