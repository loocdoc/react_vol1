import { Counter } from "../counter";
import { UserList } from "../Userlist/Userlist";
// import { dummyData } from '../../helpers/user';
// import { User } from '../User';


const values = [200, 300,];

export function Content() {
    return (
        <div className="columns my-5">
            {values.map((number) => {
                return <Counter initialValue={number} kay={`number-${number}`} />;
            })};

            <hr />
            {/* <div className="column">
                {dummyData.map(user => {
                    return <User user={user} />
                })}

            </div> */}
            <UserList />
        </div>
    );
}