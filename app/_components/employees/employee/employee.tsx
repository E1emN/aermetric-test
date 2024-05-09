import Image from "next/image"
import "./employee.scss"
import { Edit } from "./edit/edit"
import { Delete } from "./delete/delete"
import { Employee as EmployeeType } from "@/app/_store/employees/api"
import { useAppDispatch, useAppSelector } from "@/app/_hooks/reduxHooks"
import { addSelectedEmployeeId, removeSelectedEmployeeId } from "@/app/_store/employees/slice"

export const Employee: React.FC<EmployeeType> = (props) => {

    const selectedIds = useAppSelector(state => state.employees.selectedIds)
    const dispatch = useAppDispatch()
    const isSelected = selectedIds.includes(props.id)

    return(
        <div 
            className={`employee ${isSelected ? 'employee_selected' : ''}`} 
            data-testid="employee"
        >
            <input 
                className="employee__select" 
                type="checkbox"
                checked={isSelected}
                onChange={e => e.target.checked ? dispatch(addSelectedEmployeeId(props.id)) : dispatch(removeSelectedEmployeeId(props.id))}
            />
            <div className="employee__info">
                <Image
                    src="/avatar.gif"
                    width={100}
                    height={100}
                    alt=""
                    className="employee__info-avatar"
                />
                <div className="employee__info-block">
                    <span className="employee__info-text"><strong>Name:</strong> {props.name}</span>
                    <span className="employee__info-text"><strong>Email:</strong> {props.email}</span>
                    <span className="employee__info-text"><strong>Age:</strong> {props.age}</span>
                    <span className="employee__info-text"><strong>Position:</strong> {props.position}</span>
                    <span className="employee__info-text"><strong>Department:</strong> {props.department}</span>
                </div>
            </div>
            <div className="employee__actions">
                <Edit {...props} />
                <Delete id={props.id} />
            </div>
        </div>
    )
}