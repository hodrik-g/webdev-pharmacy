import React from 'react';

function Medic(props) {

	const {medicName, medicPrice, medicEffects, medicContraindications} = props.medic;

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
		<div className="medic-item">
			<header>
				<h2 className="medic-name">{medicName}</h2>
			</header>
			<div className="medic-info">
				<div className="medic-effects">
					<h4>Combate</h4>
					<ul>
						{
							medicEffects.map( (value, index) => {
								return <li key={index}>{value}</li>;
							})
						}
					</ul>
				</div>
				<div className="medic-contraindications">
					<h4>Contraindicações</h4>
					<ul>
						{
							medicContraindications.map( (value, index) => {
								return <li key={index}>{value}</li>;
							})
						}
					</ul>
				</div>
			</div>
			<div className="medic-add2cart" onClick={() => props.addToCart(medicName, medicPrice)}>
				<strong>Adicionar ao carrinho</strong>
				<p className="medic-price">{formatPrice(medicPrice)}</p>
			</div>
		</div>
	);
}

export default Medic;