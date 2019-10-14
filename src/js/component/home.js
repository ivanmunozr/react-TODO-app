import React from "react";

//include images into your bundle
import { Input } from "./input.js";
import { Lista } from "./listgroup.js";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			value: "",
			tareas: []
		};

		this.controlaCambio = this.controlaCambio.bind(this);
		this.controlaSubmit = this.controlaSubmit.bind(this);
		this.eliminaTarea = this.eliminaTarea.bind(this);
	}
	controlaCambio(evento) {
		this.setState({ value: evento.target.value });
	}

	controlaSubmit(evento) {
		const nuevaTarea = this.state.tareas.slice();
		nuevaTarea.push(this.state.value);
		this.setState({ tareas: nuevaTarea });
		evento.preventDefault();
		this.setState({ value: "" });
	}

	eliminaTarea(index) {
		let tareas = this.state.tareas.slice();
		tareas.splice(index, 1);
		this.setState({ tareas: tareas });
	}

	render() {
		const contador = this.state.tareas.length;
		const tareasVacio = this.state.tareas.length > 0;

		return (
			<div className="text-center mt-5">
				<h1>todos</h1>
				<Input
					value={this.state.value}
					controlCambio={this.controlaCambio}
					controlSubmitt={this.controlaSubmit}
				/>
				{tareasVacio ? (
					<Lista
						contador={contador}
						lista={this.state.tareas}
						elimina={this.eliminaTarea}
						muestraBoton={this.toggleHover}
						estadoHover={this.state.hover}
					/>
				) : (
					<ul>
						<li>Agrega una tarea</li>
					</ul>
				)}
			</div>
		);
	}
}
