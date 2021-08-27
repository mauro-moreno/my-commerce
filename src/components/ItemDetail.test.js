import {render, screen, waitFor} from "@testing-library/react";
import ItemDetail from "./ItemDetail.js";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import * as CartContext from "../context/CartContext";

const item = {
    title: "Title test",
    description: "Description test",
    price: 1000,
    pictureUrl: "https://via.placeholder.com/400x300",
    stock: 3,
    initial: 1
};

jest.mock("./ItemCount", () => {
    return {
        __esModule: true,
        default: ({stock, initial, onAdd}) => {
            const testFunction = () => {
                onAdd(2)
            };

            return (
                <div>
                    <button onClick={testFunction}>Click onAdd</button>
                    <p>Stock: {stock}</p>
                    <p>Initial: {initial}</p>
                </div>
            )
        }
    }
});

test("ItemDetail renders item data", () => {
    jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items: [],
                isInCart: () => false
            }
        });
    render(<ItemDetail item={item}/>);
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", item.pictureUrl);
    expect(screen.getByRole("img")).toHaveAttribute("alt", item.title);
});

test("ItemDetail can add item to cart", async () => {
    const addItem = jest.fn();
    const spy = jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items: [],
                isInCart: () => false,
                addItem
            }
        });
    render(
        <MemoryRouter>
            <ItemDetail item={item}/>
        </MemoryRouter>
    );
    expect(spy).toHaveBeenCalled();
    expect(screen.getByText(`Stock: ${item.stock}`)).toBeInTheDocument();
    expect(screen.getByText(`Initial: ${item.initial}`)).toBeInTheDocument();
    userEvent.click(screen.getByText("Click onAdd"));

    await waitFor(() => {
        expect(screen.queryByText(`Stock: ${item.stock}`)).not.toBeInTheDocument();
        expect(screen.queryByText(`Initial: ${item.initial}`)).not.toBeInTheDocument();
        expect(screen.getByText("Terminar la compra")).toBeInTheDocument();
        expect(screen.getByText("Cantidad: 2")).toBeInTheDocument();
    });

    userEvent.click(screen.getByText("Terminar la compra"));
    await waitFor(() => {
        expect(addItem).toHaveBeenCalledWith(item, 2);
    })
});

test("ItemDetail cannot add item already in cart", async () => {
    const spy = jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                items: [item],
                isInCart: () => true
            }
        });
    render(
        <MemoryRouter>
            <ItemDetail item={item}/>
        </MemoryRouter>
    );
    expect(spy).toHaveBeenCalled();
    expect(screen.getByText("Producto ya agregado en el carrito")).toBeInTheDocument();
    expect(screen.queryByText("Click onAdd")).not.toBeInTheDocument();
});
