import Head from 'next/head';
import Image from 'next/image';
import useDarkMode from '../utils/hooks/useDarkMode';

export default function Home() {
	const [, setTheme] = useDarkMode();
	const toggleTheme = () => {
		console.log('Clicked');
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<>
			<Head>
				<title>AMAZING</title>
			</Head>
			<button onClick={toggleTheme}>Toggle</button>
		</>
	);
}
