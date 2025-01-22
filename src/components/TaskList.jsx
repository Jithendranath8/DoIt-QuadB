import React, { useState } from "react";
import { Bell, RotateCcw, Calendar, Star } from "lucide-react";
import { TaskEditor } from "./TaskEditor";
import useTaskStore from "../store/TaskStore";

export function TaskList({ isDarkMode }) {
  const [newTask, setNewTask] = useState("");
  const tasks = useTaskStore((state) => state.tasks);
  const selectedTask = useTaskStore((state) => state.selectedTask);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleComplete = useTaskStore((state) => state.toggleComplete);
  const toggleImportant = useTaskStore((state) => state.toggleImportant);
  const selectTask = useTaskStore((state) => state.selectTask);
  const clearSelectedTask = useTaskStore((state) => state.clearSelectedTask);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  const openTaskEditor = (task) => {
    selectTask(task);
  };

  const closeTaskEditor = () => {
    clearSelectedTask();
  };

  return (
    <div className="w-full mx-auto p-3">
      {/* Add Task Form */}
      <form
        onSubmit={handleAddTask}
        className={`${
          isDarkMode
            ? "bg-[#2F3630] text-white"
            : "bg-gradient-to-b from-[#3579371A] to-[#D0FFD21A]"
        } p-4 rounded-lg shadow-sm mb-6`}
      >
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Add A Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className={`flex-1 text-lg focus:outline-none bg-inherit ${
              isDarkMode ? "text-white" : "text-[#1B281BB8]"
            }`}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Bell className="w-5 h-5" />
            </button>
            <button
              type="button"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              type="button"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Calendar className="w-5 h-5" />
            </button>
          </div>
          <button
            type="submit"
            className={`px-3 py-1 bg-[#35793729] text-[#357937] rounded-lg hover:bg-[#4a7b4a] hover:text-white transition-colors ${
              isDarkMode ? "text-white" : "text-[#1B281BB8]"
            }`}
          >
            ADD TASK
          </button>
        </div>
      </form>

      {/* Task List */}
      <div className={`${isDarkMode ? "bg-[#232323] text-white" : "bg-white"}`}>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-4 p-4 shadow-sm transition-colors ${
                isDarkMode ? "bg-[#232323]" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className={`w-5 h-5 ${isDarkMode ? "text-[#4e7a5033]" : ""}`}
              />

              <span
                className={`flex-1 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } cursor-pointer`}
                onClick={() => openTaskEditor(task)}
              >
                {task.text}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleImportant(task.id);
                }}
                className={`p-1 rounded-lg transition-colors ${
                  task.important ? "text-black" : ""
                }`}
              >
                <Star
                  className="w-5 h-5"
                  fill={task.important ? "currentColor" : "none"}
                />
              </button>
            </div>
          ))}

        {/* Completed Section */}
        {tasks.some((task) => task.completed) && (
          <div className="mt-8">
            <h3 className={` mb-4 `}>Completed</h3>
            {tasks
              .filter((task) => task.completed)
              .map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 p-4 rounded-lg shadow-sm mb-2 transition-colors ${
                    isDarkMode ? "bg-[#232323]" : "bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className={
                      "w-5 h-5 rounded-sm border-gray-300 text-[#5f9c5f] focus:ring-[#5f9c5f] accent-green-800"
                    }
                  />
                  <span
                    className={`flex-1 line-through cursor-pointer`}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleImportant(task.id);
                    }}
                    className={`p-1 rounded-lg transition-colors ${
                      task.important
                        ? "text-black"
                        : isDarkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    <Star
                      className="w-5 h-5"
                      fill={task.important ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Task Editor */}
      {selectedTask && (
        <TaskEditor
          task={selectedTask}
          toggleComplete={toggleComplete}
          toggleImportant={toggleImportant}
          closeDetails={closeTaskEditor}
          isSelected={!!selectedTask}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
