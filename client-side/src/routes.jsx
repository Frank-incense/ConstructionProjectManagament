import App from "./App";
import AddOrder from "./pages/AddOrder";
import OrderDashboard from "./pages/Dashboard";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/orderDashboard",
        element: <OrderDashboard />,
    },
    {
        path: "/addOrder",
        element: <AddOrder />,
    },
]

export default routes;