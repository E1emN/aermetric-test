import "./employees.scss"
import { Employee } from "./employee/employee"
import { Filter } from "./filter/filter"
import { AddNew } from "./addNew/addNew"

export const Employees = () => {
    return(
        <div className="employees">
            <div className="employees__actions">
                <Filter />
                <AddNew />
                <button className="employees__actions-delete button">Delete selected</button>
            </div>
            <h3 className="employees__title">Emloyees</h3>
            <ul className="employees__list">
                {
                    [1,2,3,4,5,6,7,8].map(a => <li className="employees__list-li" key={a}><Employee /></li>)
                }
            </ul>
        </div>
    )
}