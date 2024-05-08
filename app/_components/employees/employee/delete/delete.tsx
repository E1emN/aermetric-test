"use client"
import "./delete.scss"
import { Popover } from "@/app/_components/popover/popover"

export const Delete = () => {

    return (
        <Popover
            buttonName="Delete"
            className="delete"
            renderBody={() => {
                return (
                    <div className="delete__window">
                        <span>Are you sure you want to delete?</span>
                        <div className="delete__window-buttons">
                        <button className="button">No</button>
                            <button className="button">Yes</button>
                        </div>
                    </div>
                )
            }}
        /
        >
    )
}