import { render, screen } from '@testing-library/react';
import ItemListContainer from "./ItemListContainer.js";

test('ItemListContainer to contain greeting text', () => {
    const greeting = "test greeting";
    render(<ItemListContainer greeting={greeting} />);
    const cart = screen.getByText(greeting);
    expect(cart).toBeInTheDocument();
});
