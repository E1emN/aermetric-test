import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeQueries } from './api';

type EmployeesState = {
  selectedIds: string[],
  employeesQueries: Partial<EmployeeQueries>
}

const initialState: EmployeesState = {
  selectedIds: [],
  employeesQueries: {}
};

const employeesSlice = createSlice({
  name: 'selectedEmployees',
  initialState,
  reducers: {
    addSelectedEmployeeId(state, action: PayloadAction<string>) {
      state.selectedIds.push(action.payload);
    },
    removeSelectedEmployeeId(state, action: PayloadAction<string>) {
      state.selectedIds = state.selectedIds.filter((id) => id !== action.payload);
    },
    clearSelectedEmployeeIds(state) {
      state.selectedIds = [];
    },
    setEmployeesQueries(state, action: PayloadAction<Partial<EmployeeQueries>>) {
        state.employeesQueries = action.payload
    }
  },
});

export const { addSelectedEmployeeId, removeSelectedEmployeeId, clearSelectedEmployeeIds, setEmployeesQueries } = employeesSlice.actions;

export default employeesSlice.reducer;