import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Donate from './pages/Donate/Donate';

const App = () => {
	return (
		<BrowserRouter>
			<PageWrapper>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="about-us" element={<AboutUs />} />
					<Route exact path="donate" element={<Donate />} />
				</Routes>
			</PageWrapper>
		</BrowserRouter>
	);
};

export default App;
