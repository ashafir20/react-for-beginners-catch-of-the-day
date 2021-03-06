import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator'

@autobind
class Fish extends React.Component {
	onButtonClick() {
		console.log("adding fish ", this.props.index);
		this.props.addOrder(this.props.index);
	}

	render() {
		var details = this.props.details;
		var isAvailable = (details.status === "available");
		var buttonText = (isAvailable ? 'Add To Order' : 'Sold Out!');
		return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">{h.formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
			</li>
		)
	}
};

export default Fish;