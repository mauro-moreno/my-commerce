import {render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import getItems from "../services/getItems";
import ItemList from "./ItemList.js";

jest.mock("../services/getItems");
jest.mock("./Item", () => {
    return {
        __esModule: true,
        default: ({item}) => {
            return (
                <p>{item.id} {item.title}</p>
            )
        }
    }
});

test('ItemList renders items from promise', async () => {
    const items = [
        {
            id: 1,
            title: "Title test",
            description: "Description test",
            price: 1000,
            pictureUrl: "https://via.placeholder.com/400x300"
        },
        {
            id: 2,
            title: "Title test 2",
            description: "Description test 2",
            price: 2000,
            pictureUrl: "https://via.placeholder.com/400x300"
        },
    ];
    getItems.mockResolvedValue(items);
    render(
        <MemoryRouter>
            <ItemList/>
        </MemoryRouter>
    );

    expect(screen.getByText("Cargando")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(`${items[0].id} ${items[0].title}`)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(`${items[1].id} ${items[1].title}`)).toBeInTheDocument());
});

test('ItemList is shown by category', async () => {
    const items = [
        {
            id: 1,
            title: "Title test",
            description: "Description test",
            price: 1000,
            pictureUrl: "https://via.placeholder.com/400x300"
        },
        {
            id: 2,
            title: "Title test 2",
            description: "Description test 2",
            price: 2000,
            pictureUrl: "https://via.placeholder.com/400x300"
        },
    ];
    getItems.mockResolvedValue(items);
    render(
        <MemoryRouter>
            <ItemList/>
        </MemoryRouter>
    );

    expect(screen.getByText("Cargando")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(`${items[0].id} ${items[0].title}`)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(`${items[1].id} ${items[1].title}`)).toBeInTheDocument());
});
