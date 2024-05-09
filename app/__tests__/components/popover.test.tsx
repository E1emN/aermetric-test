import { Popover } from "@/app/_components/popover/popover";
import { describe } from "node:test";
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Popover", () => {
  it("should open and close window", () => {
    const buttonName = "test button"
    const renderBody = jest.fn();
    const { queryByTestId, getByText } = render(
      <Popover 
        buttonName={buttonName}
        renderBody={renderBody}
      />
    )
    const button = getByText(buttonName)
    expect(queryByTestId("popover-window")).toBeNull()
    fireEvent.click(button)
    expect(queryByTestId("popover-window")).toBeInTheDocument()
  })

  it('should call renderBody function when popover window is rendered', () => {
    const buttonName = "test button"
    const renderBody = jest.fn();
    const { getByText } = render(
      <Popover 
        buttonName={buttonName}
        renderBody={renderBody} 
       />
    );
    const button = getByText(buttonName);
    fireEvent.click(button);
    expect(renderBody).toHaveBeenCalledTimes(1);
  })
})