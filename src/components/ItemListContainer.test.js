import { render, screen } from "@testing-library/react";
import {MemoryRouter, Route} from "react-router-dom";
import * as CategoriesContext from "../context/CategoriesContext";
import ItemListContainer from "./ItemListContainer.js";

jest.mock("./ItemList", () => {
    return {
        __esModule: true,
        default: () => {
            return (
                <span>Item list</span>
            )
        }
    }
});

test("ItemListContainer to contain greeting text", () => {
    const greeting = "test greeting";
    render(
        <MemoryRouter>
            <ItemListContainer greeting={greeting} />
        </MemoryRouter>
    );
    const cart = screen.getByText(greeting);
    expect(cart).toBeInTheDocument();
    expect(screen.getByText("Item list")).toBeInTheDocument();
});

test("ItemListContainer shows category title when defined", () => {
    const categories = [{
        id: 1,
        name: "Category 1"
    }, {
        id: 2,
        name: "Category 2"
    }];
    const getCategory = jest.fn().mockImplementation(() => categories[0]);
    const spy = jest
        .spyOn(CategoriesContext, "useCategoriesContext")
        .mockImplementation(() => {
            return {
                categories,
                getCategory
            }
        });
    render(
        <MemoryRouter initialEntries={["/category/1"]}>
            <Route path="/category/:categoryId">
                <ItemListContainer />
            </Route>
        </MemoryRouter>
    );
    expect(spy).toBeCalled();
    expect(getCategory).toBeCalledWith("1");
    expect(screen.getByText("Category 1")).toBeInTheDocument()
});
