import App from "./App";
import WorkOrders from "./pages/WorkOrders";
import AddOrder from "./pages/AddOrder";
import OrderDashboard from "./pages/Dashboard";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/workorders",
        element: <WorkOrders />,
    },{
        path: "/orderDashboard",
        element: <OrderDashboard />,
    },
    {
        path: "/addOrder",
        element: <AddOrder />,
    },
]

export default routes;