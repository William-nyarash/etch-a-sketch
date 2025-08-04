const container = document.querySelector(".container");
const body = document.querySelector(".body")
const button = document.createElement("div")

button.classList.add("button")
button.textContent = "start"
body.appendChild(button)
const randomValue = () => {
	const value = Math.floor(Math.random() * 256)
	return value
}
button.addEventListener("click", () => {
	
	const numberOfSquares =	parseInt(prompt("Enter the number of squares you want generated "))

	if (isNaN(numberOfSquares)) {
		alert("Warning the input must be a number");
	}
	if(numberOfSquares > 100){ 
			 alert("Only numbers less than 100 are allowed")
		}

	body.appendChild(button)
	for(let i = 0; i < numberOfSquares; i ++){
	for (let n = 0; n < numberOfSquares; n ++) {
		const div = document.createElement("div")
		div.classList.add('div')
		div.addEventListener("mouseover", ()=> {
			div.style.backgroundColor =	`rgb(${randomValue()}, ${randomValue()} , ${randomValue()})`
		})
		container.appendChild(div)
}
}
})

