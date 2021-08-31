import { render, screen } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import * as CategoriesContext from "../context/CategoriesContext";
import Nav from "./Nav.js";

test("Nav has two categories", () => {
    const spy = jest
        .spyOn(CategoriesContext, "useCategoriesContext")
        .mockImplementation(() => {
            return {
                categories: [
                    {
                        id: 1,
                        name: "Categoria 1",
                    },
                    {
                        id: 2,
                        name: "Categoria 2",
                    }
                ]
            }
        });
    render(
        <MemoryRouter>
            <Nav />
        </MemoryRouter>
    );
    expect(spy).toBeCalled()

    expect(screen.getByText("Categoria 1")).toBeInTheDocument();
    expect(screen.getByText("Categoria 2")).toBeInTheDocument();
});
