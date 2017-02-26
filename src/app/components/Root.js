import React from "react";

import { Header } from "./Header";

export class Root extends React.Component {
	render() {
		return (
		<div className="wrapper">
				
						<Header />
				
				<aside className="aside">
					<article>best seller list</article>
				</aside>

				<div className="content-page">
					<div className="welcome-text">Welcome!!!</div>
						{this.props.children}
					
				</div>

				<footer className="footer-part"></footer>

		</div>
			)
	}
}