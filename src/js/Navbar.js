import React from "react";

export function Navbar() {
    return (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				databstoggle="collapse"
				databstarget="#navbarNavAltMarkup"
				ariacontrols="navbarNavAltMarkup"
				ariaexpanded="false"
				arialabel="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-link active" ariacurrent="page" href="#">
						Home
					</a>
					<a className="nav-link" href="#">
						Features
					</a>
					<a className="nav-link" href="#">
						Pricing
					</a>
					<a
						className="nav-link disabled"
						href="#"
						tabindex="-1"
						ariadisabled="true">
						Disabled
					</a>
				</div>
			</div>
		</div>
    </nav>
    );
};
