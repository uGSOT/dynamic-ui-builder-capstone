import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0f]">
      <AppHeader />
      <main className="flex-1 pt-14">
        <Outlet />
      </main>
    </div>
  );
}