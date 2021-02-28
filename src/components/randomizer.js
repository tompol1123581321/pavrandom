import React, { useState } from "react"
import { Button } from "react-bootstrap"

const Randomizer = ({ numberOfStudents }) => {
	const min = 1
	const max = numberOfStudents
	const [random, setRandom] = useState(numberOfStudents)
	return (
		<div className="Randomizer">
			<Button
				onClick={() => {
					if (numberOfStudents > 0) {
						setRandom(
							Math.round(min + Math.random() * (max - min))
						)
					}
				}}
			>
				Click
			</Button>
			<h1>vysledek: {random}</h1>
		</div>
	)
}

export default Randomizer
