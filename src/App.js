import {BrowserRouter, Routes, Route } from "react-router-dom";
//import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from './component/layout/scrolltop';
import AboutPage from "./pages/about";
import ContactUs from "./pages/contact";
import HomePage from "./pages/home";
import MembershipPage from "./pages/membership";
import Policy from "./pages/policy";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="membership" element={<MembershipPage />} />
					<Route path="contact" element={<ContactUs />} />
					<Route path="policy" element={<Policy />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
