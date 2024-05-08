"use client"
import { Popover } from "../../popover/popover"

export const Filter = () => {

    return (
        <Popover
            buttonName="Filter"
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
                        <button className="button">Search</button>
                        <button className="button">Reset</button>
                    </form>
                )
            }}
        />
    )
}