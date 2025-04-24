import App from "./App";
import WorkOrders from "./pages/WorkOrders";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/workorders",
        element: <WorkOrders />,
    },
]

export default routes;