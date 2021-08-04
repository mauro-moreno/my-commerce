import {fireEvent, render, screen} from '@testing-library/react';
import ItemCount from "./ItemCount.js";

test('ItemCount shows counter and has control buttons', () => {
    render(<ItemCount />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("Agregar")).toBeInTheDocument();
});

test('ItemCount control buttons increment and decrement the counter', () => {
    render(<ItemCount />);
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("3")).toBeInTheDocument();
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("2")).toBeInTheDocument();
});

test('ItemCount has minimum initial value and maximum stock value', () => {
    render(<ItemCount stock={3} initial={2} />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("3")).toBeInTheDocument();
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("3")).toBeInTheDocument();
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("2")).toBeInTheDocument();
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("2")).toBeInTheDocument();
});

test('ItemCount onAdd is called with initial after click', () => {
    const initial = 2;
    const onAddMock = jest.fn();
    render(<ItemCount onAdd={onAddMock} initial={initial} />);
    fireEvent.click(screen.getByText("Agregar"));
    expect(onAddMock).toHaveBeenCalledWith(initial);
});
