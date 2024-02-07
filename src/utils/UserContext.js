import { createContext } from "react";

const UserContext = createContext({
    Username: "Default",
});

export default UserContext;