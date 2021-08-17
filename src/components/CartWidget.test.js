import {render, screen} from '@testing-library/react';
import CartWidget from "./CartWidget.js";
import * as CartContext from "../context/CartContext";
import {MemoryRouter} from "react-router-dom";

test('CartWidget is not shown when there is no item in context', () => {
    const spy = jest
        .spyOn(CartContext, 'useCartContext')
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

test('CartWidget have an icon and shows quantity when there is item in context', () => {
    const spy = jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {
                items: [
                    {
                        item: {
                            id: 1,
                            title: "Item 1",
                            price: 10
                        },
                        quantity: 2
                    },
                    {
                        item: {
                            id: 2,
                            title: "Item 1",
                            price: 5
                        },
                        quantity: 3
                    }
                ]
            }
        })
    render(
        <MemoryRouter>
            <CartWidget/>
        </MemoryRouter>
    );
    expect(spy).toBeCalled();
    expect(screen.getByText("cart")).toBeInTheDocument();
    expect(screen.getByText("(5)")).toBeInTheDocument();
    expect(screen.getByText("(5)")).toHaveAttribute("href", "/cart");
});
