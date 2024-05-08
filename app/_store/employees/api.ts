import { BASE_URL, DEPARTMENTS, POSITIONS } from "@/app/_constants";
import { objectToQueryString } from "@/app/_helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export type Position = typeof POSITIONS[number]
export type Department = typeof DEPARTMENTS[number]

export type Employee = {
    id: string,
    name: string,
    email: string,
    age: string,
    position: Position,
    department: Department
}

export type EmployeeQueries = Omit<Employee, 'position' | 'department'> & {
    position: Position | '',
    department: Department | ''
}

export const employeesApi = createApi({
    reducerPath: "employeesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Employees'],
    endpoints: (builder) => ({
        getAllEmployees: builder.query<Employee[], Partial<EmployeeQueries>>({
            query: (employee) =>
                `employees${objectToQueryString(employee)}`,
            providesTags: ['Employees']
        }),
        addEmployee: builder.mutation<Employee, Omit<Employee, 'id'>>({
            query: (newEmployee) => ({
                url: `employees`,
                method: "POST",
                body: newEmployee,
            }),
            invalidatesTags: ['Employees']
        }),
        updateEmployee: builder.mutation<Employee, Partial<Employee>>({
            query: ({ id, ...update }) => ({
                url: `employees/${id}`,
                method: "PUT",
                body: update,
            }),
            invalidatesTags: ['Employees']
        }),
        deleteEmployee: builder.mutation<void, string>({
            query: (id) => ({
                url: `employees/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Employees']
        }),
    }),
});

export const {
    useGetAllEmployeesQuery,
    useAddEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation
} = employeesApi;