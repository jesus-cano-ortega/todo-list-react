import React from "react";
import PropTypes from "prop-types";

const Item = props => {
	return (
		<>
			<li className="text-white">{props.name}</li>
			<button onClick={props.click}>Delete task</button>
		</>
	);
};

Item.propTypes = {
	name: PropTypes.string,
	click: PropTypes.any
};

export default Item;
