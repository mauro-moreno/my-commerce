import {render, screen} from "@testing-library/react";
import * as CartContext from "../context/CartContext";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

const item = {
    id: 1,
    title: "Title test",
    price: 1000,
    pictureUrl: "https://via.placeholder.com/400x300"
};

test("CartItem renders item data", () => {
    const quantity = 2;
    const subtotal = 2000;
    render(
        <table>
            <tbody>
            <CartItem item={item} quantity={quantity} subtotal={subtotal}/>
            </tbody>
        </table>
    );
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(quantity)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    expect(screen.getByText(`$${subtotal}`)).toBeInTheDocument();
});

test("CartItem can remove an item from context", () => {
    const removeItem = jest.fn();
    jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                removeItem
            }
        });
    const quantity = 2;
    const subtotal = 2000;
    render(
        <table>
            <tbody>
            <CartItem item={item} quantity={quantity} subtotal={subtotal}/>
            </tbody>
        </table>
    );
    expect(screen.getByText("X")).toBeInTheDocument();
    userEvent.click(screen.getByText("X"));
    expect(removeItem).toBeCalledWith(1);
});

test("CartItem cannot be modified if there is an order", () => {
    jest
        .spyOn(CartContext, "useCartContext")
        .mockImplementation(() => {
            return {
                order: 1
            }
        });
    const quantity = 2;
    const subtotal = 2000;
    render(
        <table>
            <tbody>
            <CartItem item={item} quantity={quantity} subtotal={subtotal}/>
            </tbody>
        </table>
    );
    expect(screen.queryByText("X")).not.toBeInTheDocument();
});
