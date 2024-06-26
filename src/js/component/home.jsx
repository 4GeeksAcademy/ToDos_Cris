import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My Todos</h1>
			<div>
				<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						}
					}}
					placeholder="what do you need for the event?" />


				{todos.map((item, index) => (

					<li key={index} className="lista">
						{item}{' '}
						<i className="fas fa-trash-alt"
							onClick={() =>
								setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}></i>
					</li>))}
			</div>

			<p>
				Tienes {todos.length} tareas pendientes
			</p>
		</div>
	);
};

export default Home;
