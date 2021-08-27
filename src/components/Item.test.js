import { render, screen } from "@testing-library/react";
import Item from "./Item.js";
import {MemoryRouter} from "react-router-dom";

test("Item renders item data", () => {
    const item = {
        title: "Title test",
        description: "Description test",
        price: 1000,
        pictureUrl: "https://via.placeholder.com/400x300"
    };
    render(
        <MemoryRouter>
            <Item item={item} />
        </MemoryRouter>
    );
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", item.pictureUrl);
    expect(screen.getByRole("img")).toHaveAttribute("alt", item.title);
});
