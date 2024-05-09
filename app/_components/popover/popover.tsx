"use client"
import "./popover.scss"
import { ButtonHTMLAttributes, ReactNode, useRef, useState } from "react"
import { useOnClickOutside } from "@/app/_hooks/useOnClickOutside"

type Popover = {
    buttonName: string,
    renderBody: (close: () => void) => ReactNode,
    bodySide?: 'left' | 'right',
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Popover: React.FC<Popover> = ({ buttonName, renderBody, className, bodySide = "left", ...props }) => {

    const ref = useRef(null)
    const [isOpen, setOpen] = useState(false)
    useOnClickOutside(ref, () => setOpen(false))

    return(
        <div className={`popover ${className ? className : ''}`}>
            <button 
                className="popover__button button" 
                onClick={() => setOpen(!isOpen)}
                {...props}
            >
                {buttonName}
            </button>
            {
                isOpen &&
                <div 
                    className={`popover__window popover__window_${bodySide}`} 
                    ref={ref}
                    data-testid="popover-window"
                >
                    {
                        renderBody(() => setOpen(false))
                    }
                </div>
            }
        </div>
    )
}