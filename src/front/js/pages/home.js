import React from "react";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-lg fs-4">Iniciar sesión</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-lg fs-4">Registrarse</button>
				</Link>
			</div>
		</div>
	);
};