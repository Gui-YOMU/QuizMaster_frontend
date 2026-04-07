import UserHeader from "../organisms/UserHeader.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <body className="w-dvw h-dvh flex flex-col">
      <UserHeader />
      <main>
        <Outlet />
      </main>
    </body>
  );
}
