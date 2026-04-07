import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import AuthLayout from "./components/templates/AuthLayout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
