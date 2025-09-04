import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Analytics } from "@vercel/analytics/react"; // 👈 importa analytics

const App = () => {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />

      {/* 👇 aquí va el componente de analíticas */}
      <Analytics />
    </div>
  );
};

export default App;
