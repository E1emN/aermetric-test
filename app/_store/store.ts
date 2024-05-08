import { configureStore } from '@reduxjs/toolkit'
import { employeesApi } from './employees/api'
import employeesReducer from './employees/slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        [employeesApi.reducerPath]: employeesApi.reducer,
        employees: employeesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeesApi.middleware)
  })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']