import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'; // Import du Link de MUI
import { Link as RouterLink } from 'react-router-dom'; // Renommé pour éviter les conflits

import HomePage from './pages/HomePage';
import FormatterPage from './pages/FormatterPage';

function App() {
	return (
		<BrowserRouter>
			<Box component="nav" sx={{ padding: 2, backgroundColor: 'background.paper' }}>
				<Link component={RouterLink} to="/" sx={{ color: 'text.primary', marginRight: 2, textDecoration: 'none' }}>
					Accueil
				</Link>
				<Link component={RouterLink} to="/formatter" sx={{ color: 'text.primary', textDecoration: 'none' }}>
					Formatter
				</Link>
			</Box>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/formatter" element={<FormatterPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
