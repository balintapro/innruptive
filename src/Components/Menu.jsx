import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTerminal,
	faProjectDiagram,
	faThList
} from "@fortawesome/free-solid-svg-icons";

const isPost = window.location.href.includes("post");
console.log(isPost)

// header component for display routing
const Menu = (props, isMobile, location) => {
	const { color } = props;
	return (
		<header className={color}>
			<nav className="nav crt" id="nav">
				<NavLink exact to="/" className="home" activeClassName="active">
					<b>
						<span>
							<FontAwesomeIcon icon={faTerminal} />
						</span>
					</b>
					<span className="label">Home</span>
				</NavLink>
				<NavLink exact to="/projects" className="projects" activeClassName="active">
					<b>
						<span>
							<FontAwesomeIcon icon={faProjectDiagram} />
						</span>
					</b>
					<span className="label">Projects</span>
				</NavLink>
				<NavLink to="/blog" className="blog" activeClassName="active">
					<b>
						<span>
							<FontAwesomeIcon icon={faThList} />
						</span>
					</b>
					<span className="label">Blog</span>
				</NavLink>
			</nav>
		</header>
	);
};

export default Menu;
