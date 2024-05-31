import React, { useState } from 'react';
import { saveTurn } from "../firebase/api";
import { useAuth } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  user: " ",
  hora: " ",
  turn: " ",
};
function AgendarTurno() {

  const [turn, setTurn] = useState();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await saveTurn(turn.hora, turn.turn, user.email);
    toast("Nuevo turno creado", {
      type: "success",
    });
    navigate("/Admin")
  }
  const handleChange = ({ target: { value, name } }) =>
    setTurn({ ...turn, [name]: value });

  return (
		<>
			<div className="container" style={{ marginTop: "5%" }}>
				<div className=" text-center">
					<h3 className="text-primary d-flex justify-content-center align-items-center">
						Agendar turno
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							className="bi bi-calendar ms-2"
							viewBox="0 0 16 16"
						>
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
							<path d="M3 7h10v1H3V7zm0 2h10v1H3V9zm0 2h10v1H3v-1z" />
						</svg>
					</h3>
				</div>
				<div className="card" style={{ marginLeft: "10%", marginRight: "10%" }}>
					<div
						style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}
					>
						
						<label for="exampleFormControlInput1" class="form-label">
							Fecha formato DD/MM/YYYY HH:mm a.m./p.m.
						</label>
						<input
              name="hora"
							type="text"
              onChange={handleChange}
							class="form-control"
							id="hora"
              placeholder='02/06/2024 10:30 a.m.'
              />
						<label for="exampleFormControlInput1" class="form-label">
							turno entre E-G 1-100
						</label>
						<input
							type="text"
							class="form-control"
							id="turn"
              onChange={handleChange}
              name='turn'
							placeholder="E45"
						/>
            <label for="exampleFormControlInput1" class="form-label">
							Usuario
						</label>
            <input
							type="text"
							class="form-control"
							id="turn"
              onChange={handleChange}
              name='Usuario'
							placeholder="name@example.com"
						/>
            <br />
						<br />
						<div>
							<button
								type="submit"
								className="btn btn-primary"
								style={{ width: "100%" }}
                onClick={() => navigate("/")}
							>
								Volver al inicio
							</button>
							<button
								type="submit"
								className="btn btn-danger"
								style={{ width: "100%" }}
                onClick={handleSubmit}
							>
								Agendar turno
							</button>
						</div>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}

export default AgendarTurno;