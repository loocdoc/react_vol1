import { formatUser } from "../helpers/user";


const currentUser = {
    firstName: "John",
    lastName: "Doe",
};


export const User = () => {
    return (
        <>
            <div className="columns">
                <div className="column">
                    <h2 className="has-text-success">User Component - {formatUser(currentUser)}</h2>
                </div>
            </div >
        </>
    );
};
