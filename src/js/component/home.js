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
			tareas: [
				"No tasks, add a task",
				"Tarea 1",
				"Tarea 2",
				"Tarea 3",
				"Tarea 4"
			]
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

		return (
			<div className="text-center mt-5">
				<h1>todos</h1>
				<Input
					value={this.state.value}
					controlCambio={this.controlaCambio}
					controlSubmitt={this.controlaSubmit}
				/>
				<Lista
					contador={contador}
					lista={this.state.tareas}
					elimina={this.eliminaTarea}
				/>
			</div>
		);
	}
}
