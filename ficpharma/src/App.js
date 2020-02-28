import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './Rightbar.css';

import Item from'./Components/Cart/Item.js';
import Medic from './Components/Search/Medic.js';

function App() {

	const medics = {
		Luftal: {
			medicName: "Luftal",
			medicPrice: "15,00",
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
			medicPrice: "18,00",
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
			medicPrice: "25,00",
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
					<Item name="Yasuo" price="11.9"/>
				</div>
			</div>
			<main>
				<div className="search-container">
					{
						Object.keys(medics).map(medicKey => {
							const medic = medics[medicKey];

							return <Medic medicName={medic.medicName} medicPrice={medic.medicPrice} medicEffects={medic.medicEffects} medicContraindications={medic.medicContraindications} />
						})
					}
				</div>
			</main>
		</div>
	);
}

export default App;
