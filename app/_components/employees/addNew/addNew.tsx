"use client"
import { Popover } from "../../popover/popover"

export const AddNew = () => {

    return (
        <Popover
            buttonName="Add new"
            renderBody={() => {
                return (
                    <form className="form">
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
                        <button className="button">Add</button>
                    </form>
                )
            }}
        />
    )
}