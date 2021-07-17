import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					dataBsToggle="collapse"
					dataBsTarget="#navbarNavAltMarkup"
					ariaControls="navbarNavAltMarkup"
					ariaExpanded="false"
					ariaLabel="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex flex-row-reverse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active"
							ariaCurrent="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
						<a
							className="nav-link disabled"
							href="#"
							tabIndex="-1"
							ariaDisabled="true">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
