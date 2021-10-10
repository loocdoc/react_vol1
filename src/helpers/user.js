import { User } from "../models/user.model";

export const formatUser = (user) => `${user.firstName} ${user.lastName}`;
export const currentUser1 = new User("John", "Doe")
// {
//     firstName: "John",
//         lastName: "Doe",
// };


currentUser1.bio = "descritpion of bio"

export const dummyData = [
    new User("John", "Lock"),
    new User("James", "Dean"),
    new User("Jeff", "Doe"),
    new User("Jefry", "Smock"),
];