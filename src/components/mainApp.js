import React, { useState } from "react"
import {
	Card,
	Container,
	FormControl,
	InputGroup,
} from "react-bootstrap"
import "../style/style.scss"
import Randomizer from "./randomizer"

const Main = () => {
	const [numberOfStudents, setNumberOfStudents] = useState(
		1
	)
	return (
		<div className="mainPage">
			<Container>
				<InputGroup size="lg">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">
							Počet studentů
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						style={{ maxWidth: "10rem" }}
						type="number"
						onChange={(e) => {
							if (e.target.value < 1) {
								alert("number must atleast 1")
							} else {
								setNumberOfStudents(e.target.value)
							}
						}}
						value={numberOfStudents}
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>
				<Randomizer numberOfStudents={numberOfStudents} />
			</Container>
		</div>
	)
}

export default Main
