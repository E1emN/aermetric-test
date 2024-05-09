"use client"
import { Popover } from "@/app/_components/popover/popover"
import { DEPARTMENTS, POSITIONS } from "@/app/_constants"
import { Employee, useUpdateEmployeeMutation } from "@/app/_store/employees/api"
import { useFormik } from "formik"

export const Edit: React.FC<Employee> = ({ id, name, email, age, position, department }) => {

    const [updateEmployee] = useUpdateEmployeeMutation()

    const formik = useFormik<Employee>({
        initialValues: {
            id: id,
            name: name,
            email: email,
            age: age,
            position: position,
            department: department
        },
        onSubmit: values => {
            updateEmployee(values)
        }
    })

    return (
        <Popover
            buttonName="Edit"
            bodySide="right"
            data-testid="edit-employee"
            renderBody={(close) => {
                return (
                    <form className="form" onSubmit={e => { formik.handleSubmit(e); close() }}>
                        <label className="label">
                            Name
                            <input 
                                className="input"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                data-testid="edit-employee-name"
                                required
                             />
                        </label>
                        <label className="label">
                            Email
                            <input 
                                className="input"
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                             />
                        </label>
                        <label className="label">
                            Age
                            <input 
                                className="input"
                                id="age"
                                name="age"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                required
                             />
                        </label>
                        <label className="label">
                            Position
                            <select 
                                className="input"
                                id="position"
                                name="position"
                                value={formik.values.position}
                                onChange={formik.handleChange}
                                required
                            >
                                {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </label>
                        <label className="label">
                            Department
                            <select 
                                className="input"
                                id="department"
                                name="department"
                                value={formik.values.department}
                                onChange={formik.handleChange}
                            >
                                {DEPARTMENTS.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </label>
                        <button 
                            className="button" 
                            type="submit"
                            data-testid="edit-employee-submit"
                        >
                            Add
                        </button>
                    </form>
                )
            }}
        /
        >
    )
}