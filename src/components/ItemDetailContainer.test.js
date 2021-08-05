import {render, screen, waitFor} from '@testing-library/react';
import ItemDetailContainer from "./ItemDetailContainer.js";
import getItem from "../services/getItem";
import {MemoryRouter} from "react-router-dom";

jest.mock("../services/getItem");
jest.mock("./ItemDetail", () => {
    return {
        __esModule: true,
        default: ({item}) => {
            return (
                <p>{item.id} {item.title}</p>
            )
        }
    }
});

test('ItemDetailContainer render an item from promise', async () => {
    const item = {
        id: 1,
        title: "Title test",
        description: "Description test",
        price: 1000,
        pictureUrl: "https://via.placeholder.com/400x300"
    };
    getItem.mockResolvedValue(item);
    render(
        <MemoryRouter>
            <ItemDetailContainer/>
        </MemoryRouter>
    );

    expect(screen.getByText("Cargando")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(`${item.id} ${item.title}`)).toBeInTheDocument());
});
