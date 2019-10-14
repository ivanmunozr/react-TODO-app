import React from "react";

export class Input extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.controlSubmitt}>
					<input
						className="form-control"
						type="text"
						placeholder="What need to be done?"
						value={this.props.value}
						onChange={this.props.controlCambio}
					/>
				</form>
			</div>
		);
	}
}
