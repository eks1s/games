import { Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {
    return (
        <div className="layoutWrapper">
            <Outlet />
        </div>
    );
}

export default Layout;
