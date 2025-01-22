import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

const LoginInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-indigo-600 hover:text-indigo-800 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-colors shadow-sm"
        title="View test credentials"
      >
        <HelpCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Mock Credentials</span>
      </button>

        <div className={`${isOpen ? "w-64" : "w-0"} overflow-hidden  cursor-pointer`}>
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Email:</h3>
            <p className="text-indigo-700">admin@gmail.com</p>
          </div>
          <p className="text-sm text-indigo-600 mt-4">
            Note: Any password will work for testing purposes
          </p>
        </div>
    </div>
  );
};

export default LoginInfo;