import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { mergeClassNames } from "../lib/utils";

export const ThemeToggle = () => 
{
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() =>
    {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark")
        {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
        else
        {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () =>
    {
        document.documentElement.classList.toggle("dark");
        setIsDarkMode(!isDarkMode);

        localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    }

    return <button 
                onClick={toggleTheme} 
                className={mergeClassNames(
                    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                    "focus:outline-hidden")}> 
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>} 
           </button>;
}