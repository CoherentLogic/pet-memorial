import React from "react";

export default class Layout extends React.Component {

    constructor() {
	super();
	this.state = {
	    title: "Welcome",
	};
    }
    
    render() {
	return(
	    <div>	    
	    {this.state.title}
	    </div>
	);
    }

}
