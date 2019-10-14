import React from "react";

export class Lista extends React.Component {
	removeItem(index) {
		this.props.elimina(index);
	}

	render() {
		let listaTareas = this.props.lista.map((item, index) => (
			<li key={index} className="list-group-item text-left">
				{item}
				<button
					type="button"
					className="close"
					aria-label="Close"
					onClick={this.removeItem.bind(this, index)}>
					<span aria-hidden="true">&times;</span>
				</button>
			</li>
		));

		return (
			<div className="card">
				<ul className="list-group list-group-flush">{listaTareas}</ul>
				<div className="card-footer text-muted text-left">
					{this.props.contador} item left
				</div>
			</div>
		);
	}
}
