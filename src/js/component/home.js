import React from "react";

//include images into your bundle
import { Input } from "./input.js";
import { Lista } from "./listgroup.js";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ""
		};

		this.controlaCambio = this.controlaCambio.bind(this);
		this.controlaSubmit = this.controlaSubmit.bind(this);
	}
	controlaCambio(evento) {
		this.setState({ value: evento.target.value });
	}

	controlaSubmit(evento) {
		alert("Submision correcta");
		evento.preventDefault();
	}

	render() {
		return (
			<div className="text-center mt-5">
				<h1>todos</h1>

				<Input
					value={this.state.value}
					controlCambio={this.controlaCambio}
					controlSubmitt={this.controlaSubmit}
				/>
				<Lista />
			</div>
		);
	}
}
