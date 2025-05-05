import './App.scss'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Default/Dashboard";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
	
import { store } from './state/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<AuthLayout />}>
						<Route index element={<Login />}/>
						<Route path='*' element={<h1>Page Not found</h1>} />
					</Route>
					<Route exact path="/" element={<DefaultLayout />}>
						<Route path='dashboard' element={<Dashboard />}/>
						<Route path='*' element={<h1>Page Not found</h1>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
