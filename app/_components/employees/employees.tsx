"use client"
import "./employees.scss"
import { Employee } from "./employee/employee"
import { Filter } from "./filter/filter"
import { AddNew } from "./addNew/addNew"
import { useGetAllEmployeesQuery } from "@/app/_store/employees/api"
import { useAppSelector } from "@/app/_hooks/reduxHooks"
import { DeleteSelected } from "./deleteSelected/deleteSelected"

export const Employees = () => {

    const employeesQueries = useAppSelector(state => state.employees.employeesQueries)
    const { currentData } = useGetAllEmployeesQuery(employeesQueries)
    
    return(
        <div className="employees">
            <div className="employees__actions">
                <Filter />
                <AddNew />
                <DeleteSelected />
            </div>
            <h3 className="employees__title">Emloyees</h3>
            <ul className="employees__list">
                {
                    currentData?.map(emp => 
                        <li className="employees__list-li" key={emp.id}>
                            <Employee {...emp} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}