import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('Copyright is present in the App', async () => {
    render(<App/>);
    await waitFor(() => {
        expect(screen.getByText(/Copyright 2021/i)).toBeInTheDocument();
    })
});
