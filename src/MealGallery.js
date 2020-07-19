import React, { Component } from "react";

class MealGallery extends Component {
	constructor() {
		super();
    }
    componentDidMount(){
        console.log(this.props)
    }

	render() {
		return (
			<div>
                {/* this will error out because it's not itterated yet. */}
				<h2>{this.props.result}</h2>
			</div>
		);
	}
}

export default MealGallery;
