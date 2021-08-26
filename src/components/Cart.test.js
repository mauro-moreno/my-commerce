import {render, screen, waitFor, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import * as CartContext from "../context/CartContext";
import Cart from "./Cart";

jest.mock("./CartItem", () => {
    return {
        __esModule: true,
        default: ({item}) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
            )
        }
    }
});

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
            quantity: 2,
            subtotal: 20
        },
        {
            item: {
                id: 2,
                title: "Item 2",
                price: 5
            },
            quantity: 3,
            subtotal: 15
        }
    ];
    const spy = jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {
                items,
                getTotal: jest.fn()
            }
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
        expect(getByText(items[index].item.id)).toBeInTheDocument();
        expect(getByText(items[index].item.title)).toBeInTheDocument();
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
            quantity: 2,
            subtotal: 20
        },
        {
            item: {
                id: 2,
                title: "Item 2",
                price: 5
            },
            quantity: 3,
            subtotal: 15
        }
    ];
    const clear = jest.fn();
    const getTotal = jest.fn();
    jest
        .spyOn(CartContext, 'useCartContext')
        .mockImplementation(() => {
            return {
                items,
                clear,
                getTotal
            }
        });
    render(<Cart />);
    expect(screen.getByText("Limpiar carrito")).toBeInTheDocument();
    userEvent.click(screen.getByText("Limpiar carrito"));
    await waitFor(() => {
        expect(clear).toHaveBeenCalled();
    });
});
