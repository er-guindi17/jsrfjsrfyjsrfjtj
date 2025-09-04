import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
    </div>
   <Analytics/>
  );
};

export default App;
