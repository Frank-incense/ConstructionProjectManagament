import App from "./App";
import AddOrder from "./pages/AddOrder";
import OrderDashboard from "./pages/Dashboard";
import Safety from "./pages/Safety";

const routes = [
  {
    path: "/",
    element: <App />,  // App is now the layout
    children: [
      { path: "orderDashboard", element: <OrderDashboard /> },
      { path: "addOrder", element: <AddOrder /> },
      { path: "safety", element: <Safety /> },
    ]
  },
];

export default routes;
