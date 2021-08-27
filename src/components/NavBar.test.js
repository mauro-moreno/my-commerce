import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar.js";
import {MemoryRouter} from "react-router-dom";

jest.mock("./CartWidget", () => {
    return {
        __esModule: true,
        default: () => {
            return (
                <span>Cart Widget</span>
            )
        }
    }
});

jest.mock("./Nav", () => {
    return {
        __esModule: true,
        default: () => {
            return (
                <span>Navigation</span>
            )
        }
    }
});

test("NavBar has logo that links to home", () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    const logo = screen.getByText("My Commerce");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
});
