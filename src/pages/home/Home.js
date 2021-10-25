import { Counter } from "../../components/counter";
import { UserList } from "../../components/Userlist";
// import { dummyData } from '../../helpers/user';
// import { User } from '../User';

// import { LoginForm } from "../forms/LoginForm";


const values = [200, 300,];

export function Home() {
    return (
        <div className="columns my-5">
            {values.map((number) => {
                return <Counter initialValue={number} kay={`number-${number}`} />;
            })};

            <UserList />
        </div>
    );
}