import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Input } from "../component/input";
import { List } from "../component/list";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState([]);
	const [addTodo, setAddTodo] = useState("");

	useEffect(() => {
		fetch("/api/todo")
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => setTodo(data));
	}, []);

	const inputChangeHandle = inputValeu => {
		setAddTodo(inputValeu);
	};

	const handelInputSubmit = () => {
		fetch("/api/creat", {
			method: "POST",
			body: JSON.stringify({
				content: addTodo
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(response => response.json())
			.then(message => console.log(message));
	};

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<Input userInput={addTodo} onInputChange={inputChangeHandle} onInputSubmit={handelInputSubmit} />
			<List listOfTodos={todo} />
		</div>
	);
};
