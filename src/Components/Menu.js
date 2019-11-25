import React from "react";
import {
	Link
} from "react-router-dom";

// header component for display routing
const Header = props => {
	const { color } = props;
	return (
		<header className={color}>
			<nav id="nav">
				<Link className="green" to="/"><span>Home</span></Link>
				<Link className="yellow" to="/about"><span>About</span></Link>
				<Link className="orange" to="/blog"><span>Blog</span></Link>
				<Link className="red" to="/photos"><span>Photos</span></Link>
				<Link className="green" to="/contact"><span>Contact</span></Link>
			</nav>
		</header>
	);
};

export default Header;
