import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Layout } from "./Components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <Layout>
    <App />
  </Layout>
);
