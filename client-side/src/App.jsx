import Header from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
