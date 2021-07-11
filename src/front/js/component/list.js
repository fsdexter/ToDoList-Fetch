import React from "react";

export const List = ({ listOfTodos }) => {
	return (
		<>
			{listOfTodos.map(todo => {
				return (
					<ul key={todo.id} className="list-group">
						<li className="list-group-item">{todo.content}</li>
					</ul>
				);
			})}
		</>
	);
};
