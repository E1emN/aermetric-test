"use client"
import { Popover } from "@/app/_components/popover/popover"

export const Edit = () => {

    return (
        <Popover
            buttonName="Edit"
            bodySide="right"
            renderBody={() => {
                return (
                    <form className="form">
                        <label className="label">
                            ID
                            <input className="input" />
                        </label>
                        <label className="label">
                            Name
                            <input className="input" />
                        </label>
                        <label className="label">
                            Email
                            <input className="input" />
                        </label>
                        <label className="label">
                            Age
                            <input className="input" />
                        </label>
                        <label className="label">
                            Position
                            <input className="input" />
                        </label>
                        <label className="label">
                            Department
                            <input className="input" />
                        </label>
                        <button className="button">Save</button>
                    </form>
                )
            }}
        /
        >
    )
}