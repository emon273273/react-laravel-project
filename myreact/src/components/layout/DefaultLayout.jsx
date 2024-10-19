import React, { useContext } from "react";

import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
// Make sure this path is correct

const DefaultLayout = () => {
    const { token, user } = useStateContext();
    console.log(token);
    if (!token) {
        return <Navigate to={"/login"} />;
    }

    const onLogout = (ev) => {
        ev.preventDefault();
    };

    return (
        <div id="defaultLayout">
            <aside>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/user"}>Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name}
                        <a onClick={onLogout} className="btn-logout" href="#">
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
