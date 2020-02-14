import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
	return (
		<div id="app">
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
			<main>
				<ul>
					<li className="medic-item">
						<header>
							<h3 className="medic-name">Remédio</h3>
							<p>Esse remédio tem esse efeito mas é contraindicado para esse tipo de pessoa</p>
						</header>
						<div className="item-botbar">
							<button className="medic-add2cart">Adicionar ao carrinho</button>
							<p>R$12,00</p>
						</div>
					</li>
					<li className="medic-item">
						<header>
							<h3 className="medic-name">Remédio</h3>
							<p>Esse remédio tem esse efeito mas é contraindicado para esse tipo de pessoa</p>
						</header>
						<div className="item-botbar">
							<button className="medic-add2cart">Adicionar ao carrinho</button>
							<p>R$12,00</p>
						</div>
					</li>
					<li className="medic-item">
						<header>
							<h3 className="medic-name">Remédio</h3>
							<p>Esse remédio tem esse efeito mas é contraindicado para esse tipo de pessoa</p>
						</header>
						<div className="item-botbar">
							<button className="medic-add2cart">Adicionar ao carrinho</button>
							<p>R$12,00</p>
						</div>
					</li>
					<li className="medic-item">
						<header>
							<h3 className="medic-name">Remédio</h3>
							<p>Esse remédio tem esse efeito mas é contraindicado para esse tipo de pessoa</p>
						</header>
						<div className="item-botbar">
							<button className="medic-add2cart">Adicionar ao carrinho</button>
							<p>R$12,00</p>
						</div>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
