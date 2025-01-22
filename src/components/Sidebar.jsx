import React from "react";
import profile from "../assets/profile.svg";
import helpIcon from "../assets/helpIcon.svg";
import { ListTodo, Calendar, Star, Map, Users, Plus } from "lucide-react";

export function Sidebar({ isOpen, isDarkMode }) {
  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0 overflow-hidden"
      } transition-all duration-300  fixed left-0 top-22 bottom-0 
    ${
      isDarkMode
        ? "bg-[#232323] border-[#232323]"
        : "bg-[#f7f9f6] border-[#f7f9f6]"
    } border-r shadow-lg`}
    >
      <div className="p-6 ">
        {/* Profile Section */}
        <div className="mb-8">
          <img
            src={profile}
            alt="Profile"
            className="size-32 rounded-full mb-2 absolute left-20 top-[-90px] z-10"
          />
          <h2
            className={`mt-6 ml-14 text-lg font-semibold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Hey, ABCD
          </h2>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
            ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <ListTodo className="w-5 h-5" />
            All Tasks
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg
            ${
              isDarkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-white text-gray-700"
            }`}
          >
            <Calendar className="w-5 h-5" />
            Today
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
            ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <Star className="w-5 h-5" />
            Important
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
            ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <Map className="w-5 h-5" />
            Planned
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
            ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <Users className="w-5 h-5" />
            Assigned to me
          </button>
        </nav>

        {/* Add List Button */}
        <button
          className={`w-full flex items-center gap-3 px-4 py-2 mt-4 rounded-lg transition-colors
          ${
            isDarkMode
              ? "text-gray-300 hover:bg-gray-700"
              : "text-gray-700 hover:bg-white"
          }`}
        >
          <Plus className="w-5 h-5" />
          Add list
        </button>

        {/* Stats */}
        <div
          className={`mt-8 p-4 rounded-lg ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span
              className={`text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Today Tasks
            </span>
            <span
              className={`text-xs ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
            <img src={helpIcon} alt="" />
            </span>
          </div>
          <div
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            11
          </div>
          <div
            className={`w-full h-4 rounded-full overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-[#f7f9f6]"
            }`}
          >
            <div className="h-full w-3/4 bg-[#5f9c5f]"></div>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#5f9c5f] rounded-full"></span>
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Pending
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#2d462d] rounded-full"></span>
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Done
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
