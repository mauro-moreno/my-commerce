import { render, screen } from "@testing-library/react";
import User from "./User";

test("User renders user data", () => {
    const user = {
        name: "John Doe",
        email: "jhn@doe.com",
        phone: "1234567890"
    };
    render(
        <User user={user} />
    );
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.phone)).toBeInTheDocument();
});
