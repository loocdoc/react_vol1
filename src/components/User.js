import PropTypes, { string } from "prop-types";
import { logGroup } from "../helpers/logger";
import { formatUser, currentUser1 } from "../helpers/user";
import { User as UserModel } from "../models/user.model"


// const currentUser = {
//     firstName: "John",
//     lastName: "Doe",
// };


export const User = ({ user, title, bio }) => {
    logGroup(
        {
            user,
            title,
            bio,
        },
        "USER COMPONENT"
    );
    // console.group("USER COMPONENT")
    // console.log(user)
    // console.groupEnd()
    return (
        <>
            <div className="columns">
                <div className="column">
                    {title && <h1 className="title">{title}</h1>}
                    <h2 className="has-text-success">User Component - {formatUser(user)}</h2>
                    <p hidden={!bio}>{user.bio}</p>
                    <h2 className="has-text-success">User Component - {formatUser(currentUser1)}</h2>
                </div>
            </div >
        </>
    );
};


// User.defaultProps = {
//     user: { firstName: "Missing content", lastName: "Missing content" },
// };

User.defaultProps = {
    user: new UserModel("Missing firstName", "Missing content"),
    bio: false,

};

User.propTypes = {
    title: PropTypes.string.isRequired,
    bio: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
};