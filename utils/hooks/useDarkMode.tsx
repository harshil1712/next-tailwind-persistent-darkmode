import { useEffect, useState } from 'react';

enum Theme {
	DARK = 'dark',
	LIGHT = 'light',
}

export default function useDarkMode() {
	const [theme, setTheme] = useState<Theme | null>(() => {
		if (typeof window !== 'undefined') {
			if (
				localStorage.theme === Theme.DARK ||
				(!('theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				return Theme.DARK;
			} else {
				return Theme.LIGHT;
			}
		}
	});
	const colorTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', theme);
			setTheme(theme);
		}
	}, [theme]);

	return [, setTheme];
}
