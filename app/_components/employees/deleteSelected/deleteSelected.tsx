"use client"
import { useDeleteEmployeeMutation } from "@/app/_store/employees/api"
import "../employee/delete/delete.scss"
import { Popover } from "@/app/_components/popover/popover"
import { useAppDispatch, useAppSelector } from "@/app/_hooks/reduxHooks"
import { clearSelectedEmployeeIds } from "@/app/_store/employees/slice"

export const DeleteSelected = () => {

    const selectedIds = useAppSelector(state => state.employees.selectedIds)
    const [deleteEmployee] = useDeleteEmployeeMutation()
    const dispatch = useAppDispatch()

    const deleteSelectedEmployees = () => {
        selectedIds.forEach(id => deleteEmployee(id))
        dispatch(clearSelectedEmployeeIds())
    }
    
    return (
        <Popover
            buttonName="Delete selected"
            className="delete"
            disabled={!!!selectedIds.length}
            renderBody={(close) => {
                return (
                    <div className="delete__window">
                        <span>Are you sure you want to delete selected?</span>
                        <div className="delete__window-buttons">
                        <button className="button" onClick={close}>No</button>
                            <button className="button" onClick={() => { deleteSelectedEmployees(); close(); }}>Yes</button>
                        </div>
                    </div>
                )
            }}
        />
    )
}