import React from "react";
import { Navbar } from "./Navbar";
import {Jumbotron} from "./Jumbotron";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
            <Jumbotron />
		</div>
        
	);
}
