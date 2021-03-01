import React, { useState } from "react"
import {
	Container,
	FormControl,
	InputGroup,
} from "react-bootstrap"
import "../style/style.scss"
import Randomizer from "./randomizer"

const Main = () => {
	const [numberOfStudents, setNumberOfStudents] = useState()

	return (
		<div className="mainPage">
			<Container
				style={{
					maxHeight: "20rem",
				}}
			>
				<InputGroup
					size="lg"
					style={{ maxWidth: "20rem", margin: "auto" }}
				>
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">
							Počet studentů
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						style={{
							maxWidth: "10rem",
						}}
						type="number"
						onChange={(e) => {
							setNumberOfStudents(e.target.value)
						}}
						value={numberOfStudents}
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>

				<Randomizer numberOfStudents={numberOfStudents} />
				<h5
					style={{
						textAlign: "center",
						paddingTop: "1rem",
					}}
				>
					Click the square to roll.
				</h5>
			</Container>
		</div>
	)
}

export default Main
