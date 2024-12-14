import { useState } from "react";

function useThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleTheme];
}

export default useThemeToggle;
