import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from "react-router";

import Layout from "./components/Layout";
import Bio from "./components/Bio";
import Guestbook from "./components/Guestbook";
import Stories from "./components/Stories";
import Gallery from "./components/Gallery";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
	<Route path="/" component={Layout}>
	    <IndexRedirect to="/bio"/>
	    <Route path="bio" component={Bio}/>
	    <Route path="stories" component={Stories}/>
	    <Route path="guestbook" component={Guestbook}/>
	    <Route path="gallery" component={Gallery}/>
	</Route>
    </Router>, app);
