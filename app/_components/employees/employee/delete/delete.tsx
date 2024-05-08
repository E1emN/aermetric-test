"use client"
import { useDeleteEmployeeMutation } from "@/app/_store/employees/api"
import "./delete.scss"
import { Popover } from "@/app/_components/popover/popover"

export const Delete: React.FC<{id: string}> = ({ id }) => {

    const [deleteEmployee] = useDeleteEmployeeMutation()
    
    return (
        <Popover
            buttonName="Delete"
            className="delete"
            renderBody={(close) => {
                return (
                    <div className="delete__window">
                        <span>Are you sure you want to delete?</span>
                        <div className="delete__window-buttons">
                        <button className="button" onClick={close}>No</button>
                            <button className="button" onClick={() => deleteEmployee(id)}>Yes</button>
                        </div>
                    </div>
                )
            }}
        />
    )
}