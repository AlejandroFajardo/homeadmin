import React, { useEffect, useState } from 'react';
import Navbar from './Desktop/navbar';
import { useAuth } from "../context/AuthContext";
import { getTurns, deleteTurn } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DesktopT() {
  
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [turns, setTurns] = useState([]);

  const getAllTurns = async () => {
    const querySnapshot = await getTurns();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
    });
    setTurns(docs);
    // });
  };

  const onDeleteTurn = async (id) => {
		if (window.confirm("Seguro quiere eliminar este turno")) {
			await deleteTurn(id);
			toast("turno eliminado satisfactoriamente", {
				type: "error",
				autoClose: 2000,
			});
      navigate("/admin");
		}
	};

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
		getAllTurns();
	}, []);

  return (
		<>
			<nav className="navbar navbar-light bg-light text-primary">
				<div className="container-fluid">
					<div className="d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-calendar-week"
							viewBox="0 0 16 16"
						>
							<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
						</svg>
						<a className="navbar-brand ms-2 text-primary">Turnos</a>
					</div>
					<button
						className="btn btn-primary"
						onClick={() => navigate("/AgendarTurnoAdmin")}
						type="button"
					>
						+ nuevo turno
					</button>
					<button className="btn" onClick={handleLogout} type="button">
						Salir
					</button>
				</div>
			</nav>
			<div style={{ marginLeft: "12%", marginRight: "12%" }}>
				<div style={{ marginTop: "5%" }}>
					<div className="container mt-3">
						<div className="d-flex align-items-center justify-content-between">
							<input type="date" className="form-control mx-2 text-primary" />
							<button className="btn text-primary mx-1" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-arrow-left-right"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
									/>
								</svg>
							</button>
							<input type="date" className="form-control mx-2" />

							<button className="btn text-primary mx-1" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-caret-left-fill"
									viewBox="0 0 16 16"
								>
									<path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
								</svg>
							</button>
							<input
								type="text"
								className="form-control mx-2"
								placeholder="12/12/12"
							/>
							<button className="btn text-primary mx-1" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-caret-right-fill"
									viewBox="0 0 16 16"
								>
									<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
								</svg>
							</button>
							<button className="btn text-primary mx-1" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-three-dots-vertical"
									viewBox="0 0 16 16"
								>
									<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
								</svg>
							</button>
						</div>
					</div>

					<table className="table mt-3" style={{ marginTop: "5%" }}>
						<thead>
							<tr>
								<th scope="col ">Hora</th>
								<th scope="col">Usuario</th>
								<th scope="col">Codigo de Turno</th>
								<th scope="col">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{turns.map((turn) => (
								<tr>
									<td>{turn.hora}</td>
									<td>{turn.user}</td>
									<td>{turn.turn}</td>
									<td>
										<button className="btn text-primary" onClick={() => onDeleteTurn(turn.id)} type="button">
											x
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default DesktopT;