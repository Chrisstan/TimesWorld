import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.scss";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function index() {
	const navigate = useNavigate();
    const location = useLocation();

    // Helper function to update the query parameter
    const updateQueryParam = (continent) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('continent', continent); // Set the continent query param
        navigate(`?${searchParams.toString()}`); // Update the URL
    };

    // Get the current continent from the query params
    const searchParams = new URLSearchParams(location.search);
    const currentContinent = searchParams.get('continent') || 'all';

	return (
		<Navbar collapseOnSelect expand="lg" sticky='top' className="bg-body-tertiary navigationBar">
			<Container>
				<Navbar.Brand href="#home" className="navigationBar__brand">Countries</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="navigationBar__navbarRight">
					<Nav variant="underline" className="navigationBar__nav" activeKey={`#${currentContinent}`}>
						<Nav.Item>
							<Nav.Link onClick={() => updateQueryParam('all')} className="navigationBar__navLink" href="#all">
                                All
                            </Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link onClick={() => updateQueryParam('asia')}
                                className="navigationBar__navLink" href="#asia"
                            > Asia
                            </Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
                                onClick={() => updateQueryParam('europe')}
                                className="navigationBar__navLink" href="#europe"
                            > Europe
                            </Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default index;