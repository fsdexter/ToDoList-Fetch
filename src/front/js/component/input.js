import React from "react";

export const Input = ({ userInput, onInputChange, onInputSubmit }) => {
	const chandHandeler = e => {
		onInputChange(e.target.value);
	};

	const handelSubmit = e => {
		e.preventDefault();
		onInputSubmit();
	};

	return (
		<>
			<form onSubmit={handelSubmit}>
				<input type="text" required value={userInput} onChange={chandHandeler} />
				<input type="submit" />
			</form>
		</>
	);
};
