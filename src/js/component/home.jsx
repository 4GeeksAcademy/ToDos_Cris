import React, { useState } from "react";

const Home = () => {
	const [imputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(Todos.concat([imputValue]));
								setImputValue("");
							}
						}}
						placeholder="what do you need for the event?" />
				</li>

				{todos.map((item, index) => (
					<li key={index} >
						{item}{' '}
						<i className="fas fa-trash-alt"
							onClick={() =>
								setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}></i>
					</li>))}
			</ul>
			<p>
				Tienes {todos.lenght} tareas pendientes
			</p>
		</div>
	);
};

export default Home;
