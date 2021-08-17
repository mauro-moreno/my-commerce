import {render, screen, waitFor, within} from "@testing-library/react";
import Cart from "./Cart";
import * as CartContext from "../context/CartContext";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

test('Cart shows message when no item is in cart', () => {
    const spy = jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {items: []}
        });
    render(
        <MemoryRouter>
            <Cart />
        </MemoryRouter>
    );
    expect(spy).toHaveBeenCalled();
    expect(screen.getByText("No hay items en el carrito")).toBeInTheDocument();
    expect(screen.getByText("Volver")).toBeInTheDocument();
    expect(screen.getByText("Volver")).toHaveAttribute("href", "/");
    expect(screen.queryAllByRole("row")).toHaveLength(0);
});

test('Cart shows items in table', () => {
    const items = [
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
                title: "Item 2",
                price: 5
            },
            quantity: 3
        }
    ];
    const spy = jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {items}
        });
    render(<Cart />);
    expect(spy).toHaveBeenCalled();
    expect(screen.getByText("Carrito")).toBeInTheDocument();
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
    rows.filter((item, index) => {
        return index > 0 && index < 3;
    }).forEach((item, index) => {
        const {getByText} = within(item);
        expect(getByText(items[index].item.title)).toBeInTheDocument();
        expect(getByText(items[index].quantity)).toBeInTheDocument();
        expect(getByText(`$${items[index].item.price}`)).toBeInTheDocument();
        expect(getByText(`$${items[index].item.price * items[index].quantity}`)).toBeInTheDocument();
    });
});

test('Cart can be cleared', async () => {
    const items = [
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
                title: "Item 2",
                price: 5
            },
            quantity: 3
        }
    ];
    const clear = jest.fn();
    jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {
                items,
                clear
            }
        });
    render(<Cart />);
    expect(screen.getByText("Limpiar carrito")).toBeInTheDocument();
    userEvent.click(screen.getByText("Limpiar carrito"));
    await waitFor(() => {
        expect(clear).toHaveBeenCalled();
    });
});

test('Cart item can be removed', async () => {
    const items = [
        {
            item: {
                id: 1,
                title: "Item 1",
                price: 10
            },
            quantity: 2
        }
    ];
    const removeItem = jest.fn();
    jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {
                items,
                removeItem
            }
        });
    render(<Cart />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3);
    const {getByText} = within(rows[1]);
    expect(getByText("X")).toBeInTheDocument();
    userEvent.click(getByText("X"));
    await waitFor(() => {
        expect(removeItem).toHaveBeenCalledWith(1);
    });
});

