import {render, screen} from "@testing-library/react";
import App from "./App";

jest.mock("./context/AppContext", () => {
    return {
        __esModule: true,
        default: ({children}) => {
            return (
                <div>{children}</div>
            )
        }
    }
});
jest.mock("./components/NavBar", () => {
    return {
        __esModule: true,
        default: () => {
            return (
                <div>NavBar</div>
            )
        }
    }
});

test("Copyright is present in the App", async () => {
    render(<App/>);
    expect(screen.getByText(/Copyright 2021/i)).toBeInTheDocument();
});
