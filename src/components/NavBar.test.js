import { render, screen } from '@testing-library/react';
import NavBar from "./NavBar.js";

test('NavBar has logo that links to home', () => {
    render(<NavBar />);
    const logo = screen.getByText("My Commerce");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
});
