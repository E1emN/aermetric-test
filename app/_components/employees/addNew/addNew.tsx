"use client"
import { useFormik } from "formik"
import { Popover } from "../../popover/popover"
import { Employee, useAddEmployeeMutation } from "@/app/_store/employees/api"
import { DEPARTMENTS, POSITIONS } from "@/app/_constants"
import { FormEvent } from "react"

export const AddNew = () => {

    const [addEmployee] = useAddEmployeeMutation()

    const formik = useFormik<Omit<Employee, 'id'>>({
        initialValues: {
            name: '',
            email: '',
            age: '',
            position: 'Designer',
            department: 'Design'
        },
        onSubmit: values => {
            addEmployee(values)
            formik.resetForm()
        }
    })

    return (
        <Popover
            buttonName="Add new"
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
                        <button className="button" type="submit">Add</button>
                    </form>
                )
            }}
        />
    )
}