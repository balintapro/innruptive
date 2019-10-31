import React from "react";

// footer
const Footer = props => {
	const { color } = props;
	return (
		<footer className={color}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<span>INNRUPTIVE © by Balint Apro</span>
						<p>
							2019
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
