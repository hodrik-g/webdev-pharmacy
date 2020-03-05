import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './Rightbar.css';

import Item from'./Components/Cart/Item.js';
import Medic from './Components/Search/Medic.js';

function App() {

	//Registro dos remédios:
	const medics = {
		Luftal: {
			medicName: "Luftal",
			medicPrice: 7.5,
			medicEffects: [
				"Gases",
				"Desconforto abdominal",
				"Dor ou cólicas no abdômen",
			],
			medicContraindications: [
				"Dor grave ou persistente",
				"Massa palpável na região do abdômen",
				"Suspeita de perfuração ou obstrução intestinal",
			],
		},
		Reparil: {
			medicName: "Reparil",
			medicPrice: 17.9,
			medicEffects: [
				"Dores musculares",
				"Traumatismos leves",
				"Artrites e tendinites",
			],
			medicContraindications: [
				"Não deve ser aplicado em pele rachada ou nas mucosas",
				"Não deve ser aplicado em áreas de pele que tenham sido expostas a radioterapia",
			],
		},
		Tylenol: {
			medicName: "Tylenol",
			medicPrice: 14.99,
			medicEffects: [
				"Dor de cabeça",
				"Dores musculares",
				"Dores leves associadas a artrites e cólicas menstruais",
			],
			medicContraindications: [
				"Pessoas alergicas ao paracetamol",
			],
		},
	};

	//Itens do carrinho
	let [cartItems, setCart] = useState({});

	//Função que adicionará itens ao carrinho
	function addToCart(medicName, medicPrice) {
		let newItem = {};
		newItem[medicName] = {medicName, medicPrice, medicAmount: 1};
		setCart({ ...cartItems, ...newItem});
	}

	//Função que removerá itens do carrinho
	function removeFromCart(medicName) {
		delete cartItems[medicName];
		setCart({...cartItems});
	}

	//Função que altera a quantidade de determinado item no carrinho
	function changeAmountOfItem(medicName, medicPrice, medicAmount) {
		if(medicAmount === 0)  return;

		let updatedItem = {};
		updatedItem[medicName] = {medicName, medicPrice, medicAmount};
		setCart({...cartItems, ...updatedItem});
	}

	return (
		<div id="app">
			<div>
				<aside>
					<h2>Cadastre-se</h2>
					<form>
						<div className="input-block">
							<label htmlFor="register-cpf">Seu CPF</label>
							<input name="register-cpf" id="register-cpf" required/>
						</div>

						<div className="input-block">
							<label htmlFor="register-email">Seu e-mail</label>
							<input name="register-email" id="register-email" required/>
						</div>

						<div className="input-group">
							<div className="input-block">
								<label htmlFor="register-adress">Endereço</label>
								<input name="register-adress" id="register-adress" required/>
							</div>
							<div className="input-block">
								<label htmlFor="register-complement">Complemento</label>
								<input name="register-complement" id="register-complement"/>
							</div>
						</div>

						<button type="submit">Registrar</button>
					</form>
				</aside>
				<div className="cart">
					<h2>Carrinho</h2>
					<div className="cart-list">
						{
							Object.keys(cartItems).map(itemKey => {
								const item = cartItems[itemKey];

								return <Item key={itemKey} item={item} changeAmountOfItem={changeAmountOfItem} removeFromCart={removeFromCart} />
							})
						}
						<Item medicName="medicine" medicPrice={10}/>
					</div>
				</div>
			</div>
			<main>
				<div className="search-container">
					{
						Object.keys(medics).map(medicKey => {

							const medic = medics[medicKey];

							return <Medic key={medicKey} medic={medic} addToCart={addToCart} />
						})
					}
				</div>
			</main>
		</div>
	);
}

export default App;
