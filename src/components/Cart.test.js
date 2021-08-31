import {render, screen, waitFor, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import * as CartContext from "../context/CartContext";
import * as UserContext from "../context/UserContext";
import Cart from "./Cart";

jest.mock("../services/getUser",)
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
jest.mock("./User", () => {
    return {
        __esModule: true,
        default: () => {
            return (
                <h1>User</h1>
            )
        }
    }
});

test("Cart shows message when no item is in cart", async () => {
    const spy = jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items: [],
                getUser: jest.fn()
            }
        });
    render(
        <MemoryRouter>
            <Cart/>
        </MemoryRouter>
    );

    expect(spy).toHaveBeenCalled();
    expect(screen.getByText("No hay items en el carrito")).toBeInTheDocument();
    expect(screen.getByText("Volver")).toBeInTheDocument();
    expect(screen.getByText("Volver")).toHaveAttribute("href", "/");
    expect(screen.queryAllByRole("row")).toHaveLength(0);
});

test("Cart shows items in table", async () => {
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
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items,
                getTotal: jest.fn(),
                getUser: jest.fn()
            }
        });
    render(<Cart/>);

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

test("Cart can be checkout", async () => {
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
    const checkout = jest.fn();
    const getTotal = jest.fn();
    const user = {
        name: "John Doe",
        email: "jhn@doe.com",
        phone: "1234567890"
    };
    jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items,
                checkout,
                getTotal
            }
        });
    jest
        .spyOn(UserContext, "useUserContext")
        .mockImplementation(() => {
            return {
                user
            }
        });
    render(<Cart/>);

    expect(screen.getByText("Finalizar compra")).toBeInTheDocument();
    userEvent.click(screen.getByText("Finalizar compra"));

    await waitFor(() => {
        expect(checkout).toHaveBeenCalledWith(user);
    });
});


test("Cart can be cleared", async () => {
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
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items,
                clear,
                getTotal
            }
        });
    jest
        .spyOn(UserContext, "useUserContext")
        .mockImplementation(() => {
            return {
                user: {}
            }
        });
    render(<Cart/>);

    expect(screen.getByText("Limpiar carrito")).toBeInTheDocument();
    userEvent.click(screen.getByText("Limpiar carrito"));

    await waitFor(() => {
        expect(clear).toHaveBeenCalled();
    });
});

test("Cart cannot be modified with order", async () => {
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
    const getTotal = jest.fn();
    jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                order: 1,
                items,
                getTotal
            }
        });
    jest
        .spyOn(UserContext, "useUserContext")
        .mockImplementation(() => {
            return {
                user: {}
            }
        });
    render(<Cart/>);

    expect(screen.queryByText("Limpiar carrito")).not.toBeInTheDocument();
    expect(screen.queryByText("Finalizar compra")).not.toBeInTheDocument();
});
