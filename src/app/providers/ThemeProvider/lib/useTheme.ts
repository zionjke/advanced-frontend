import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';

interface IUseTheme {
    toggleTheme: () => void;
    theme: Theme
}

export const useTheme = (): IUseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
