import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { MyFavorites } from "./components/MyFavorites";
import { MyCart } from "./components/MyCart";
import { Faq } from "./components/Faq";
import { CustomerCare } from "./components/CustomerCare";
class App extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Home}/>
					
					<Route path={"home"} component={Home}/>
					<Route path={"myfavorites"} component={MyFavorites}/>
					<Route path={"mycart"} component={MyCart}/>
					<Route path={"faq"} component={Faq}/>
					<Route path={"customercare"} component={CustomerCare}/>

				</Route>
			
			</Router>
		);
	}
}

render(<App/>, window.document.getElementById("app"));