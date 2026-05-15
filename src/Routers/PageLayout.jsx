import { Outlet } from "react-router-dom";
import { Header, Logo, ThemeSwitcher } from "../Components";

export function PageLayout() {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header>
        <Logo />
        <ThemeSwitcher />
      </Header>
      <div className="container mx-auto px-5 md:px-0">
        <Outlet />
      </div>
    </div>
  );
}
