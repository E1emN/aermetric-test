"use client"
import { useFormik } from "formik"
import { Popover } from "../../popover/popover"
import { EmployeeQueries, useGetAllEmployeesQuery } from "@/app/_store/employees/api"
import { DEPARTMENTS, POSITIONS } from "@/app/_constants"
import { useAppDispatch } from "@/app/_hooks/reduxHooks"
import { setEmployeesQueries } from "@/app/_store/employees/slice"

export const Filter = () => {

    const dispatch = useAppDispatch()

    const formik = useFormik<EmployeeQueries>({
        initialValues: {
            id: '',
            name: '',
            email: '',
            age: '',
            position: '',
            department: ''
        },
        onSubmit: values => {
            dispatch(setEmployeesQueries(values))
        }
    })

    return (
        <Popover
            buttonName="Filter"
            renderBody={(close) => {
                return (
                    <form className="form" onSubmit={e => { formik.handleSubmit(e); close() }}>
                        <label className="label">
                            Id
                            <input 
                                className="input"
                                id="id"
                                name="id"
                                value={formik.values.id}
                                onChange={formik.handleChange}
                             />
                        </label>
                        <label className="label">
                            Name
                            <input 
                                className="input"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
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
                            >
                                <option value=''>Any</option>
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
                                <option value=''>Any</option>
                                {DEPARTMENTS.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </label>
                        <button className="button" type="submit">Search</button>
                        <button className="button" type="button" onClick={formik.handleReset}>Reset</button>
                    </form>
                )
            }}
        />
    )
}