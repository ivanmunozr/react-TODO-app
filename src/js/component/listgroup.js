import React from "react";

export class Lista extends React.Component {
	render() {
		return (
			<div className="card">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
				<div className="card-footer text-muted">2 item left</div>
			</div>
		);
	}
}
