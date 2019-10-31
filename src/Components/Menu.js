import React from "react";
import {
	Link
} from "react-router-dom";

// header component for display routing
const Header = props => {
	const { color } = props;
	return (
		<header className={color}>
			<div className="nav">
				<div className="container">
					<ul id="nav">
						<li>
							<Link to="/">Home</Link>
							<Link to="/about">About</Link>
							<Link to="/blog">Blog</Link>
							<Link to="/photos">Photos</Link>
							<Link to="/contact">Contact</Link>
							<a onClick={history.goBack}>Go Back</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
