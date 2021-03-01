import { motion } from "framer-motion"
import React, { useState } from "react"
import "../style/style.scss"

const Randomizer = ({ numberOfStudents }) => {
	const [random, setRandom] = useState()
	const min = 1

	return (
		<motion.div
			className="buttonR"
			whileTap={{
				scale: 0.8,
				rotate: -90,
				borderRadius: "100%",
			}}
			onClick={() => {
				if (numberOfStudents > 0) {
					setRandom(
						Math.round(
							min + Math.random() * (numberOfStudents - min)
						)
					)
				}
			}}
		>
			<h2>{random}</h2>
		</motion.div>
	)
}

export default Randomizer
