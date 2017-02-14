import React from "react";
import {Link} from "react-router";

export default class Navigation extends React.Component {

    constructor() {
	super();
    }

    render() {
	return(
	    <nav class="box nav">
		<Link to="bio">Bio</Link>
		<Link to="stories">Stories</Link>
		<Link to="guestbook">Guestbook</Link>
		<Link to="gallery">Photo Gallery</Link>
	    </nav>
	);
    }

}
