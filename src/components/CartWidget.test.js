import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import * as CartContext from "../context/CartContext";
import CartWidget from "./CartWidget.js";

test("CartWidget is not shown when there is no item in context", () => {
    const spy = jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items: []
            }
        })
    render(<CartWidget/>);
    expect(spy).toBeCalled();
    expect(screen.queryByText("cart")).not.toBeInTheDocument();
    expect(screen.queryByText("(0)")).not.toBeInTheDocument();
});

test("CartWidget have an icon and shows quantity when there is item in context", () => {
    const getQuantity = jest.fn().mockImplementation(() => 5)
    const spy = jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items: [
                    {}
                ],
                getQuantity
            }
        })
    render(
        <MemoryRouter>
            <CartWidget/>
        </MemoryRouter>
    );
    expect(spy).toBeCalled();
    expect(getQuantity).toBeCalled();
    expect(screen.getByText("cart")).toBeInTheDocument();
    expect(screen.getByText("(5)")).toBeInTheDocument();
    expect(screen.getByText("(5)")).toHaveAttribute("href", "/cart");
});
