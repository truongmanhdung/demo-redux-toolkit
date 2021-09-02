
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Header from './components/layouts/header';
import routes from './routers'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const Example = (props) => {
  const showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            );
        });
    }
    return <Switch>{result}</Switch>;
};
  return (
    <div>
        <Header/>
        <ToastContainer/>
        <div>
         {showContent(routes)}
        </div>
    </div>
  );
};

export default Example;