import { http, HttpResponse } from "msw";
import mocks from "./moks.json";
import { BASE_URL } from "@/app/_constants";
import { setupServer } from "msw/node";
import { Employee } from "../_store/employees/api";

let employeesMocks = mocks.employees;

export const handlers = [
    http.get(BASE_URL + 'employees', () =>
        HttpResponse.json(employeesMocks)
    ),
    http.delete(BASE_URL + 'employees/:id', ({ params }) => {
            const { id } = params
            employeesMocks = employeesMocks.filter(e => e.id !== id)
        }
    ),
    http.put<any, Employee>(BASE_URL + 'employees/:id', async ({ params, request }) => {
        const req = await request.json()
        const { id } = params
        employeesMocks = employeesMocks.map(e => {
            if (e.id === id) {
                return {
                    ...e,
                    ...req
                }
            }
            return e
        })
    }),
    http.post<any, Employee>(BASE_URL + 'employees', async ({ request }) => {
        const req = await request.json()
        employeesMocks.push(req)
    })
];

export const server = setupServer(...handlers);