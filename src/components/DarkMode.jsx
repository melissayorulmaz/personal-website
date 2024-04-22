import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function DarkMode ()  {
  const { darkMode,setDarkMode } = useContext(UserContext);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
      <label className="relative inline-flex items-center cursor-pointer left-[145vh]">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          data-testid="darkMode-toggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-11 h-6 bg-[#E92577] rounded-full peer peer-checked:border-[#E92577] peer-focus:ring-4 peer-focus:ring-[#E92577] dark:peer-focus:ring-[#000000] dark:bg-[#000000] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#000000] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#FFE86E] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[gray-600]"></div>
        <span className="ms-3 font-medium text-gray-900 dark:text-gray-300">
  {darkMode ? 'Dark Mode On' : 'Light Mode On'}
</span>
      </label>

  );
}

