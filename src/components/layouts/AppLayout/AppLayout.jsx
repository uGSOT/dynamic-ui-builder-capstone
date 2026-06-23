import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <AppHeader />

      <main className="flex-1 pt-14">
        <Outlet />
      </main>
    </div>
  );
}