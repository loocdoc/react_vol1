import { User } from "./User";
import { dummyData } from '../../helpers/user';


export function UserList() {
    return (
        <div className="column">
            {dummyData.map(user => {
                return <User user={user} kay={user.firstName} title={`${user.firstName} ${user.lastName}`} />
            })}

        </div>
    )
};

