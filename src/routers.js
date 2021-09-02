import React from "react";
import Login from "./components/layouts/login";
import SignUp from "./components/layouts/signup";

const routes = [
    {
        path: "/login",
        exact: false,
        component: ({history}) => <Login history={history}/>,
    },
    {
        path: "/signup",
        exact: false,
        component: ({history}) => <SignUp history={history}/>,
    },
];

export default routes;