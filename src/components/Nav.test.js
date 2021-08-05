import { render, screen } from '@testing-library/react';
import Nav from "./Nav.js";
import {MemoryRouter} from "react-router-dom";

test('Nav has two categories', () => {
    render(
        <MemoryRouter>
            <Nav />
        </MemoryRouter>
    );
    expect(screen.getByText("Categoria 1")).toBeInTheDocument();
    expect(screen.getByText("Categoria 2")).toBeInTheDocument();
});
