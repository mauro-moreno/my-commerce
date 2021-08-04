import { render, screen } from '@testing-library/react';
import Item from "./Item.js";

test('Item renders item data', () => {
    const item = {
        title: "Title test",
        description: "Description test",
        price: 1000,
        pictureUrl: "https://via.placeholder.com/400x300"
    };
    render(<Item item={item} />);
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', item.pictureUrl);
    expect(screen.getByRole('img')).toHaveAttribute('alt', item.title);
});
