import { render, screen } from '@testing-library/react';
import CartWidget from "./CartWidget.js";

test('CartWidget have an icon', () => {
    render(<CartWidget />);
    const cart = screen.getByText("cart");
    expect(cart).toBeInTheDocument();
});
