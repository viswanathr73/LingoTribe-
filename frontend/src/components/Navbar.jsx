import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, Webhook, Menu, ArrowLeft } from "lucide-react";
import ThemeSelector from "./ThemeSelector.jsx";
import useLogout from "../hooks/useLogout";

const Navbar = ({ toggleSidebar }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const navigate = useNavigate();
  const isChatPage = location.pathname?.startsWith("/chat");
  const isNotificationsPage = location.pathname === "/notifications";
  const isCommunitiesPage = location.pathname === "/communities";

  const { logoutMutation } = useLogout();

  // Determine if back button should be shown and where it navigates
  const showBackButton = isChatPage || isNotificationsPage || isCommunitiesPage;
  const backButtonPath = isChatPage ? "/friends" : "/";

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {/* Conditional Button: Back Arrow or Hamburger */}
            {showBackButton ? (
              <button
                className="btn btn-ghost btn-circle lg:hidden"
                onClick={() => navigate(backButtonPath)}
              >
                <ArrowLeft className="h-6 w-6 text-base-content opacity-70" />
              </button>
            ) : (
              <button
                className="btn btn-ghost btn-circle lg:hidden"
                onClick={toggleSidebar}
              >
                <Menu className="h-6 w-6 text-base-content opacity-70" />
              </button>
            )}
            {/* LOGO - ONLY IN THE CHAT PAGE */}
            {isChatPage && (
              <div className="pl-5">
                <Link to="/" className="flex items-center gap-2.5">
                  <Webhook className="size-9 text-primary" />
                  <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                    LingoTribe
                  </span>
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
            <ThemeSelector />
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img
                  src={authUser?.profilePic}
                  alt="User Avatar"
                  rel="noreferrer"
                />
              </div>
            </div>
            <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
              <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
