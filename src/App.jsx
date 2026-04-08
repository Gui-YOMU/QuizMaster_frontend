import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import AuthLayout from "./components/templates/AuthLayout.jsx";
import MainLayout from "./components/templates/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
