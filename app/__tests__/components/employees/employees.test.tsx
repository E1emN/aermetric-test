import { fireEvent, render, waitFor, within } from "@testing-library/react";
import StoreProvider from "@/app/_store/storeProvider";
import { server } from "@/app/_mocks/server";
import { Employees } from "@/app/_components/employees/employees";
import "@testing-library/jest-dom"

describe("Employees", () => {
    beforeAll(() => {
        server.listen();
    });
      
    afterEach(() => {
        server.resetHandlers();
    });
      
    afterAll(() => {
        server.close();
    });

    
    it("should get all employees", async () => {
        const { getAllByTestId } = render(
            <StoreProvider>
                <Employees />
            </StoreProvider>
        )
        await waitFor(() => expect(getAllByTestId("employee").length).toBe(13))
    }) 

    it("should delete employee with confirmation and update employees", async () => {
        const { getAllByTestId, queryAllByTestId } = render(
            <StoreProvider>
                <Employees />
            </StoreProvider>
        )
        await waitFor(() => expect(getAllByTestId("employee").length).toBe(13))

        const firstEmployee = within(queryAllByTestId("employee")[0])
        fireEvent.click(firstEmployee.getByTestId("delete-employee"))
        expect(firstEmployee.getByText("Are you sure you want to delete?")).toBeInTheDocument()
        fireEvent.click(firstEmployee.getByTestId("delete-employee-yes"))
        await waitFor(() => expect(getAllByTestId("employee").length).toBe(12))
    }) 

    it("should edit employee and update employees", async () => {
        const { getAllByTestId, queryAllByTestId } = render(
            <StoreProvider>
                <Employees />
            </StoreProvider>
        )
        await waitFor(() => expect(getAllByTestId("employee").length).toBe(12))

        const firstEmployee = within(queryAllByTestId("employee")[0])
        fireEvent.click(firstEmployee.getByTestId("edit-employee"))

        fireEvent.change(firstEmployee.getByTestId("edit-employee-name"), { target: { value: "test name" } })
        fireEvent.click(firstEmployee.getByTestId("edit-employee-submit"))

        await waitFor(() => expect(firstEmployee.getByText("test name")).toBeInTheDocument())
    }) 

    it("should add new employee and update employees", async () => {
        const { getAllByTestId, getByTestId } = render(
            <StoreProvider>
                <Employees />
            </StoreProvider>
        )
        await waitFor(() => expect(getAllByTestId("employee").length).toBe(12))

        fireEvent.click(getByTestId("add-employee"))

        fireEvent.change(getByTestId("add-employee-name"), { target: { value: "test name" } })
        fireEvent.change(getByTestId("add-employee-email"), { target: { value: "test@test.com" } })
        fireEvent.change(getByTestId("add-employee-age"), { target: { value: "21" } })
        fireEvent.click(getByTestId("add-employee-submit"))

        await waitFor(() => expect(getAllByTestId("employee").length).toBe(13))
    }) 
})