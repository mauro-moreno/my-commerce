import {Fragment} from "react";

const User = ({user: {name, email, phone}}) => {
    return (
        <Fragment>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </Fragment>
    );
};

export default User;