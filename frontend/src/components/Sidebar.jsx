import React from "react";
import { Link, useLocation } from "react-router";
import { Webhook, BellIcon, HomeIcon, UsersIcon, Users, X } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";

const Sidebar = ({ isOpen, toggleSidebar, showSidebar }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-base-200 border-r border-base-300 flex-col h-screen z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${showSidebar ? "lg:flex lg:sticky lg:top-0 lg:transform-none" : "hidden lg:hidden"}`}
    >
      <div className="p-5 border-b border-base-300 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <Webhook className="size-9 text-primary" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
            LingoTribe
          </span>
        </Link>
        {isOpen && (
          <button className="lg:hidden btn btn-ghost btn-circle" onClick={toggleSidebar}>
            <X className="size-6" />
          </button>
        )}
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link
          to="/"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/" ? "btn-active" : ""
          }`}
          onClick={() => isOpen && toggleSidebar()}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Home</span>
        </Link>
        <Link
          to="/friends"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/friends" ? "btn-active" : ""
          }`}
          onClick={() => isOpen && toggleSidebar()}
        >
          <UsersIcon className="size-5 text-base-content opacity-70" />
          <span>Friends</span>
        </Link>
        <Link
          to="/notifications"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/notifications" ? "btn-active" : ""
          }`}
          onClick={() => isOpen && toggleSidebar()}
        >
          <BellIcon className="size-5 text-base-content opacity-70" />
          <span>Notifications</span>
        </Link>
        <Link
          to="/communities"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/communities" ? "btn-active" : ""
          }`}
          onClick={() => isOpen && toggleSidebar()}
        >
          <Users className="size-5 text-base-content opacity-70" />
          <span>Community</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-base-300 mt-auto">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{authUser?.fullName}</p>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="size-2 rounded-full bg-success inline-block" />
              Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;