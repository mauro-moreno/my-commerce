import {render, screen} from "@testing-library/react";
import Cart from "./Cart";

test('Cart can be rendered', () => {
    render(<Cart />);
    expect(screen.getByText("Cart")).toBeInTheDocument();
});
