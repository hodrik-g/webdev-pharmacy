import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

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
							<strong className="medic-name">Remédio</strong>
							</header>
						<div className="medic-info">
							<p>Efeitos:</p>
							<p>Contraindicações:</p>
						</div>
						<div className="medic-info">
							<ul className="medic-effects">
								<li>isso</li>
								<li>isso aqui</li>
								<li>isso outro aqui</li>
							</ul>
							<ul className="medic-contraindications">
								<li>não</li>
								<li>nãnãninãnão</li>
							</ul>
						</div>
						<div className="medic-add2cart">
							<strong>Adicionar ao carrinho</strong>
							<p className="medic-price">R$12,00</p>
						</div>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
