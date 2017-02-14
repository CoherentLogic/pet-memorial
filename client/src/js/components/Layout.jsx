import React from "react";
import axios from "axios";

import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default class Layout extends React.Component {

    constructor() {
	super();
    }

    render() {
	return(
	    <div>
		<Header />
		<Navigation />
		{this.props.children}
		<Footer />
	    </div>
	);
    }

}
