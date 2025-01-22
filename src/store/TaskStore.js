import { create } from "zustand";

const useTaskStore = create((set) => ({
  isMenuOpen: false,
  isDarkMode: false,
  selectedTask: null,
  tasks: [
    { id: 1, text: "Buy groceries", completed: false, important: false },
    { id: 2, text: "Finish project report", completed: false, important: true },
    { id: 3, text: "Call the bank", completed: false, important: false },
    { id: 4, text: "Schedule dentist appointment", completed: false, important: false},
    { id: 5, text: "Plan weekend trip", completed: false, important: false },
    { id: 6, text: "Read a book", completed: true, important: false },
    { id: 7, text: "Clean the house", completed: true, important: false },
    { id: 8, text: "Prepare presentation", completed: true, important: false },
    { id: 9, text: "Update blog", completed: true, important: false },
  ],

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  selectTask: (task) => set(() => ({ selectedTask: task })),
  clearSelectedTask: () => set(() => ({ selectedTask: null })),
  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now(), text, completed: false, important: false },
      ],
    })),
  toggleComplete: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  toggleImportant: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      ),
    })),
}));
export default useTaskStore;
