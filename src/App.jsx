import React, { useState } from 'react';
import logo from "./assets/logo.svg"
import { Menu, Search, LayoutGrid, Moon, Sun } from 'lucide-react';
import { TaskList } from './components/TaskList';
import { Sidebar } from './components/Sidebar';
import { TaskEditor } from './components/TaskEditor';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSelected , setIsSelected] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#232323]' : 'bg-white'}`}>
      {/* Header */}
      <header className={`h-16 border-b ${isDarkMode ? 'border-[#232323] bg-[#232323]' : 'bg-white'} flex items-center justify-between px-4 fixed w-full top-0 z-50`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} rounded-lg`}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className='cursor-pointer' />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className={`p-2 ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} rounded-lg`}>
            <Search className="w-6 h-6" />
          </button>
          <button className={`p-2 ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} rounded-lg`}>
            <LayoutGrid className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-2 ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} rounded-lg`}
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>
      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} isDarkMode={isDarkMode} />
      {/* Main Content */}
      <div className="pt-16 flex">
      <main className={`flex  transition-all duration-300 ${isMenuOpen ? 'ml-64 w-full' : ' w-full '} ${isDarkMode ? 'bg-[#232323]' : 'bg-[#f7f9f6]'} ${isSelected ? 'mr-72 w-full' : 'w-full'} `}>
        <TaskList isDarkMode={isDarkMode} isSelected={isSelected}/>
        {/* Task Editor */}
      <TaskEditor isDarkMode={isDarkMode} isSelected={isSelected} closeDetails={() => setIsSelected(false)}/>
      </main>
      </div>
    </div>
  );
}

export default App;