import Image from "next/image"
import "./employee.scss"
import { Edit } from "./edit/edit"
import { Delete } from "./delete/delete"

export const Employee = () => {
    return(
        <div className="employee">
            <div className="employee__info">
                <Image
                    src="/avatar.gif"
                    width={100}
                    height={100}
                    alt=""
                    className="employee__info-avatar"
                />
                <div className="employee__info-block">
                    <span className="employee__info-text"><strong>Name:</strong> Johnson Argen</span>
                    <span className="employee__info-text"><strong>Email:</strong> johnson@ke</span>
                    <span className="employee__info-text"><strong>Age:</strong> 22</span>
                    <span className="employee__info-text"><strong>Position:</strong> Kekoev</span>
                    <span className="employee__info-text"><strong>Department:</strong> Kekoev</span>
                </div>
            </div>
            <input className="employee__select" type="checkbox" />
            <div className="employee__actions">
                <Edit />
                <Delete />
            </div>
        </div>
    )
}