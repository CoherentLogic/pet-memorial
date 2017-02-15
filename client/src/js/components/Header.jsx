import React from "react";
import axios from "axios";

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            petName: "Name",
            birthYear: "From",
            deathYear: "To"
        };
    }

    componentDidMount() {
        alert("mounted!");
    }

    render() {
        return (
            <header class="box header">	   
            <div class="pet-name">{this.state.petName}</div>
            <div class="pet-dates">{this.state.birthYear}-{this.state.deathYear}</div>
            <hr class="divider" />
            </header>	    
            );
    }


}
