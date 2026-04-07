import Header from "../organisms/Header.jsx";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="w-dvw h-dvh flex flex-col">
      <Header />
      <main className="w-full h-full flex flex-col justify-center items-center gap-6">
        <Outlet />
      </main>
    </div>
  );
}