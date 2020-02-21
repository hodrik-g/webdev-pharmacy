import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import './Rightbar.css';

import Item from'./Components/Cart/Item.js';

function App() {

	const medicsPrice = {
		remedios:{
			remedio1: {
				name: 'yasuo',
				price: 12.0
			},
			remedio2: {
				name: 'morgana',
				price: 18.0
			},
			remedio3: {
				name: 'aatrox',
				price: 25.0
			},
			remedio4: {
				name: 'master_Yi',
				price: 22.0
			},
		},
		carrinho: {
			remedio2: {
				name: 'yasuo',
				price: 12.0,
			}
		}
	};


	return (
		<div id="app">
			<div className="cart">
				<h2>Carrinho</h2>
				<Item name="Yasuo" price="11.9"/>
			</div>
			<main>
				<ul>
					<li className="medic-item">
						<header>
							<h2 className="medic-name">Remédio</h2>
						</header>
						<div className="medic-info">
							<div className="medic-effects">
								<h4>Combate</h4>
								<ul>
									<li>Dor de cabeça</li>
									<li>Inflamação muscular</li>
									<li>Algum sintoma com nome bem bem bem bem longo</li>
								</ul>
							</div>
							<div className="medic-contraindications">
								<h4>Contraindicações</h4>
								<ul>
									<li>Diabéticos</li>
									<li>Pneumoultramicroscopicossilicovulcanoconióticos</li>
									<li>Algum diagnóstico com nome bem bem bem longo</li>
								</ul>
							</div>
						</div>
						<div className="medic-add2cart">
							<strong>Adicionar ao carrinho</strong>
							<p className="medic-price">R$12,00</p>
						</div>
					</li>
					<li className="medic-item">
						<header>
							<h2 className="medic-name">Remédio</h2>
						</header>
						<div className="medic-info">
							<div className="medic-effects">
								<h4>Combate</h4>
								<ul>
									<li>Dor de cabeça</li>
									<li>Inflamação muscular</li>
									<li>Algum sintoma com nome bem bem bem bem longo</li>
								</ul>
							</div>
							<div className="medic-contraindications">
								<h4>Contraindicações</h4>
								<ul>
									<li>Diabéticos</li>
									<li>Pneumoultramicroscopicossilicovulcanoconióticos</li>
									<li>Algum diagnóstico com nome bem bem bem longo</li>
								</ul>
							</div>
						</div>
						<div className="medic-add2cart">
							<strong>Adicionar ao carrinho</strong>
							<p className="medic-price">R$12,00</p>
						</div>
					</li>
					<li className="medic-item">
						<header>
							<h2 className="medic-name">Remédio</h2>
						</header>
						<div className="medic-info">
							<div className="medic-effects">
								<h4>Combate</h4>
								<ul>
									<li>Dor de cabeça</li>
									<li>Inflamação muscular</li>
									<li>Algum sintoma com nome bem bem bem bem longo</li>
								</ul>
							</div>
							<div className="medic-contraindications">
								<h4>Contraindicações</h4>
								<ul>
									<li>Diabéticos</li>
									<li>Pneumoultramicroscopicossilicovulcanoconióticos</li>
									<li>Algum diagnóstico com nome bem bem bem longo</li>
								</ul>
							</div>
						</div>
						<div className="medic-add2cart">
							<strong>Adicionar ao carrinho</strong>
							<p className="medic-price">R$12,00</p>
						</div>
					</li>
					<li className="medic-item">
						<header>
							<h2 className="medic-name">Remédio</h2>
						</header>
						<div className="medic-info">
							<div className="medic-effects">
								<h4>Combate</h4>
								<ul>
									<li>Dor de cabeça</li>
									<li>Inflamação muscular</li>
									<li>Algum sintoma com nome bem bem bem bem longo</li>
								</ul>
							</div>
							<div className="medic-contraindications">
								<h4>Contraindicações</h4>
								<ul>
									<li>Diabéticos</li>
									<li>Pneumoultramicroscopicossilicovulcanoconióticos</li>
									<li>Algum diagnóstico com nome bem bem bem longo</li>
								</ul>
							</div>
						</div>
						<div className="medic-add2cart">
							<strong>Adicionar ao carrinho</strong>
							<p className="medic-price">R$12,00</p>
						</div>
					</li>
				</ul>
			</main>
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
		</div>
	);
}

export default App;
