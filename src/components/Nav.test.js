import { render, screen } from '@testing-library/react';
import Nav from "./Nav.js";

test('Nav has two categories', () => {
    render(<Nav />);
    expect(screen.getByText("Categoria 1")).toBeInTheDocument();
    expect(screen.getByText("Categoria 2")).toBeInTheDocument();
});
