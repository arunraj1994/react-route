import React from "react";
import { browserHistory } from "react-router";

export class MyFavorites extends React.Component {

	onNavigateHome() {
		browserHistory.push("/home");
	}

	render() {
		return (
			<div>
				<h3>MyFavorites Page</h3>
				
				<button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
			</div>
		);
	}
}