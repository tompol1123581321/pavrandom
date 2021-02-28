import { motion } from "framer-motion"
import React, { useState } from "react"

const Randomizer = ({ numberOfStudents }) => {
	const [click, setClick] = useState("click")
	const min = 1
	const max = numberOfStudents
	const [random, setRandom] = useState(numberOfStudents)
	return (
		<div className="Randomizer">
			<motion.div
				className="buttonR"
				whileTap={{
					scale: 0.8,
					rotate: -90,
					borderRadius: "10rem",
				}}
				onClick={() => {
					if (numberOfStudents > 0) {
						setRandom(
							Math.round(min + Math.random() * (max - min))
						)
						setClick(random)
					}
				}}
			>
				<h2>{click}</h2>
			</motion.div>
		</div>
	)
}

export default Randomizer
