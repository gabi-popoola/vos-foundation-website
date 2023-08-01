import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import PageWrapper from './components/PageWrapper/PageWrapper';

const App = () => {
	return (
		<BrowserRouter>
			<PageWrapper>
				<Routes>
					<Route exact path="/" Component={Home} />
				</Routes>
			</PageWrapper>
		</BrowserRouter>
	);
};

export default App;
