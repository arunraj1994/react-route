import React from "react";
import { Link } from "react-router";


export const Header = (props) => {
	return (
		
		<nav className="navbar-container">
				<div className="navbar-head">
					<ul className="nav-content">
						
						<li><Link to= {"/myfavorites"} activeClassName={"active"}>My Favorites</Link></li>
						<li><Link to= {"/mycart"} activeStyle={{color:""}}>My Cart</Link></li>
						<li><Link to= {"/faq"} activeStyle={{color:""}}>FAQ</Link></li>
						<li><Link to= {"/customercare"} activeStyle={{color:""}}>Customer Care</Link></li>
					</ul>
				</div>
			
		</nav>
		
	);
	
}