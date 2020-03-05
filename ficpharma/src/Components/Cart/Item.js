import React from 'react';

function Item(props) {

	if( !props.item )  return <></>;
	const {medicName, medicPrice, medicAmount} = props.item;

	function formatPrice(price) {
		price = `${price}`;
		if( /\.\d\d/.test(price) )
			return `R$${price.replace('.', ',')}`;
		else if ( /\.\d/.test(price) )
			return `R$${price.replace('.', ',')}0`;
		else
			return `R$${price},00`
	}

	return (
		<div className="item">
			<div className="item-details">
				<button className="delete" onClick={ () => props.removeFromCart(medicName) }><i className="material-icons">clear</i></button>
				<div className="item-info">
					<h4 className="item-name">{medicName}</h4>
					<div className="item-info-amount">
						<h4 className="item-unit">{ formatPrice(medicPrice) }</h4>
						<div className="item-amount">
						<button className="decrement" onClick={ () => props.changeAmountOfItem(medicName, medicPrice, medicAmount-1) }><i className="material-icons">remove</i></button>
							<h4 className="amount">{medicAmount}</h4>
							<button className="increment" onClick={ () => props.changeAmountOfItem(medicName, medicPrice, medicAmount+1) }><i className="material-icons">add</i></button>
						</div>
					</div>
				</div>
			</div>
			<div className="item-edit">
				<h4 className="item-price">{ formatPrice(medicPrice * medicAmount) }</h4>
			</div>
		</div>
	);
}

export default Item;