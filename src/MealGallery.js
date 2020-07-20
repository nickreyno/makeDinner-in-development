import React, { Component } from "react";

class MealGallery extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
        console.log(this.props.resultExt);
        console.log(this.props)
	}

	render() {
		return (
			<div>
				{this.props.resultExt.map((i) => {
					return (
						<li key={i.id}>
                            <p>{i.title}</p>
                            <img className="galleryImg" src={i.image} alt="" />
						</li>
					);
				})}
			</div>
		);
	}
}

export default MealGallery;
