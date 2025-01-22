import React, { use, useState } from "react";
import { Plus, Bell, Calendar, Repeat, Trash2, Star, X } from "lucide-react";
import useTaskStore from "../store/TaskStore";
import { MyDatePicker } from "../MyDatePicker";

export function TaskEditor() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null); // For error handling

  const isSelected = useTaskStore((state) => state.selectedTask !== null);
  const task = useTaskStore((state) => state.selectedTask);
  const isDarkMode = useTaskStore((state) => state.isDarkMode);
  const toggleComplete = useTaskStore((state) => state.toggleComplete);
  const toggleImportant = useTaskStore((state) => state.toggleImportant);
  const handelDelete = useTaskStore((state) => state.handelDelete);
  const clearSelectedTask = useTaskStore((state) => state.clearSelectedTask);

  if (!task) return null; 
  const { id, text, completed, important } = task;

  const handleDateSelect = (date) => {
    try {
      if (date) {
        setSelectedDate(date);
        setError(null); 
      } else {
        throw new Error("Invalid date selected.");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <aside
      className={`${
        isSelected ? "w-64" : "w-0 overflow-hidden"
      } transition-all duration-300 fixed right-0 top-11 bottom-0 ${
        isDarkMode
          ? "bg-[#2C2C2C] border-[#2C2C2C] text-gray-300"
          : "bg-[#f7f9f6] border-[#f7f9f6] text-gray-800"
      } border-l shadow-lg flex flex-col justify-between`}
    >
      {/* Task Details Section */}
      <div className="p-6">
        {/* Task Header */}
        <div className="flex justify-between items-center pb-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-green-600 cursor-pointer"
              checked={completed}
              onChange={() => toggleComplete(id)}
            />
            <span className="text-lg font-medium">{text}</span>
          </div>
          <Star
            className={`h-5 w-5 cursor-pointer ${
              important ? "fill-black" : "text-gray-400"
            }`}
            onClick={() => toggleImportant(id)}
          />
        </div>

        {/* Task Options */}
        <div className="space-y-4 mt-4">
          <button className="flex items-center w-full text-left space-x-3">
            <Plus className="h-5 w-5" />
            <span>Add Step</span>
          </button>
          <button className="flex items-center w-full text-left space-x-3">
            <Bell className="h-5 w-5" />
            <span>Set Reminder</span>
          </button>
          <div>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center w-full text-left space-x-3 mb-4"
            >
              <Calendar className="h-5 w-5" />
              <span>Add Due Date</span>
            </button>
            {showCalendar && (
              <div className="mt-2">
                <MyDatePicker
                  onSelect={handleDateSelect}
                  selected={selectedDate}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>
          <button className="flex items-center w-full text-left space-x-3">
            <Repeat className="h-5 w-5" />
            <span>Repeat</span>
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between p-4">
        <button
          className="p-2 rounded-lg hover:bg-gray-200"
          onClick={clearSelectedTask}
        >
          <X className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-200"
          onClick={(e) => {
            e.stopPropagation();
            handelDelete(task.id);
            clearSelectedTask()

          }}
      >
        <Trash2
          className="size-6"
        />
        </button>
      </div>
    </aside>
  );
}
